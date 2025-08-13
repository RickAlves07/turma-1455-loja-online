import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { AvailabilityPipe } from '../../pipes/availability.pipe';


@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, DatePipe, UpperCasePipe, AvailabilityPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnChanges {
  @Input() product: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      console.log('Produto mudou:', changes['product'].currentValue);
    }
  }

  ngOnDestroy(): void {
    console.log('Componente de detalhes de produto foi destruído', 'color: red; font-weight: bold;');
  }
}
