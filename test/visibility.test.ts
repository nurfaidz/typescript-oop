import { describe, it } from "vitest";

describe('Invisibility', () => {

    class Counter {
        protected counter: number = 0;

        public increment(): void {
            this.counter++;
        }

        public getCounter(): number {
            return this.counter;
        }
    }

    class DoubleCounter extends Counter {
        public increment(): void {
            this.counter += 2;
        }
    }

    it('should support private visibility', () => {
        const counter = new Counter();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
        // console.log(counter.counter);
        // console.info(counter.counter); // Error: Property 'counter' is private and only accessible within class 'Counter'.
    });

    it('should support protected visibility', () => {
        const doubleCounter = new DoubleCounter();
        doubleCounter.increment();
        doubleCounter.increment();
        doubleCounter.increment();
        console.info(doubleCounter.getCounter());
        console.log(doubleCounter);
    });
});