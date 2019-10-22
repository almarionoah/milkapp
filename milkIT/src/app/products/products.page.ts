import { Component, OnInit } from '@angular/core';
import { Products } from './products.model';
import { PopoverController } from '@ionic/angular';
import { QuantityPage } from '../quantity/quantity.page';
import {ProductListService} from '../product-list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: Products[];
  quantityAlertShouldShow = true;
  successAddAlertShouldShow = true;
  successRemoveAlertShouldShow = true;
  emptyCartAlertShouldShow = true;
  isProductsSelected = false;
  isPrintSelected = true;
  cartItems = [];
  total = 0;
  constructor(private popoverController: PopoverController, private productList: ProductListService) { }
  ngOnInit() {
    this.products = this.productList.getProducts();
  }

  async toggleQuantity(productId: any) {
  const popover = await this.popoverController.create({
    component: QuantityPage,
    componentProps: {
      productID: productId
    },
  });
  return await popover.present();
 }

 closeEmptyCartAlertBoxCheckOut() {
   this.emptyCartAlertShouldShow = true;
 }

 closeSuccessRemoveAlertBox() {
  this.successRemoveAlertShouldShow = true;
 }

 closeSuccessAddAlertBox() {
  this.successAddAlertShouldShow = true;
 }
 closeQuantityAlertBox() {
  this.quantityAlertShouldShow = true;
 }
 getTotal() {
   return this.productList.getTotal();
 }
 getCartLength() {
  return this.productList.getCartLength();
 }
 checkOut() {
  this.cartItems =  this.productList.getCart();
  if (this.cartItems.length > 0) {
    this.isProductsSelected = true;
    this.isPrintSelected = false;
  }
 }

 paymentGateway() {
   return;
 }

 closePrintSelection() {
   this.isPrintSelected = true;
   this.isProductsSelected = false;
 }

 getDate() {
   return new Date();
 }

 getQuoteNumber() {
   const quoteNumber = ((Math.random() * 9999) + 1) + 'milkIT';
   return btoa(quoteNumber).substring(0, 11);
 }

 getValidityPeriod() {
   const today = new Date();
   const currentDay = today.getDay();
   const validityExpiryDay = currentDay + 5;
   today.setDate(validityExpiryDay);
   return today;
 }

 computeSubTotal(quantity: number , price: number) {
  return (quantity * price);
 }
}
