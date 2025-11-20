import { describe, it } from "vitest";

describe('Absctract Class', () => {

    abstract class Customer {
        readonly id: number;
        abstract name: string;

        constructor(id: number) {
            this.id = id;
        }

        hello(){
            console.log('Hello');
        }

        abstract sayHello(name: string): void;
    }

    class RegularCustomer extends Customer {
        name: string;

        constructor(id: number, name: string) {
            super(id);
            this.name = name;
        }

        sayHello(name: string): void {
            console.log(`Hello ${name}, I am ${this.name}`);
        }

    }

    it('should support', () => {

        const customer1 = new RegularCustomer(1, "Alice");
        console.log(customer1.id);
        console.log(customer1.name);
        customer1.sayHello("Bob");

    })
})