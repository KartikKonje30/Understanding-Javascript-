
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username} Logged In!`);
    }

}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A course is added for ${this.username}`);
    }

}

const kartik = new Teacher('Kartik', 'kartik@abc.com', "123456");

// kartik.logMe();
// kartik.addCourse();

const test = new User('Test');

// test.logMe();

// console.log(typeof(kartik));  // result: Object
// console.log(typeof(kartik) === typeof(test)); // result: true
// console.log(kartik === test); // result: false
// console.log(test instanceof Teacher);  // result: false
// console.log(test instanceof User);  // result: true
// console.log(kartik instanceof Teacher);  // result: true
// console.log(kartik instanceof User);  // result: true




