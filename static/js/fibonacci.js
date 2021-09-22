

// Fibonacci Sequence
// 
// Write Fibonacci sequence for first 100 numbers. The Fibonacci Sequence is the series
// of numbers:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// The next number is found by adding up the two numbers before it. Start with the array
// of [0, 1]

let fibonaci = [0, 1]
let n = 100
for (let i = 0; i <= n-1; i++) {
    let new_num = fibonaci[i] + fibonaci[i+1]
    console.log(new_num);
    fibonaci.push(new_num)
}
console.log(fibonaci)