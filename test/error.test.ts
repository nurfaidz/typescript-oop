import { describe, it } from "vitest";

describe('Error Handling', () => {
    class ValidationError extends Error {
        constructor(public message: string) {
            super(message);
        }
    }

    function doubleIt(value: number): number {
        if (value < 0) {
            throw new ValidationError("Value cannot be lest than 0");
        }

        return value * 2;
    }

    it('should support', () => {
        try {
            console.log(doubleIt(-10));
        } catch (error) {
            if (error instanceof ValidationError) {
                console.error(`Validation Error: ${error.message}`);
            }
        }
    })
})