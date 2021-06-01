import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component'


import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ItemComponent,
    HeaderComponent,
    ItemsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
