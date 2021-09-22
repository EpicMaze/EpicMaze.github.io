// FizzBuzz
// 
// Write a program that prints the numbers from 1 to 1000. But for multiples of 3 print
// "Fizz" instead of the number and for the multiples of 5 print "Buzz". For numbers
// which are multiples of both three and five print "FizzBuzz". Otherwise print the
// number itself.


let n = 1000

let res = [];

for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) res.push('Fizz');
    else if (i % 5 == 0) res.push('Buzz');
    else if (i % 15 == 0) res.push('FizzBuzz');     // if divisible by 15 == divisible by 5 and 3
    else res.push(i);
}

console.log(res);



