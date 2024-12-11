import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface usuario{
  id?:string;
  email:string;
  modelo:string;
  patente:string;
}


@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private collectionName="usuarios";
  constructor(private firestore:AngularFirestore) { }

  getCarById(id: string): Observable<usuario | undefined> {
    return this.firestore
      .collection<usuario>(this.collectionName)
      .doc(id)
      .valueChanges();
  }
}
