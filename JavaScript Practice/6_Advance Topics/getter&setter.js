
// Getter and setter w.r.t. Classes
// With classes we use constructor and we use methods for get and set of the property

// class User {
//     constructor(username,password){
//         this.username = username 
//         this.password = password
//     }

//     get password(){
//         return `${this._password}Kartik`
//     }

//     set password(value){
//         this._password = value
//     }
// }


// Getter setter w.r.t. Function
// with Functions we use Object.defineProperty to define get and set as functions in an Object

// function User(username, password){
//     this._username = username;
//     this._password = password;

//     Object.defineProperty(this, 'username', {
//         get: function(){
//             return this._username.toUpperCase() 
//         },
//         set: function(value){
//             this._username = value
//         }
//     })

//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase() + "encrypt"
//         },
//         set: function(value){
//             this._password = value
//         }
//     })
// }

// Getter setter w.r.t. Object

const User = {

    _username: 'Kartik',
    _password: 'abc123',

    get username(){
        return this._username.toUpperCase()
    },

    set username(value){
        this._username = value
    },

    get password(){
        return this._password.toUpperCase() + 'encrypt'
    },

    set password(value){
        this._password = value
    },

}

// const user1 = new User('Kartik','abc123');

const user1 = Object.create(User)

console.log(user1.username);
console.log(user1.password);