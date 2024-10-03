import Work from "../interfaces/Work";

class Employee implements Work{
    name:string;
    id:number;
    title:string;
    salary: number;
    
    constructor(name:string,id:number,title:string,salary:number){
        this.name =name ;
        this.id = id;
        this.title =title;
        this.salary =salary;


    }
    receivePay(pay: number): number {
        console.log(`${this.name} has a pay of $ ${pay}`);
        return pay;
      }
}

export default Employee;