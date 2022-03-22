export class Converter{


     users:any;

     constructor(){
        this.users = {id:1,name:'Adam'}
    }

   
    getUsers():any{
        this.users
    }

    format(userobj:any):string{
        return userobj.name.toUpperCase();
    }

};



// default and name export