import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';

import { Store } from '@ngrx/store';
import * as CartActions from '../../store/cart.actions';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})

export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private store = inject(Store);

  public product = toSignal (
    this.route.params.pipe(
      map(params => params['id']),
      switchMap(id => this.productService.getProductById(id))
    )
  );

  addToCart() {
    this.store.dispatch(CartActions.addProductToCart({ product: this.product() }));
    console.log('Product added to cart:', this.product());
  }
}
