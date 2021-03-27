import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Titulo';

  // Creamos una arreglo
  items = ['Fernando', 'Julián', 'Pedro'];

  // Creamos un método para agregar al arreglo
  addItem (element) {
    this.items.push(element);
  }

  // Creamos un método para eliminar el arreglo
  removeItem (index : number) {
    this.items.splice( index, 1 );
  }
}
