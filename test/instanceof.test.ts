import { describe, expect, it } from "vitest";

describe('Instanceof', () => {

    class Employee { }

    class Manager extends Employee { }

    const alice = new Employee();
    const bob = new Manager();

    it('should have problem using typeof', () => {
        console.log(typeof alice);
        console.log(typeof bob);
    })

    it('should support instanceof', () => {
        expect(alice instanceof Employee).toBe(true);
        expect(alice instanceof Manager).toBe(false);
    })
})