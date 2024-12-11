import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userEmail = new BehaviorSubject<string | null>(null);
  constructor(private afAuth:AngularFireAuth) { 

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userEmail.next(user.email);
      } else {
        this.userEmail.next(null);
      }
    });

  }

  getUserEmail() {
    return this.userEmail.asObservable();
  }

  async login(email:string,password:string){
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }
  async register(email:string,password:string){
    return this.afAuth.createUserWithEmailAndPassword(email,password);
  }
  async logout(){
    this.afAuth.signOut();
  }
  getUser(){
    return this.afAuth.user;
  }
}



  
 