import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponet {

    nombre: string = 'Juan';
    edad: number = 19;


    getnombre(): string{
      return this.nombre + '-' + this.edad;
    }
    
   get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    cambiarnombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
   


}