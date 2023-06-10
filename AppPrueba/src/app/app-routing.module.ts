import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaCargaComponent } from './prueba-carga/prueba-carga.component';
import { Prueba2Component } from './prueba2/prueba2.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch: 'full'},
  {path: 'home',component:  PruebaCargaComponent},
  {path:'prueba',component: Prueba2Component},
  {path:'**',redirectTo:'prueba',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
