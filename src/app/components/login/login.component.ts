import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  email:string = "";
  password:string = "";

  constructor(private authService:AuthService, private router:Router ,private dataService: DataService) { }

  ngOnInit() {}
  async ver(){
    nombre: this.email;
  }
  

  async login(){
    try{
      await this.authService.login(this.email,this.password);
      alert("Inicio de Sesión exitosa!");
      this.dataService.setEmail(this.email);
      console.log(this.email)
      this.router.navigate(["/inicio"]);
    }catch(error){alert("Error al iniciar sesión!"+error)}
  }

}
