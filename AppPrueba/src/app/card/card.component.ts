import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() rutaImage:string="../../assets/gatito.jfif";
  @Input() color:string='#000';

  @Input() tituloCard;

  constructor() {
    this.tituloCard="Titulo sin modificar"
   }

  ngOnInit(): void {
  }

}
