import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Item, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-lpaudit',
  templateUrl: './lpaudit.component.html',
  styleUrls: ['./lpaudit.component.scss']
})
export class LpauditComponent implements OnInit {

  // shopping cart code 

  products!:Item[];




  displayStyle:string="none"
  auditdata:any[]=[];
  _auditheader:any;
  _auditcontent:any[]=[];
  _auditdata:any = {}

  selectedIndexBS = new BehaviorSubject<number>(0);
  selectedIndexBS$ = this.selectedIndexBS.asObservable()


  Headers$: Observable<string[]> = this.http.get("../assets/data/lpaudittrail.json")
  .pipe(
    tap((response: any) => {

      //        console.log(Object.keys(response.body))
    }),
    map((response: any) => {
      this.auditdata=response.auditData
      let auditDataHeaders = []
      return response.auditData.map((auditdata:any)=>{
        
        return Object.keys(auditdata)
      })[0]

      
    })
  )


contents$: Observable<any[]> = this.http.get("../assets/data/lpaudittrail.json")
  .pipe(
    tap((response: any) => {

      //  console.log(Object.keys(response.body))
    }),
    map((response: any) => {
      
      let values: any[] = []
      let keyscount=0;

    

      response.auditData.map((_response:any)=>{
        keyscount=Object.keys(_response).length;
        Object.keys(_response).map(k => {
          if((typeof _response[k] == 'object')){
            values.push('object')
          }else{
            
            values.push(_response[k])
          }
        })
      })

      
      let myArray = values
      let tmpArray =[]
      while(myArray.length>0){
        tmpArray.push(myArray.splice(0,keyscount))
      }

     console.log(tmpArray)

      return tmpArray
    })
  )

  contentsobj$: Observable<any[]> = this.http.get("../assets/data/lpaudittrail.json")
  .pipe(
    tap((response: any) => {

      //  console.log(Object.keys(response.body))
    }),
    map((response: any) => {
      
      let values: any[] = []
      let keyscount=0;

    

      response.auditData.map((_response:any)=>{
        keyscount=Object.keys(_response).length;
        Object.keys(_response).map(k => {
          values.push(_response[k])
        })
      })

      return values
    })
  )


  constructor(private http:HttpClient,private productservice:ProductService) { }

  ngOnInit(): void {
    
    
    this.products = this.productservice.getProducts();


      this._auditdata ={
        header:this.Headers$,
        content:this.contentsobj$,
        selectedIndex:this.selectedIndexBS$
      }
     

    
    
  }

  showAuditData(index:number){
      console.log(this.auditdata[index]["AuditData"])   

      this.displayStyle="block"
      this.selectedIndexBS.next(index)
  }

  closePopup(){
    this.displayStyle = "none"
  }

  add(){
    this.productservice.addItemsToCart(
     {
       productName:"Rice",
       productPrice:55,
       quanityPurchased:1
     }
      )    
  }


  incrementQuantity(productIndex:number){
    this.products[productIndex].quanityPurchased++;
  }

  decrementQuantity(productIndex:number){
    if(this.products[productIndex].quanityPurchased != 0)
      this.products[productIndex].quanityPurchased--; 
    else
      return
  }


  addToCart(product:Item){
    if(product.quanityPurchased==0){
      alert("Quantity is 0 , please add product -- click ' + ' to add product")
    }
    else{

      this.productservice.addItemsToCart(product)
    }
  }








}
