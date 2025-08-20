import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';
import { CategoryListComponent } from '../category-list/category-list.component';

@Component({
  selector: 'app-product-list',
  imports: [RouterModule, CategoryListComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  private productService = inject(ProductService);
  public products = toSignal(this.productService.getProducts());

  getProductsByCategory(category: string) {
    this.products = toSignal(
      this.productService.getProductsByCategory(category)
    );
  }
}
