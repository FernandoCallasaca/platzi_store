import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartService } from './../../../core/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;

  constructor(
    private cartService: CartService,
  ) {
    // Haremos una escucha al observable

    // this.cartService.cart$.subscribe(products => {
    //   console.log(products);
    //   this.total = products.length;
    // });

    this.total$ = this.cartService.cart$
      .pipe(
        map(products => products.length)
      );
  }

  ngOnInit(): void {
  }

}
