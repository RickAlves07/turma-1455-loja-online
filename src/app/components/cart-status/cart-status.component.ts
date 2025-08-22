import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";

@Component({
  selector: 'app-cart-status',
  imports: [AsyncPipe, ShoppingCartComponent],
  templateUrl: './cart-status.component.html',
  styleUrl: './cart-status.component.scss'
})
export class CartStatusComponent {
  isCartOpened = false;
  cartItemCount$: Observable<number>;

  constructor(private store: Store<{ cart: { items: any[] } }>) {
    this.cartItemCount$ = this.store.select(state => state.cart.items.length);
  }

  openCart() {
    this.isCartOpened = !this.isCartOpened;
  }
}
