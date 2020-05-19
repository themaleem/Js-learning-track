"use strict";
// Loops are a way to repeat the same code multiple times

// 1. The “while” loop
// The while loop has the following syntax

// while (condition is true){
//     // run some code 
// }

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    console.log( i );
    i++;
}

let j = 3;
while (j) { // shows 3, then 2, then 1
    console.log( j );
    j--;
}



// 2. The "do...while" loop
// used when you want the body of the loop to execute at least once
// first execute the body whether condtion is truthy or not
// then check the condition
// while it’s truthy, execute it again and again

// The do...while loop has the following syntax
// do {
//     // loop body
//     } while (condition);

let k = 0;
do {
    console.log( k ); //first show 0
    k++;
} while (k < 3); //then 1, then 2



// 3. The “for” loop
// The for loop has the following syntax
// for (begin; condition; step) {
//     // ... loop body ...
//     }
for (let l = 0; l < 3; l++) { // shows 0, then 1, then 2
    console.log(l);
    }
// begin:  i = 0 (Executes once upon entering the loop.)
// condition: i < 3 (Checked before every loop iteration. If false, the loop stops.)
// step: i++ (Executes after the body on each iteration but before the condition check.)
// body of code: alert(i) (Runs again and again while the condition is truthy.)

// Instead of defining a variable, we could use an existing one
let m = 0
for (m = 0; m < 3; m++) { // shows 0, then 1, then 2
    console.log(m);
    }



// The "break" keyword (a loop normally exits when its condition becomes falsy)
// but we can force the exit at any time using the special break directive.
// any code after the break statement doesn't run
let sum = 0;
while (true) {
    let value = +prompt("Enter a number", '');
    if (!value) {
        break;
    } // (if no value given, break the loop)
    sum += value;
}
console.log( 'Sum: ' + sum );



// The "continue" keyword
// This doesn’t stop the whole loop. Instead, it stops the current iteration 
// and forces the loop to start a new one
for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0) {continue};
    console.log(i); // 1, then 3, 5, 7, 9
    }


// Labels for break/continue
// Sometimes we need to break out from multiple nested loops at once.
outer: for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let input = prompt(`Value at coords (${i},${j})`, '');
                // if an empty string or canceled, then break out of both loops
                if (!input) break outer;
                }
            }
alert('Done!');


// The switch statement
// A switch statement can replace multiple if checks
// switch has one or more case blocks and an optional default.

// 
// If the equality is found, switch starts to execute the code starting from the
// corresponding case , until the nearest break (or until the end of switch ).
// if no case is matched, it returns to the default 

// it has a syntax as follows:
// switch(x) {
//     case 'value1': // if (x === 'value1')
//     ...
//     [break]
//     case 'value2': // if (x === 'value2')
//     [break]
//     default:
//     ...
//     [break]
//     }

let a = 2 + 2;
switch (a) {
    case 3: // if a === 3 (strict equality check)
        alert( 'Too small' );
        break;
    case 4: // if a === 4
        alert( 'Exactly!' );
        break;
    case 5: // if a === 5
        alert( 'Too large' );
        break;
    default:
        alert( "I don't know such values" ); // this exexutes if none of the cases are matched
    }

// and example without a break
a = 2 + 2;
switch (a) {
    case 3:
        alert( 'Too small' );
    case 4:
        alert( 'Exactly!' );
    case 5:
        alert( 'Too big' );
    default:
        alert( "I don't know such values" );
}