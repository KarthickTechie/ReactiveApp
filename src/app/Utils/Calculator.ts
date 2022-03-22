export class Calculator{

    // base business logic will be encapsulated in base class or parent class

    operands:number[];

    operator:string;


    constructor(_operands:number[],_operator:string){
            this.operands = _operands;
            this.operator = _operator;
    }
    
    add():number{
        let result:number=0;
        this.operands.map(x=>result+=x) 
        return result;
    }



}