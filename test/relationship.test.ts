import { describe, it } from "vitest";

describe('Relationship', () => {
    class Person {
        constructor(public name: string){}
    }

    class Customer {
        constructor(public name: string){}
    }

    it('should support', () => {
        const person: Person = new Person("Alice");
        console.log(person.name);
    })
})