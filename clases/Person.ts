class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(name?:string, lastName?:string, age?:number){
        this.firstName = name;
        this.lastName = lastName;
        this.age = age;
    }

    greet(friend):string {
        return "Hello " + friend + ", My name is "+this.firstName;  
    }

}

let maria:Person = new Person();
maria.firstName = 'Mayra';
maria.lastName = 'Gómez';
maria.age = 25;

let isaac:Person = new Person();
isaac.firstName = 'Manuel';
isaac.lastName = 'Ayala';

maria.greet(isaac.firstName);

