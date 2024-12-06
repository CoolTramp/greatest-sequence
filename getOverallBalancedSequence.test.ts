import { getOverallBalancedSequence } from "./lengthStaplesSequences.ts";

describe("Longest Balanced Sequence Tests", () => {
  test("Example 0 (from the book):  ')()(())()()))())))(' expect 12", () => {
    expect(getOverallBalancedSequence(")()(())()()))())))(")).toBe(12);
  });
  test("Example 1: )()())(", () => {
    expect(getOverallBalancedSequence(")()())(")).toBe(4);
  });

  test("Example 2: ()(()", () => {
    expect(getOverallBalancedSequence("()(()")).toBe(4);
  });

  test("Example 3: (()())", () => {
    expect(getOverallBalancedSequence("(()())")).toBe(6);
  });

  test("Example 4: ()()()(()", () => {
    expect(getOverallBalancedSequence("()()()(()")).toBe(8);
  });

  test("Example 5: ((()))())", () => {
    expect(getOverallBalancedSequence("((()))())")).toBe(8);
  });

  test("Example 6: (()()))(()))(()())", () => {
    expect(getOverallBalancedSequence("(()()))(()))(()())")).toBe(16);
  });

  test("Example 7: ((())())", () => {
    expect(getOverallBalancedSequence("((())())")).toBe(8);
  });

  test("Example 8: ((())(())())", () => {
    expect(getOverallBalancedSequence("((())(())())")).toBe(12);
  });

  test("Example 9: )()(", () => {
    expect(getOverallBalancedSequence(")()(")).toBe(2);
  });

  test("Example 10: ((((()))))", () => {
    expect(getOverallBalancedSequence("((((()))))")).toBe(10);
  });
  test("Example 11: )(", () => {
    expect(getOverallBalancedSequence(")(")).toBe(0);
  });
});
