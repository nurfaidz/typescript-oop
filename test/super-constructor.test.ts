import { describe, it } from "vitest";

describe('Super Constructor', () => {
    class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Employee extends Person {
        department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }
    }

    it('should support', () => {
        const employee = new Employee("Alice", "Engineering")
        console.log(employee.name);
        console.log(employee.department);
    })
})