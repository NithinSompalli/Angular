import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsComponent} from './items/items.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductsComponent} from './products/products.component';

const routes: Routes = [
  { path: 'products/:type', component: ProductsComponent },
  { path: 'items',        component: ItemsComponent },
  { path: '',   redirectTo: '/items', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
