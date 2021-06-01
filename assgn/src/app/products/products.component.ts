import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { items } from '../services/item.service';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public categoryType : any;
  private items : any;
  public products : any;
  public color : any;
  constructor(private route: ActivatedRoute, private productService:ProductService) { 
    this.items = items;
  }
  public  displayProduct(product:any) {
    console.log(product);
  }

  ngOnInit(): void {
    this.categoryType = this.route.snapshot.paramMap.get('type');

    this.items.map((item:any) => {
      if(item.type == this.categoryType){
        this.products = item.products;
        this.color = item.color;
      }
    });

    this.productService.updateData(this.color);
  }
}

