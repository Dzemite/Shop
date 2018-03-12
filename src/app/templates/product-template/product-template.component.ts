import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../../entities/product';
import { ExtraZerosPipe } from '../../pipes/extra-zeros.pipe';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.less']
})
export class ProductTemplateComponent implements OnInit {

  @Input()
  product: Product;

  current_unit: string;
  current_price_retail: number;
  current_price_gold: number;
  product_count: number;
  product_assoc: string[];

  constructor(
    private extraZerosPipe: ExtraZerosPipe
  ) {}

  ngOnInit() {
    this.product_count = 1;
    this.current_unit = unit.M2;
    this.current_price_retail = this.product.priceRetailAlt;
    this.current_price_gold = this.product.priceGoldAlt;
    this.product_assoc = this.genProductAssoc();
  }

  addIntoBasket(prod) {
    alert(`You put in your basket ${this.product_count} product(s) with code ${this.extraZerosPipe.transform(prod.code)}.
Product id: ${prod.productId}`);
  }

  increment() {
    this.product_count++;
  }

  decrement() {
    if (this.product_count > 1)
      this.product_count--;
  }

  checkCount() {
    if (this.product_count < 1)
      this.product_count = 1;
  }

  changeUnit(target) {
    if ( target.classList.contains('unit--active') ) return;

    if (this.current_unit === unit.M2) {
      this.current_unit = unit.PACK

      this.current_price_retail = this.product.priceRetail;
      this.current_price_gold = this.product.priceGold;
    } else {
      this.current_unit = unit.M2;

      this.current_price_retail = this.product.priceRetailAlt;
      this.current_price_gold = this.product.priceGoldAlt;
    }
  }

  activateM2Unit(){
    return this.current_unit === unit.M2 ? 'unit--active' : ''; 
  }

  activatePackUnit(){
    return this.current_unit === unit.PACK ? 'unit--active' : ''; 
  }

  genProductAssoc(): string[] {
    let arrStr = this.product.assocProducts.replace(/;/g, ', ').split('\n');
    arrStr[arrStr.length - 1] = arrStr[arrStr.length - 1].replace(/,/g, '.');

    return arrStr;
  }
}

enum unit {
  M2 = 'm^2',
  PACK = 'pack'
}