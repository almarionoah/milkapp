import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ProductListService } from '../product-list.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.page.html',
  styleUrls: ['./quantity.page.scss'],
})
export class QuantityPage implements OnInit {
 quantity = 0;
 productId: number; // must become string or hexadecimal
 btnAddToCartIsEnabled = false;
  constructor(private navParameter: NavParams, private productList: ProductListService) {
  }

  ngOnInit() {
   this.productId = this.navParameter.data.productID;
   console.log(this.productList.isInCart(this.productId));
   console.log(this.productId);
   if (this.productList.isInCart(this.productId) === true) {
    this.btnAddToCartIsEnabled = true;
    } else {
      this.btnAddToCartIsEnabled = false;
    }
  }
  addToCart() {
    if ((Number(this.quantity) !== undefined) && (Number(this.quantity) !== null) && (Number(this.quantity) > 0) && (this.productList.isInCart(this.productId) === false)) {
      const product = this.productList.getProduct(this.productId);
      product.quantity = this.quantity;
      this.productList.addItem(product);
      this.btnAddToCartIsEnabled = true;
    } else {
      alert('must be a postive value');
    }
  }

  removeFromCart() {
    return true;
  }
}
