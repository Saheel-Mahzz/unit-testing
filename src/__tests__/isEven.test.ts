import { describe, expect, it } from "vitest";
import { isEven } from "../utils/isEven";

describe('isEven function',()=>{
it('should return true for even numbers',()=>{
    expect(isEven(2)).toBe(true)
    expect(isEven(6)).toBe(true)
})
it('should return false for odd numbers',()=>{
    expect(isEven(5)).toBe(false)
})

})