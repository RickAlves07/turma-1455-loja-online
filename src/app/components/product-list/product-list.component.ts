import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

 private productService = inject(ProductService);
 public products = toSignal(this.productService.getProducts());

}
