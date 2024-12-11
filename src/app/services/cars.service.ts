import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Car{
  id?:string;
  nombre:string;
  modelo:string;
  patente:string;
  destino:string;
  capacidad:number;
  tarifa:number;
  telefono:number;
}

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private collectionName="cars";
  constructor(private firestore:AngularFirestore) { }

  addCar(car:Car): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection(this.collectionName).doc(id).set({...car,id})
  }

  getCar():Observable<Car[]>{
    return this.firestore.collection<Car>(this.collectionName).valueChanges();
  }

  crea(car: Car): Promise<void> {
    return new Promise((resolve, reject) => {
      // Consultar si existe un carro con el mismo nombre
      this.firestore
        .collection<Car>(this.collectionName, ref => ref.where('nombre', '==', car.nombre))
        .get()
        .subscribe({
          next: (snapshot) => {
            if (!snapshot.empty) {
              // Si existe un carro con el mismo nombre, actualizamos los datos
              const docId = snapshot.docs[0].id; // Obtener el ID del documento existente
              this.firestore
                .collection(this.collectionName)
                .doc(docId)
                .update(car) // Actualizar con los nuevos datos
                .then(() => resolve())
                .catch(error => reject(error));
            } else {
              // Si no existe, creamos un nuevo registro
              const id = this.firestore.createId();
              this.firestore
                .collection(this.collectionName)
                .doc(id)
                .set({ ...car, id })
                .then(() => resolve())
                .catch(error => reject(error));
            }
          },
          error: (error) => reject(error),
        });
    });
  }
  


  getCarById(id: string): Observable<Car | undefined> {
    return this.firestore
      .collection<Car>(this.collectionName)
      .doc(id)
      .valueChanges();
  }
  
}
