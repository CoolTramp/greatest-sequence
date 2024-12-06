"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOverallBalancedSequence = getOverallBalancedSequence;
exports.greatestSequence = greatestSequence;
function getOverallBalancedSequence(sequence) {
    var stack = [];
    var count = 0;
    for (var _i = 0, sequence_1 = sequence; _i < sequence_1.length; _i++) {
        var taple = sequence_1[_i];
        if (taple === "(") {
            stack.push(taple);
        }
        else if (taple === ")" && stack.length > 0) {
            stack.pop();
            count++;
        }
    }
    return count * 2;
}
function greatestSequence(sequence) {
    var stack = [];
    var count = 0;
    var answ = [];
    // if (stack.length === 1) return 0;
    for (var _i = 0, sequence_2 = sequence; _i < sequence_2.length; _i++) {
        var taple = sequence_2[_i];
        // console.log(stack);
        if (taple === "(") {
            stack.push(taple);
        }
        else if (taple === ")" && stack.length > 0) {
            stack.pop();
            count++;
        }
        else if (taple === ")" && stack.length === 0 && count > 0) {
            answ.push(count);
            count = 0;
        }
    }
    console.log(answ, count, stack);
    if (answ.length === 0 && stack.length === 0)
        return count * 2;
    if (answ.length > 0)
        return Math.max.apply(Math, answ) * 2;
    if (stack.length === 0)
        return Math.max.apply(Math, answ) * 2;
    if (stack.length > 0)
        return count;
}
// console.log(greatestSequence("()()"));
// console.log(greatestSequence("()(()"));
console.log(greatestSequence("()())"));
// console.log(greatestSequence("())(()"));
console.log();
// console.log(greatestSequence("(()())()()(()())"));
