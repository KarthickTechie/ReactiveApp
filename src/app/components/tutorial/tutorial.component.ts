import { Component, OnInit } from '@angular/core';
import { Calculator } from 'src/app/Utils/Calculator';
import { Converter } from 'src/app/Utils/Converter';
import { Person } from 'src/app/Utils/Person';
import { ScientificCalculator } from 'src/app/Utils/ScientificCalculator';



@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {


  /*
    variable declartion with types , union types 
    working with array
    any type 
    typescript methods
    constructing string
    class
    interfaces 
    exceptions
    objects 
  */


  // union type
  
  // template string 

  // any type 

  Iamany:any;


  constructor() {

    
    console.log(this.drivebike("KTM"))


  }

  ngOnInit(): void {

  }


    drivebike(bikename:string,price=100):string {

      return `driving bike...${bikename} and the price is ${price?.toFixed()}`
  }


  // default and optiona parameters 




  

}


/*

Exception
Asyncronous operation using asyn and await 
Asyncronous operation using Promise


Task 1 :

  Angular - component - u should populate the data from web service . using http client

  


*/


