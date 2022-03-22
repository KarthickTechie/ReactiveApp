import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { interval, map, Observable, Observer, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  
  @ViewChild('progressbar')progressbar!:ElementRef;

  progressBarSubscription!:Subscription;
  dynamicWidth!:number;
  progresspercentage!:number;
  constructor(private el:ElementRef,private renderer:Renderer2) { 
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.progressBarSubscription=interval(1000)
      .pipe(
        map(data=>data*2),
      ).subscribe(data=>{
        this.progresspercentage=Math.floor(data);
        this.progressbar.nativeElement.style.width=this.progresspercentage+'%'

          if(this.progresspercentage==100){
            this.progressBarSubscription.unsubscribe()
          }
      })

    
  }


   ngOnDestroy(){
      this.progressBarSubscription.unsubscribe()
   }

}
