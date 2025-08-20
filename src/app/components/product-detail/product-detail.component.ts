import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  public product = toSignal (
    this.route.params.pipe(
      map(params => params['id']),
      switchMap(id => this.productService.getProductById(id))
    )
  );
}
