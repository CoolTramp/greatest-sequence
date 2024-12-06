import { greatestSequence } from "./lengthStaplesSequences.ts";

describe("greatestSequence", () => {
  test("Example 0 (from the book):  ')()(())()()))())))(' expect 10", () => {
    expect(greatestSequence(")()(())()()))())))(")).toBe(10);
  });

  test('returns 4 for "()()"', () => {
    expect(greatestSequence("()()")).toBe(4);
  });

  test('returns 6 for "(()())"', () => {
    expect(greatestSequence("(()())")).toBe(6);
  });

  test('returns 0 for ")("', () => {
    expect(greatestSequence(")(")).toBe(0);
  });

  test('returns 4 for "()(()"', () => {
    expect(greatestSequence("()(()")).toBe(2);
  });

  test('returns 6 for "((()))"', () => {
    expect(greatestSequence("((()))")).toBe(6);
  });

  test('returns 4 for "()())()()"', () => {
    expect(greatestSequence("()())()()")).toBe(4);
  });

  test('returns 2 for "())(()"', () => {
    expect(greatestSequence("())(()")).toBe(2);
  });

  test('returns 0 for "((((("', () => {
    expect(greatestSequence("(((((")).toBe(0);
  });

  test("returns 0 for empty string", () => {
    expect(greatestSequence("")).toBe(0);
  });

  test('returns 10 for "(()())()()(()())"', () => {
    expect(greatestSequence("(()())()()(()())")).toBe(16);
  });
  test('returns 10 for "()())"', () => {
    expect(greatestSequence("()())")).toBe(4);
  });
});
