import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Product } from './entities/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  products: any | Product[];

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.dataService.getProducts()
      .subscribe( data => this.products = data,
                  error => console.log(`Something wrong, error: ${error}`));
  }
}
