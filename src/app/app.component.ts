import { Component, OnInit } from '@angular/core';
import { Item, ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'ReactiveApp';
  itemsincart:Item[]=[];

  constructor(private productservice:ProductService){

  }

  ngOnInit(): void {

    this.productservice.getCart().subscribe(items=>this.itemsincart=items)

  }

  showItemsInCart(){
    alert(JSON.stringify(this.itemsincart))
  }
}
