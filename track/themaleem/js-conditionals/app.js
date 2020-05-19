"use strict";

// 1. The “if” statement
// evaluates a condition (We can also pass a pre-evaluated boolean value), and
// if the condition’s result is true, it executes a block of code 
let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) console.log( 'You are right!' ); // simple version

// more standard version
if (year == 2015) {
    console.log( "That's correct!" );
    console.log( "You're so smart!" );
    }

// 2. The else clause
// this executes when the condition is false
if (year == 2015) {
    console.log( 'You guessed it right!' );
    } else {
    console.log( 'How can you be so wrong?' ); // any value except 2015
    }

// 3. The “else if” clauses
// allows us test a several variants of a condition
if (year < 2015) {
    console.log( 'Too early...' );
} else if (year > 2015) {
    console.log( 'Too late' );
} else {
    console.log( 'Exactly!' );
    }


// 4. Conditional operator ‘?’
// allows us assign a variable depending on a condition.
let accessAllowed;
let age = prompt('How old are you?', '');

// if (age > 18) {
//     accessAllowed = 'Old enough, you may enter hahaha;
// } else {
//     accessAllowed = `Oops, too young, come back in ${accessAllowed - age} years `;
//     }

// the above if/else can be shortened with conditonal operator 
// the syntax is 
// let result = condition ? value1 : value2;
// condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2 .

accessAllowed = (age > 18) ? "Old enough, you may enter hohoho" : `Oops, too young, come back in ${ 18 - age} years `;
console.log(accessAllowed)


// 5. Multiple conditionals ‘?’

// if (age < 3) {
//     message = 'Hi, baby!';
//     } else if (age < 18) {
//     message = 'Hello!';
//     } else if (age < 100) {
//     message = 'Greetings!';
//     } else {
//     message = 'What an unusual age!';
//     }
let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' : 
    'What an unusual age!';
console.log( message );

// the first ? checks whether age < 3 .
// If true – it returns 'Hi, baby!', Otherwise, it continues to the expression after the colon ‘":"’, 
// checking age < 18, If that’s true – it returns 'Hello!' .
// Otherwise, it continues to the expression after the next colon ‘":"’, checking age < 100 .
// If that’s true – it returns 'Greetings!' . 
// Otherwise, it continues to the expression after the last colon ‘":"’, returning 'What an unusual age!'



// LOGICAL OPERATORS
// There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).

// 1. logical OR ( || )
// manipulate boolean values.If any of its args are true,it returns true, otherwise false 
// If an operand is not a boolean, it’s converted to a boolean for the evaluation
// a chain of OR "||" returns the first truthy value
true || true; // true
false || true; // true
true || false; // true
false || false; // false
1 || 0 || false // 1

let currentUser = null;
let defaultUser = "John";
let name = currentUser || defaultUser || "unnamed"; // "John" (the first truthy value)

let hour = prompt('Time of the day?', 9);
if (hour < 10 || hour > 18) {
    console.log( 'The office is closed.' );
}



// 2. logical AND ( && )
// AND returns true if both operands are truthy, otherwise false
// a chain of AND "&&" returns the first falsy value or the last value if none were found
true && true; // true
false && true; // false
true && false; // false
false && false; // false
1 || 0 || false; // false
1 || "something" || true; // 1

let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
    console.log( 'The time is 12:30' );
}

// precedence of AND is higher tha OR
//so  "a && b || c && d" is essentially the same as "(a && b) || (c && d)"



// 3. logical NOT ( ! )
// The syntax is pretty simple: result = !value;

!true; //false
!false; //true
!0; // true
!'ddjd'; //false
// A double NOT !! is sometimes used for converting a value to boolean type
!!"non-empty string"; // true
!!null; // false
