// 3.- Luego de importar Swiper y crear la variable
// Incluimos el elemento AfterViewInit que nos dice cuando los elementos hijos ya fueron renderizados
// O sea ya debío renderizar las imágenes y el html de banner.component.html
import { Component, OnInit, AfterViewInit } from '@angular/core';
// 1.- Instalamos swiper "import i swiper --save", modificamos el angular.json y importamos Swiper de swiper
// Para eso tuvimos que modificar el angular.json el styles
// Lo ponemos aquí porque es la base de todo el banner o sea este es el home
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// 4.- Luego implementamos el AfterViewInit
export class HomeComponent implements OnInit, AfterViewInit {

  // 2.- Creamos una variable mySwiper de tipo Swiper
  mySwiper: Swiper;

  constructor() { }

  ngOnInit(): void {
  }

  // 5.- Y ahí colocamos ese método ya que sus hijos o el banner.component.html ya está renderizado
  ngAfterViewInit(): void {
    // 6.- Y le damos una clase para identificar el html del banner.component.html
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      }});
  }
}
