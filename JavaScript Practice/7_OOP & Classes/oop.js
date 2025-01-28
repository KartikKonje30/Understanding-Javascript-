
let test = {
    user: 'Kartik',
    email: "abc@123.com",
    
    sample: function (){
        return this.user
    }
}

// console.log(test.email);
// console.log(test.sample());

// Creation of constructor with properties and methods

function user(username, email, isLoggedIn){
    this.username = username;
    this.email = email;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

// const userOne = user('Kartik', 'kartik@abc.com', true);
// const userTwo = user('Mahesh', 'mahesh@abc.com', false);
// console.log(userOne);

// In above example it will override the value of first userOne as they are using same reference of the function
// new keyword is used for creation of constructor function which in result returns a instance of that function
// Following steps for creation of a new intance using new keyword
// step 1 - It returns an empty Object i.e. {}
// step 2 - It calls the constructor function
// step 3 - all the arguments in the constructor are injected in this keyword
// step 4 - returns the new function with given arguments


const userOne = new user('Kartik', 'kartik@abc.com', true);
const userTwo = new user('Mahesh', 'mahesh@abc.com', false);
// console.log(userOne);
// console.log(userTwo);

// We can also check which constructor was used for creating a particular instance
console.log(userOne.constructor);
// gives reference of the constructor used

console.log(userOne instanceof user);
// checks whether it is an instance of the constructor or object and returs a boolean result.






