import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.fetchAllProduct();
  }

  // Fetch All Products
  // ---------------------------------------------
  fetchAllProduct(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
