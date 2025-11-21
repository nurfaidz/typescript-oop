import { describe, it } from "vitest";

describe('Static', () => {

    class Configuration {
        static nameConfig: string  = "config";
        static version: number = 1.0;
        static description: string = "This is a config"
    }

    class MathUtil {
        static sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }

            return total
        }
    }

    it('should support static method', () => {
        console.info(MathUtil.sum(1,2,3,4,5));
    })

    it('should support', () => {
        console.info(Configuration.nameConfig);
        console.info(Configuration.version);
        console.info(Configuration.description);
    })
})