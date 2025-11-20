import { describe, it } from "vitest";

describe('Parameter Properties', () => {

    class Person {
        constructor(public name: string, ) {
        }
    }

    it('should support', () => {
        const person = new Person("Alice");
        console.log(person.name);

        person.name = "Bob";
        console.log(person.name);
    })

    
});