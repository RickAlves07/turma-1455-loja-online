import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products: any[] = [];
  selectedProduct: any;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  selectProduct(product: any) {
    this.selectedProduct = product;
  }

  clearSelection() {
    this.selectedProduct = null;
    console.log('Seleção limpa!');
  }

}
