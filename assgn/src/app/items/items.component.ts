import { Component, OnInit } from '@angular/core';

import { items } from '../services/item.service';
import { ItemComponent } from '../item/item.component';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  public items:any = [];
  public color:any =  "#cccccc";
  constructor(private productService:ProductService) { 
    this.items =  items;

  }

  ngOnInit(): void {
    this.productService.updateData(this.color);
  }

}
