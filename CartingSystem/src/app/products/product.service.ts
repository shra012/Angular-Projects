import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private uri : string = '../../../api/products/products.json';
  constructor(private http : HttpClient) { }

  public getProducts():Observable<any>{
    return this.http.get(this.uri);
  }
}
