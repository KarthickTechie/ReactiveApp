import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { tap } from 'rxjs';
import { Observable, of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class InventoryComponent implements OnInit {
  isShown:boolean = false;
  products$:Observable<any[]> = this.productService.products$
  .pipe(
    tap((data)=>console.log(data)),
    map((products)=> {return products["inventory"]}))

  constructor(private productService:ProductService) { 

    
  }

  ngOnInit(): void {

  }

  onClickProductType(e:any){

      e.style.display="none"
  
    //this.isShown = !this.isShown    
  }

  clickedView(e:string){
    alert(e)
  }

}
