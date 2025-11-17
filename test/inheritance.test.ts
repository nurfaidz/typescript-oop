import { describe, it } from "vitest";

describe('Inheritance', () => {
    // parent class
    class Employee {
        name: string

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {

    }

    class Director extends Manager {
         
    }
    
    it('should support', () => {
        const employee = new Employee("Alice");
        console.info(employee.name);

        const manager = new Manager("Bob");
        console.info(manager.name);
        
        const director = new Director("Charlie");
        console.info(director.name);
    })
})