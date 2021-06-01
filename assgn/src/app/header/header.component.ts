import { Component } from '@angular/core';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'assgn';
  public value:any ;
  public color:any = "#ff0000";
  constructor(private productService: ProductService){
    this.productService.getData().subscribe(data=>{
      this.color = data;
    })
  }
  public search(data:any){
    console.log(data);
  }
}

