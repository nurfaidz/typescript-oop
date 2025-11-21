import { describe, it } from "vitest";

describe('Polymorphism', () => {

    class Employee {
        constructor(public name: string) { }
    }

    class Manager extends Employee { }

    class VicePresident extends Manager { }

    function sayHello(employee: Employee) {
        if (employee instanceof VicePresident) {
            const vicePresident = employee as VicePresident;
            console.log(`Hello Vice President, ${vicePresident.name}`);
        } else if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.log(`Hello Manager, ${manager.name}`);
        } else {
            console.log(`Hello, ${employee.name}`);
        }
    }

    it('should support', () => {
        let employee: Employee = new Employee("Alice");
        console.log(employee);

        employee = new Manager("Bob");
        console.log(employee);

        employee = new VicePresident("Charlie");
        console.log(employee);
    })

    it('should support method parameter polymorphism', () => {
        sayHello(new Employee("Alice"));
        sayHello(new Manager("Bob"));
        sayHello(new VicePresident("Charlie"));
    })
})