import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { AvailabilityPipe } from '../../pipes/availability.pipe';
import { SaleBadgePipe } from '../../pipes/sale-badge.pipe';


@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, DatePipe, UpperCasePipe, AvailabilityPipe, SaleBadgePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnChanges {
  @Input() product: any;
  isZoomed = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      console.log('Produto mudou:', changes['product'].currentValue);
    }
    if(this.product.onSale) {
      this.product.price = this.product.price - (this.product.price * this.product.discount);
    }
  }

  ngOnDestroy(): void {
    console.log('Componente de detalhes de produto foi destruído', 'color: red; font-weight: bold;');
  }
}
