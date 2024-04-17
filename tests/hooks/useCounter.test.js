import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react-dom/test-utils";

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

    });

    test('should increment the counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment } = result.current;

        act(() => {
            increment();
            increment(2);
        })
        expect(result.current.counter).toBe(103)
    });

    test('should decrement the counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement } = result.current;

        act(() => {
            decrement();
            decrement(2);
        })
        expect(result.current.counter).toBe(97)
    });

    test('should reset the counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement, reset } = result.current;

        act(() => {
            decrement();
            reset();
        })
        expect(result.current.counter).toBe(100)
    });

})