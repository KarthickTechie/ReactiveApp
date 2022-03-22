import { Calculator } from "./Calculator";

export class ScientificCalculator extends Calculator{

    scientificoperation:string
    constructor(_operands:number[],_operator:string,_scientificoperation:string){
        super(_operands,_operator)
        this.scientificoperation = _scientificoperation
    }

   
    calculate():number{
        let result=0;

        switch(this.scientificoperation){
            case "sqrt":
                result = Math.sqrt(this.operands[0])
                
            break;
        }

        return result 
    }


}