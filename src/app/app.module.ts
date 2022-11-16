import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
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
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PromocionesComponent,
    NovedadesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
