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
  constructor(private popoverController: PopoverController, private productList: ProductListService) { }

  ngOnInit() {
    this.products = this.productList.getProducts();
  }

  async toggleQuantity(productId: any) {
  const popover = await this.popoverController.create({
    component: QuantityPage,
    componentProps: {productID: productId},
  });
  return await popover.present();
 }

}
