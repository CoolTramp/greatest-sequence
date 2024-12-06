Steven Skiena The Algorithm Design Manual chapter 3 page 131 exercise 2

[5] Develop an algorithm that takes as input a string S consisting of 
opening and closing brackets — for example: )()(())()()))())))( — and determines 
the length of the longest sequence of balanced brackets in S. In the given example,
this will be 12. (Hint: the solution does not necessarily consist of 
adjacent brackets in the string S.)

I wrote code that can count the number 12 in the example )()(())()()))())))(.
However, I believe the author put in a lot of effort,
but 12 is not a sequence of balanced brackets in S; instead, 
it represents the common quantity of a good sequence. Therefore, 
I want to write another function that will compute the longest sequence
of balanced brackets, which will be 10.