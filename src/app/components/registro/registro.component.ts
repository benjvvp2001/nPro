import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {
  email:string = "";
  password:string = "";

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {}
  async register(){
    try{
      await this.authService.register(this.email,this.password);
      alert("Registrado exitosamente!"+this.email);
      this.router.navigate(["/home"]);
    }catch(error){alert("Error al Registrarse!"+error)}
  }

}
