import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(
    private http: HttpClient
  ) { }
  
  private productsUrl = '../../assets/products.json';

  getProducts() {
    return this.http.get(this.productsUrl);
  }

}
