
// Question

// I want to change the Math.PI value to another value
// Can you change it to 5
// Is this possible, Yes or No
// If Yes, then how ?
// If No, then why ?

// Answer

// All the Object.properties are bydefault configured so they cannot be changed
// Meaning they are unwriteable
// Not all are bydefault unwritable as objects created by the user can be described by user itself
// If you use Object.getOwnPropertyDescriptor() you can see the property and its value described 
// You can also use Object.getOwnPropertyDescriptors() to get all the properties and values

// syntax: 

// Object.getOwnPropertyDescriptor('propertyname','value')

// property name - name of the property
// value - for which value you need description for

// example:

let descriptors = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descriptors);

// result: returns an object of that value

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

// Math.PI = 5

// console.log(descriptors);

// As you can see the it has already confirgured as writable: false
// meaning it cannot be re-written

// We can also create our own object with custom descriptions

const User = {
    username: 'Kartik',
    email: 'k@abc.com',
    lastLoggedIn: '24-1-2025',

    logIn: function(){
        return `${this.username} Logged In!`
    }
}

// console.log(Object.getOwnPropertyDescriptor(User, 'username'));

Object.defineProperty(User, 'username',{
    writable: false,
});

// console.log(Object.getOwnPropertyDescriptor(User, 'username'));

// Now you can see we define it unwritable by setting it to false
// Also there are alot of properties you can configured
// enumerable ie. iterable, confirgurable

Object.defineProperty(User, 'username',{
    enumerable: false,
});

for( let [key,value] of Object.entries(User)){
    // to handle a function being a value you can add an condition to check it
    if(typeof value !== 'function'){

        console.log(`${key} : ${value}`);
    }
}

// as we have set the username property as enumerable : false how it will not be iterable
// meaning it will be skiped or ignored from the loop


