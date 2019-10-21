import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { QuantityPageModule } from './quantity/quantity.module';
import { ProductsPageModule } from './products/products.module';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), ProductsPageModule , QuantityPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
