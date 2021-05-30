import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  title = 'Titulo';
  number = 0;

  // Creamos una arreglo
  items = ['Fernando', 'Julián', 'Pedro'];

  ngOnInit(): void {
  }

  // Creamos un método para agregar al arreglo
  addItem(element): void {
    this.items.push(element);
  }

  // Creamos un método para eliminar el arreglo
  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

}
