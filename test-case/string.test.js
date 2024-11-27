import { expect, test, describe } from 'vitest';
import { add } from '../index';

describe('Input Validator', () => {

  test('empty string returns 0', () => {
    expect(add("")).toBe(0);
  });

  test('single number returns the number', () => {
    expect(add("1")).toBe(1);
  });

  test('two numbers returns their sum', () => {
    expect(add("1,5")).toBe(6);
  });

  test('handles new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('supports different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('throws error on negative numbers', () => {
    expect(() => add("-1,2")).toThrow('negative numbers not allowed -1');
  });

  test('throws error with all negative numbers in message', () => {
    expect(() => add("-1,-2,3")).toThrow('negative numbers not allowed -1,-2');
  });

});