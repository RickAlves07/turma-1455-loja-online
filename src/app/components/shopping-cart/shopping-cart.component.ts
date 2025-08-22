import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeProductFromCart } from '../../store/cart.actions';

@Component({
  selector: 'app-shopping-cart',
  imports: [AsyncPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  private store = inject(Store);

  cartItems$: Observable<any[]>;

  constructor() {
    this.cartItems$ = this.store.select((state) => state.cart.items);
  }

  removeItem(productId: number) {
    this.store.dispatch(removeProductFromCart({ productId }));
    console.log('Product removed to cart:', productId);
  }
}
