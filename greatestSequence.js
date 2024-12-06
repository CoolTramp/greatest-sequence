"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greatestSequenceV1 = greatestSequenceV1;
exports.greatestSequenceV2 = greatestSequenceV2;
function greatestSequenceV1(sequence) {
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
    console.log(stack);
    return count * 2;
}
function greatestSequenceV2(sequence) {
    var stack = [];
    var count = 0;
    for (var _i = 0, sequence_2 = sequence; _i < sequence_2.length; _i++) {
        var taple = sequence_2[_i];
        if (taple === "(") {
            stack.push(taple);
        }
        else if (taple === ")") {
            stack.pop();
            count++;
        }
    }
    return count;
}
greatestSequenceV1(")()(())()()))())))(");
