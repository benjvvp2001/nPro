import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'form-conductor',
    loadChildren: () => import('./form-conductor/form-conductor.module').then(m => m.FormConductorPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'list-viajes',
    loadChildren: () => import('./list-viajes/list-viajes.module').then(m => m.ListViajesPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'info-viaje/:id', // Ruta dinámica para ver detalles de un viaje
    loadChildren: () => import('./info-viaje/info-viaje.module').then(m => m.InfoViajePageModule),
    canActivate: [authGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'registro-car',
    loadChildren: () => import('./registro-car/registro-car.module').then( m => m.RegistroCarPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
