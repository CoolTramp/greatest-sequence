export function getOverallBalancedSequence(sequence: string) {
  let stack: string[] = [];
  let count: number = 0;

  for (let taple of sequence) {
    if (taple === "(") {
      stack.push(taple);
    } else if (taple === ")" && stack.length > 0) {
      stack.pop();
      count++;
    }
  }
  return count * 2;
}

export function greatestSequence(sequence: string) {
  let stack: string[] = [];
  let count: number = 0;
  let answ: number[] = [];

  // if (stack.length === 1) return 0;

  for (let taple of sequence) {
    // console.log(stack);
    if (taple === "(") {
      stack.push(taple);
    } else if (taple === ")" && stack.length > 0) {
      stack.pop();
      count++;
    } else if (taple === ")" && stack.length === 0 && count > 0) {
      answ.push(count);
      count = 0;
    }
  }
  console.log(answ, count, stack);

  if (answ.length === 0 && stack.length === 0) return count * 2;
  if (answ.length > 0) return Math.max(...answ) * 2;
  if (stack.length === 0) return Math.max(...answ) * 2;
  if (stack.length > 0) return count;
}
