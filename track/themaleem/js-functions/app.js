"use strict";
// function declaration

// function keyword, then the name of the function
// then a list of parameters between the parentheses (empty in the example above)
// and lastly the function body, between curly braces.
function showMessage() {
    console.log( 'Hello everyone!' );
    }
// calling the fucntion
showMessage();

// Local variable
// is a variable declared inside a function (visible inside that function only)
function showMessage2() {
    let message = "Hello, I'm JavaScript!"; // local variable
    console.log( message );
    }
showMessage2(); // Hello, I'm JavaScript!

// Outer variable (also global variables)
// is a variable declared outside a function (visible both inside and outside that function)
// has full acces to the variable and can even modify it
let userName = 'John';
function showMessage3() {
    let message = 'Hello, ' + userName;
    console.log(message);
    }
showMessage3(); // Hello, John

// The outer variable is only used if there’s no local one
let userName2 = 'John';
function showMessage4() {
    let userName2 = "Bob"; // declare a local variable
    let message = 'Hello, ' + userName2; // Bob
    console.log(message);
    }
// the function will create and use its own userName
showMessage4();
console.log( userName2 ); // John, unchanged, the function did not access the outer variable

// parameters
// We can pass data to functions using parameters (also called function arguments)
function showMessage5(from, text) { // arguments: from, text
    console.log(from + ': ' + text);
    }
showMessage5('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage5('Ann', "What's up?"); // Ann: What's up? (**)

function showMessage6(from, text) {
    from = '*' + from + '*'; // make "from" look nicer
    console.log( from + ': ' + text );
    }
let from = "Ann";
showMessage6(from, "Hello"); // *Ann*: Hello
// the value of "from" is the same, the function modified a local copy
console.log( from ); // Ann


// Default values
// a fallback mechanism is en expected parameter isn't provided
function showMessage7(from, text = "no text given") {
    console.log( from + ": " + text );
    }
showMessage7('Maleem', 'Hello!'); // Ann: Hello! (*)
showMessage7('Maleem'); // Ann: Hello! (*)

// function showMessage(from, text = anotherFunction()) {
//     // anotherFunction() only executed if no text given
//     // its result becomes the value of text
//     }


// Returning a value
function sum(a, b) {
    return a + b;
}
let result = sum(1, 2);
console.log( result ); // 3
// the return keyword can be anywhere, and when execution reaches it, 
// the function stops, and the value is returned to the calling code


// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Do you have permission from your parents?');
//         }
//     }

function checkAge(age) {
    let acc = (age > 18) ? true : confirm('Do you have permission from your parents?');
    return acc
}

let age = prompt('How old are you?', 18);

// if ( checkAge(age) ) {
//     alert( 'Access granted' );
// } else {
//     alert( 'Access denied' );
//     }

(checkAge(age)) ? alert( 'Access granted' ): alert( 'Access denied' );

// It is possible to use return without a value. That causes the function to exit immediately
function showMovie(age) {
    if ( !checkAge(age) ) { // if this is truthy, the code doesn't get to the alert below
        return;
        }
    alert( "Showing you the movie" );
    }


// Arrow functions
// allows you write lesser codes when defining your functions

// function no(){
//     alert('you cancelled')
// }
// function yes(){
//     alert('you agreed')
// }

// the above funcs are rewritten as 
let no = () => alert("You canceled the execution.")
let yes = () => alert("You agreed")

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
    }
ask("Do you agree?",yes,no);

function sum(a, b) {
    return a + b;
    }

let sum = (a,b) => a+b;