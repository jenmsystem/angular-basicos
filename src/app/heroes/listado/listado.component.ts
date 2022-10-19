import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[]=['Spiderman','Ironman','Hulk','Thor','Capitan américa']
  heroeBorrado:string='';
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
    //this.heroes.splice(0,1);
  }

}
