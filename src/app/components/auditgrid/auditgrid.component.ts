import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, Subject, Subscription, tap } from 'rxjs';



@Component({
  selector: 'app-auditgrid',
  templateUrl: './auditgrid.component.html',
  styleUrls: ['./auditgrid.component.scss']
})
export class AuditgridComponent implements OnInit {

  @Input('auditdata')
  public Auditdata:any

  header:any
  content:any
  _header:any;
  _content:any
  constructor() { 
  }

  ngOnInit(): void {

    this.header = this.Auditdata.header
    this.content= this.Auditdata.content
      //alert(this.content)
    this.Auditdata.selectedIndex.subscribe((selectedIndex:any)=>{
      //alert(this.content[selectedIndex])
        this.content.subscribe((data:any)=>{
          
          let tmpArray =[]
          while(data.length>0){
            tmpArray.push(data.splice(0,4))
          }

          this._content = tmpArray[selectedIndex]
          let auditobj;
          for(let o of this._content){
            if(typeof o == 'object'){
              auditobj = o
            }
          }
          this._content = []
          
          this._header = Object.keys(auditobj)
          for(let k in auditobj){
            this._content.push(auditobj[k])
          }

        })

    })
   



  }

  processArray(contentArray:any[]|any):any[]{
    //alert(contentArray)
    let myArray = contentArray
    let tmpArray =[]
    while(myArray.length>0){
      tmpArray.push(myArray.splice(0,4))
    }
    return tmpArray
  }

}
