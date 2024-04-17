import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el useCounter', () => {

    test('should return the default values', () => {
        const { result } = renderHook(() => useCounter());

        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });

    test('the counter should generate the value of 100', () => { 
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
        
     })

})