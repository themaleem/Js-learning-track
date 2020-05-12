let user = 'John', age = 25, message = 'Hello';
alert(user);
alert(age);
alert(message);


// We can also change it as many times as we want
// When the value is changed, the old data is removed from the variable
message = 'Hi'; // Value changed
alert(message);


// We can also declare two variables and copy data from one into the other
let hello = "greetings"
message = hello;
alert(hello);
alert(message);


// variable name must contain only letters, digits, or the symbols $ and _
let $ = 5; // declared a variable with the name "$"
let _ = 6; // and now a variable with the name "_"
alert($ + _); // 11


// To declare a constant (unchanging) variable, use const instead of let
// This is used when one is sure that the variable's value will never change
const myBirthday = '21.06.1996';
// myBirthday = 'something else'; // reassigning a const will throw and error


// Uppercase constants are used as aliases for difficult-to-remember values
// that are known prior to execution, such constants are named using capital letters and underscores.
const RED = "#FF0000";
const GREEN = "#00FF00";
const BLUE = "#0000FF";
const ORANGE = "#FF7F00";

let color = ORANGE; // its much easier to remember and use ORANGE than "FF7F00"
alert(color); // #FF7F00