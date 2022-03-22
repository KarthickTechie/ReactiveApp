import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products$:Observable<any> =   this.http.get("../assets/data/inventory.json");

  
  itemsincartBS = new BehaviorSubject<Item[]>([]);
  itemsincartBS$ = this.itemsincartBS as Observable<Item[]>;
  myCart:Item[] = [];
  myProducts:Item[] = [
    {
      productName:"Apple",
      productPrice:200,
      quanityPurchased:0
    },
    {
      productName:"Orange",
      productPrice:350,
      quanityPurchased:0
    }
  ];

  constructor(public http:HttpClient) { 
    

  
  }

  addItemsToCart(item:Item){

    this.myCart.push(item);
    this.itemsincartBS.next(this.myCart);
  }

  getCart():Observable<Item[]>{
    return this.itemsincartBS$;
  }

  getProducts(){
    return this.myProducts;
  }

  
}


export interface Item{
  productName:string;
  productPrice:number;
  quanityPurchased:number;
}
