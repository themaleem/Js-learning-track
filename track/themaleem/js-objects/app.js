// 'user strict';
// // JAVSCRIPT OBJECTS

// // In contrast, objects are used to store keyed collections of
// // various data and more complex entities
// // An object can be created with figure brackets {}, with an optional list of properties
// // A property is a “key: value” pair
//     // where key is a string (also called a “property name”), 
//     // and value can be anything.
//     // Reserved words are allowed as property names


//     // let user = new Object(); // "object constructor" syntax or
//     // user = {}; // "object literal" syntax


// // We can immediately put some properties into {...} as “key: value” pairs
// let user = {
//     name: "John", // key name or "name" : store value "John"
//     age: 30, // key age or "age" : store value 30
//     'eats a lot': true, // multiword key are allowed
//     return: 'anything', //return is a reserved keyword in js
//     };

// // the keys (properties) can be accessed by one of two ways
// // 1. dot access
// console.log(user.name); // John
// console.log(user.age); // 30

// // 2 square brackets access (support multiword keys)
// console.log(user['name']); // John
// console.log(user['age']); // 30
// console.log(user['eats a lot']); //true

// // The value can be of any type. Let’s add a boolean one
// // to add a new value
// user.isHuman = true;
// user.isAlien = false;
// user['vegetarian'] = false;

// console.log(user); // the user object

// // to add an existing value
// delete user.isAlien;
// delete user['vegetarian'];

// console.log(user); // user object


// // Square brackets also provide a way to obtain the property name as the result of any expression
// let key = "eats a lot";
// console.log(user[key]); // true

// // the variable key may be calculated at run-time or depend on the user input. 
// // And then we use it to access the property or store a new property

// key = prompt("What do you want to know about the user?", "");
// console.log( user[key] ); // 30 (if enter "age")

// key = prompt("Store to the user object?", "");
// value = prompt(`what is the user's ${key}`, "");
// user[key] = value
// console.log(user[key])



// // Property value shorthand
// // In real code we often use existing variables as values for property names
// let makeUser = (name, age) => ({name: name,age: age})

// let newUser = makeUser("John", 30);
// console.log(newUser.name); // John

// // makeUser above can be rewritten to avoid the repetition above 
// // name: name
// // age: age
// makeUser = (name, age) => ({name,age});

// // We can use both normal properties and shorthands in the same object
// let name = 'anonymous user';
// let anon = {
//     name, //same as name: name
//     age: undefined,
// };

// // Existence of properties can be checked in two ways
// // There will be no error if the property doesn’t exist! 
// // Accessing a non-existing property just returns undefined
// anon.noSuchProperty === undefined; // true means such property doesn't exist
// "noSuchProperty" in anon; // false means property doesn't exists 


// // The “for…in” loop
// // To walk over all keys of an object there exists a special form of the loop: for..in
// // different thing from the for(;;) loop
// for (key in user) {
//     console.log(`${key}: ${user[key]}`);
//     }



// // Copying an object by reference 
// // When an object variable is copied – the reference is copied, the object is not duplicated.
// let user2 = user;
// // A variable stores not the object itself, but its “address in memory”
// // ie user and user2 point to the exact same objects in memory
// // so any change to user will directly effect user2


// // Cloning and merging
// // if we need to duplicate an object Create an independent copy
// let clone = {}

// // let's copy all user properties into it
// for (let key in user) {
//     clone[key] = user[key];
//     }
// clone.name = "Pete";
// console.log(user.name)
// console.log(user2.name)
// console.log(clone.name)

// // merging (Oject.assign)
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
// Object.assign(user, permissions1, permissions2);
// console.log(user) //{ name: "John", canView: true, canEdit: true }
// // If the receiving object ( user ) already has the same named property, it will be overwritten

// // We also can use Object.assign to replace the loop for simple cloning
// // much shorter
// let clone2 = Object.assign({}, user);





function calculate(obj){
    for (key in obj){
        if (typeof(obj[key]) === 'number' ){
            obj[key] = obj[key]*2
        }
    }
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }