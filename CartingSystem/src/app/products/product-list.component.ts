import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : IProduct[];
  constructor(private _productService : ProductService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(products => this.products = products);
  }

}
