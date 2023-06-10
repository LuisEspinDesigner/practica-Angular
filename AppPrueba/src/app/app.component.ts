import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppPrueba';

  //String variable="dasds";
  esArray:string[]=['1','2','3'];
  numero!:number;
  fecha!:Date;

  prueba:any="valor";
  VPruebaSinDato:any;
  constructor(){

  }

  suma (a:number,b:number){
    console.log(a+b);
    console.log(this.prueba);

  }
}
