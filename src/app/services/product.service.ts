import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product';

@Injectable()
export class ProductService {
  products: Product[] = [
    {
      product_id: 1,
      product_name: 'Samsumng',
      product_color: 'green',
      product_price: 123990,
      product_category: 'Electronics',
      product_description: 'Lorem lorem ipsum lorem ipsum',
    },
    {
      product_id: 2,
      product_name: 'Nokia',
      product_color: 'Blue',
      product_price: 1230,
      product_category: 'Electronics',
      product_description: 'Lorem lorem ipsum lorem ipsum',
    },
    {
      product_id: 3,
      product_name: 'Watch',
      product_color: 'Black',
      product_price: 3990,
      product_category: 'Gadgets',
      product_description: 'Electronics gadgets',
    },
    {
      product_id: 4,
      product_name: 'Roadster Jeans',
      product_color: 'Blue',
      product_price: 990,
      product_category: 'Clothing',
      product_description: 'Roadster jeans that fits you well',
    },
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id:number): Observable<Product> {
    var product = this.products.find((i) => (i.product_id === id));
    return of(product);
  }
}
