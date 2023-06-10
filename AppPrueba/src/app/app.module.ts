import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PruebaCargaComponent } from './prueba-carga/prueba-carga.component';
import { AppRoutingModule } from './app-routing.module';
import { Prueba2Component } from './prueba2/prueba2.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaCargaComponent,
    Prueba2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
