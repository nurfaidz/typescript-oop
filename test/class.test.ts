import { describe, expect, it } from 'vitest'

// Class
describe('Class', () => {

    class Customer {
        constructor() {
            console.log('Customer created');
        }
        
    }

    class Order {

    }

    it('should can create a class', () => {
        const customer: Customer = new Customer();
        const order = new Order();
    });

    it('should can create a constructor', () => {
        new Customer();
        new Customer();
    });
})