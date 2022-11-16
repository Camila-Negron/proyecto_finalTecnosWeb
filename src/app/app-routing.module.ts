import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { NovedadesComponent } from './novedades/novedades.component';

const router: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'promociones',
    component: PromocionesComponent
  },

  {
    path: 'novedades',
    component: NovedadesComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
