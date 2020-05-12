"use strict";
// A variable can at one moment be a string and at another be a number
let message = "hello";
message = 123456;

// we have 7 basic data types in javascript

// 1. Number (represents number and floating points)
// and is able to perform basic arithmetic operations
let n = 23;
n = 123.45;
alert(n) //123.45
// there are “special numeric values” also belonging to this data type eg Infinity , -Infinity and NaN
// Infinity represents the mathematical Infinity  ∞. It is a special value that’s greater than any number
alert( 1 / 0 ); // Infinity
// NaN (Not a Number) represents a computational error. It is a result of an incorrect or 
// an undefined mathematical operation
alert( "not a number" / 2 ) //NaN
// further operations on NaN return NaN
alert( "not a number" / 2 + 34 ) //NaN


// 2. String (surrounded by quotes "")
let str = "Hello"; // double quotes
let str2 = 'Single quotes are ok too'; // single quotes
// backticks (used as: `${variable}` to insert an existing variable or an expression )
let phrase = `can embed ${str}`;
alert(phrase); // can embed Hello
alert(`2 + 2 is ${2+2}`); // 2 + 2 is 4


// 3. Boolean (logical true and false)
let learningJs = true;
let learningJava = false;
// Boolean values also come as a result of comparisons:
let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")


// 4. null value (a special value which represents “nothing”, “empty” or “value unknown”)
let age = null;
alert(age) // null


// 5. The “undefined” value (If a variable is declared, but not assigned, then its value is undefined)
let name;
alert(name) //undefined
// it is also possible to assign undefined to any variable:
let newAge = 123;
newAge = undefined;


// Objects and Symbols
// Objects: are used to store collections of data and more complex entities
// Symbols: type is used to create unique identifiers for objects


// The typeof operator (returns the type of the argument)
// useful when we want to process values of different types
alert(typeof message)
typeof Math // "object" (1)
typeof alert // "function" (3)
