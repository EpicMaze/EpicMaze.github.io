// Bonus task: Prime number generator
// 
// Write the list of prime numbers between 1 and 200. Prime numbers are numbers that
// have only 2 factors: 1 and themselves. For example, the first 5 prime numbers are
// 2, 3, 5, 7, and 11


// Super inefficient (slow) algorithm
function is_prime(number) {
    if (number <= 3) {
        return number > 1
    }

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true

}


let n = 100;
let prime_numbers = [];


for (let i = 1; i < n; i++) {
    if (is_prime(i)) {
        prime_numbers.push(i)
    }
}

console.log(prime_numbers)

