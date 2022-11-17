import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { ZapatosComponent } from './zapatos/zapatos.component';
import { BolsosComponent } from './bolsos/bolsos.component';

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
  },

  {
    path: 'zapatos',
    component: ZapatosComponent
  },

  {
    path: 'bolsos',
    component: BolsosComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
