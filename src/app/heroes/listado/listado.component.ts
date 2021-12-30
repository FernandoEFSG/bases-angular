import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  heroes: string [] = ['iroman','iroman2','iroman3','iroman4'];
  heroeBorrado: string  = '';


  constructor() { }

  ngOnInit(): void {
  }
  
 borrar(){
     this.heroeBorrado =   this.heroes.shift() || '';
   

   console.log(  this.heroeBorrado);

 }

}
