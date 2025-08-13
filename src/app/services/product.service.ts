import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return [
      {
        id: 1,
        name: 'Produto 1',
        description: 'Descrição do produto 1',
        price: 100,
        launchDate: new Date('2025-09-01'),
        available: true,
		    onSale: true,
        discount: 0.15
      },
      {
        id: 2,
        name: 'Produto 2',
        description: 'Descrição do produto 2',
        price: 200.50,
        launchDate: new Date('2025-09-15'),
        available: false,
        onSale: false,
        discount: 0,
      },
      {
        id: 3,
        name: 'Produto 3',
        description: 'Descrição do produto 3',
        price: 50,
        launchDate: new Date('2025-09-25'),
        available: true,
        onSale: true,
        discount: 0.15
      },
      {
        id: 3,
        name: 'Produto 4',
        description: 'Descrição do produto 4',
        price: 50,
        launchDate: new Date('2025-01-06'),
        available: true,
        onSale: true,
        discount: 0.15
      }
    ]
  }
}
