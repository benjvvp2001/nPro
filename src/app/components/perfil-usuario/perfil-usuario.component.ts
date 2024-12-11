import { Component, OnInit } from '@angular/core';
import { CarsService, Car } from '../../services/cars.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss'],
})
export class PerfilUsuarioComponent  implements OnInit {
  
  user: string|null=null
  constructor(private route: ActivatedRoute,private carsService:CarsService, private aService:AuthService) { }

  ngOnInit() {
    this.aService.getUserEmail().subscribe(email => {
    this.user = email;  })

  }

}
