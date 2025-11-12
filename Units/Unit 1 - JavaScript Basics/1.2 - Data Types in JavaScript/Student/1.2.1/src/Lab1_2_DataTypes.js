/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both

let age = 34
console.log(age)
let price = 12.99
console.log(price)

// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)

console.log("Sandra" / 2) 

// TODO 2: Print basic math ops: + - * /

console.log("4 + 2 = " + (4 + 2))
console.log("3 * 3 = " + (3 * 3))
console.log("5 - 1 = " + (5 - 1))
console.log("6 / 3 = " + (6 / 3))

// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)

console.log("3 ** 2 = ", 3 ** 2)

// TODO 3: Assignment operators with score variable

console.log("7 % 2 = ", 7 % 2)

// TODO 4: Expressions with operator precedence

let score = 10;
score += 5;
score -= 3
score *= 8
score /= 2

// TODO 5: Strings (single, double, backticks)

let myAge = 16;
console.log("I am " + myAge + " years old")
console.log(`I am ${myAge} years old. `)

// TODO 6: String properties and methods
let greeting = "Hello there!";
// - greeting.length
console.log("Greeting length: ", greeting.length)
// - charAt(0), charAt(5), [3]
console.log(greeting.charAt (0))
console.log(greeting.charAt (5))
console.log(greeting[4])
// - indexOf("sad")
let phrase = "Don't be sad be happy!";
console.log(phrase.indexOf("sad"))
// - repeat()
console.log(phrase.repeat(3))
// - substring, substr, slice examples
console.log(phrase.substring(0, 4))
console.log(phrase.slice(-9, 0)

// 🚀 Stretch Goals
// - Even number check using %
// - localeCompare() example
