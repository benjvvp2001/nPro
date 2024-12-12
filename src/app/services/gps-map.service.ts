import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GpsMapService {
  mapbox=(mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map | null = null;
  style = 'mapbox://styles/mapbox/streets-v12';
  lat=-33.51585232886527;
  lng=-70.59810338976429;
  zoom =17;
  
  constructor(private http: HttpClient) {}


  buildmap(): Promise<void>{
    return new Promise((resolve, reject) => {
      try {
        this.map = new mapboxgl.Map({
          container:'map',
          style: this.style,
          zoom: this.zoom,
          center:[this.lng, this.lat],
          accessToken: environment.mapPK
        });
        const marker = new mapboxgl.Marker({
          draggable:true,
        })
        
        this.map.on('load', () =>resolve());
    

      } catch (e) {
        reject(e);
      }
    })
    
  }
  getCoordenadas(direccion: string):Observable<any>{
    const geourl=`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(direccion)}.json?access_token=${'pk.eyJ1IjoiYXBwbW92aWwiLCJhIjoiY20ybnJocmhrMDhxZjJrcHN6azNqZXk1ZSJ9.1fZzK5jTAiNUxwurKR5tNw'}`;

    return new Observable((observer)=>{
      this.http.get(geourl).subscribe((Response: any)=>{
        if (Response.features && Response.features.length > 0){
          const coordinadas = Response.features[0].geometry.coordinadas;
          observer.next(coordinadas)
        } else{
          observer.error('no se encontro direccion');
        }
      })
    })
  }

  drawRoute(star:string, end:string): void{
    this.getCoordenadas(end).subscribe((endCoor:number[])=>{
      const directionsUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${star};${endCoor.join(
        ','
      )}?geometries=geojson&access_token=${environment.mapPK}`;

      this.http.get(directionsUrl).subscribe((Response:any)=>{
        const data = Response.routes[0].geometry;
        const routeSources= this.map?.getSource('route') as mapboxgl.GeoJSONSource;

        if(routeSources){
          routeSources.setData({
            type: 'Feature',
            geometry: data,
            properties: {}
          });
        }else {
          this.map?.addSource('route', {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: data,
              properties: {}
            }
          });

          this.map?.addLayer({
            id: 'route',
            type: 'line',
            source: 'route',
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#3b9ddd', // Color de la línea de la ruta
              'line-width': 5 // Ancho de la línea
            }
          });
        }
      });
    });
  }
}

function setDestino(destino: any, string: any) {
  throw new Error('Function not implemented.');
}
