import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListarRegistrosComponent } from './listar-registros/listar-registros.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    ListarRegistrosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class Persona {
  constructor(
        public distrito: number,
        public seccion: number,
        public manzana:number,
        public ap_pat:string,
        public ap_mat:string,
        public nombres:string,
        public calle:string,
        public colonia:string,
        public n_exterior:string,
        public n_interior:string,
        public telefono:string,
        public redes:string,
        public auditoria:string
    ) { }
}
