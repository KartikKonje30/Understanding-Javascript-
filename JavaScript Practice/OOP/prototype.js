
// task to add own method in js prototype 

let username = 'Kartik    ';

// console.log(username.length)
// but i want to add a method in the object property accesses by any datatype
// console.log(username.trim().length)

// lets first understand how a prototype property can be accessed 

let hero = ['thor', 'spiderman'];

let heroPowers = {
    'thor': "Hammer",
    'spiderman': 'Web',

    displayPower: function(hero){
        hero.forEach((h) => console.log(`${h}'s power is ${this[h]}`) )
    }
}

// console.log(heroPowers.displayPower(hero));

// we can also add custom methods to the direct object prototype properties as all string, fun, object are all refered to as a object 
// although they may act and behave differently but they still share same prototype propeties from the object while creation
// Everything is an Object (Sort of): In JavaScript, Functions are objects, arrays are objects, and even primitive values can behave like objects temporarily when you try to access properties on them.

Object.prototype.kartik = function(){
    console.log('Kartik is present in all the object');
}

// heroPowers.kartik()
// hero.kartik()

// Because we added a custom property in object it has given access to all the datatypes
// But lest say if we add the properties to say only array
// All the array created after will all have the property 
// but cannot be accessed by other datatypes

Array.prototype.chai = function() {
    console.log('Chai is present in all arrays only');
}

// refer the diagram to understand the level heirarchy 

// Function  ---->
// Array   ------> Object ------> NULL
// String  ------>


// Inheritance

// you can use __proto__ property to add inheritance to objects

const Teacher = {
    id: "T1"
}

const Staff = {
    staffid: "ST1"
}

const Principal = {
    name: 'Kartik',
    email: 'kartik@abc.com'
}

Principal.__proto__ = Teacher;
// now principal has access of all the teachers

// Modern syntax for adding inhertance

console.log(Object.setPrototypeOf(Principal, Staff))
console.log(Principal.staffid);
console.log(Teacher.staffid); // return undefined as not has inheirtance