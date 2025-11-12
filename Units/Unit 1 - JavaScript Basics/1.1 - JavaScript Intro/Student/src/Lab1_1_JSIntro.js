/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()
console.log("Joshua Perdomo")

// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"
let favoriteFood = "Steak"
favoriteFood = "Burgers"

// TODO 3: Create variable mystery, assign a string, then a number, print type each time
let mystery = "Six Seven";
console.log("Value: " + mystery + " Data Type: " + typeof mystery); // String
mystery = 67;
console.log("Value: " + mystery + " Data Type: " + typeof mystery); // Number

// TODO 4: Declare const schoolName, try to reassign
const schoolName = "Christopher Columbus High School";

// TODO 5: Create three valid camelCase variables and print them
let winCondition;
let smallSpell;

winCondition = "Hog Rider"; // Initialize
smallSpell = "The Log"; // Initialize
let classRoom = "L12" // Declare and Initialize

// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals

let age = 16; // Declared and Initilized
console.log("I am " + age + " years old");
console.log(`I am ${age} years old`) // ${} variable goes inside of there

/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
   2. What challenges did you encounter, and how did you solve them?
   3. Where else could this programming concept be useful?
   =========================================================== */


// Declaring and Initializing
let width = 10;
let height = 5;

// Computing Area and Perimeter
let area = width * height;
let perimeter = 2 * (width + height);

console.log(`The area is: ${area}`)
console.log("The perimeter is: " + perimeter);