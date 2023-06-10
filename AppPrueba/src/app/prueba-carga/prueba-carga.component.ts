import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-carga',
  templateUrl: './prueba-carga.component.html',
  styleUrls: ['./prueba-carga.component.css']
})
export class PruebaCargaComponent implements OnInit {

  mostrar:boolean=false;
  elementos: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];

  personas = [
    { nombre: 'Juan', edad: 25, correo: 'juan@example.com' },
    { nombre: 'María', edad: 30, correo: 'maria@example.com' },
    { nombre: 'Pedro', edad: 28, correo: 'pedro@example.com' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  ver(){
  if (this.mostrar) {
    this.mostrar=false;
  }else{
    this.mostrar=true;
  }


  }

}
