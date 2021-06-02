import { Component, OnInit } from '@angular/core';

import { CartService } from './../../../core/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  total = 0;

  constructor(
    private cartService: CartService,
  ) {
    // Haremos una escucha al observable
    this.cartService.cart$.subscribe(products => {
      console.log(products);
      this.total = products.length;
    });
  }

  ngOnInit(): void {
  }

}
