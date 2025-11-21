import { describe, it } from "vitest";
import { MathUtil } from "../src/math-util";

describe('Namespace', () => {

    it('should support', () => {
        console.log(MathUtil.PI);
        console.log(MathUtil.sum(10,20,30));
    })
})