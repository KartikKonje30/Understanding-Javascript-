

// Example of call method and understanding this in terms of different executional scopes

function setUsername(username){
    this.username = username;
}

// function createUser(username, email, password){
//     setUsername(username)

//     this.email = email;
//     this.password = password;
// }

const user1 = new createUser('Kartik', 'kartik@abc.com', 11122233344);

console.log(user1);

// In the above scenario we are using a function i.e. setUsername to set username using this keyword
// But since setUsername is called, it executes itself but when we are using this in function scope of setUsername
// as soon as it is executed it is discarded from the call stack 
// this keyword in createUser refers to the current execution context of the createUser
// holding the reference and passing on the reference from one context to an external context we use call method
// and pass the current context this reference as a argument so that external context can identify for which context to setUsername for

// Below is shown how to use call

function createUser(username, email, password){
    setUsername.call(this, username)

    this.email = email;
    this.password = password;
}


// we pass this as a reference to this context so that setUsername will hold the value and sets value to the given execution context.

