import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-prueba-carga',
  templateUrl: './prueba-carga.component.html',
  styleUrls: ['./prueba-carga.component.css']
})
export class PruebaCargaComponent implements OnInit {
  listaCapitulos: any;
  mostrar: boolean = false;
  elementos: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];


  personas = [
    { nombre: 'Juan', edad: 25, correo: 'juan@example.com' },
    { nombre: 'María', edad: 30, correo: 'maria@example.com' },
    { nombre: 'Pedro', edad: 28, correo: 'pedro@example.com' }
  ];

  titulo: any = "Esto esta modificado";
  constructor(private getApi: CrudService) {
    this.ver();
  }

  ngOnInit(): void {
    console.log(this.listaCapitulos);
  }
  ver():any {
     this.getApi.consumoApiRyM()
      .subscribe(
        (data) => {this.listaCapitulos=data.results;
          console.log(data.results);
        });

  }

}
