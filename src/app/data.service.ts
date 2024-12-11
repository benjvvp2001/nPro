import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private email: string = '';
  private modelo: string = '';
  private patente: string = '';

  constructor() {}

  setEmail(email: string) {
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }

  setmodelo(modelo: string){
    this.modelo = modelo;
  }

  getmodelo(): string{
    return this.modelo
  }

  setpatente(patente: string){
    this.patente = patente
  }
  getpatente(): string{
    return this.patente
  }

}