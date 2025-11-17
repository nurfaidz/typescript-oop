import { describe, expect, it } from "vitest";

// Properties 
describe('Properties', () => {

    class Customer {
        readonly id: number;
        name: string;
        age?: number;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }

        sayHello(name: string): void {
            console.log(`Hello ${name}, my name is ${this.name}`);
        }
    }

    it('should can have properties', () => {
        const customer = new Customer(1, "Bob Smith");
        customer.age = 30;
        
        console.log(customer);
        // expect
    })

    it('should can have methods', () => {
        const customer = new Customer(1, "Bob Smith");
        customer.sayHello("Alice");
    });
});