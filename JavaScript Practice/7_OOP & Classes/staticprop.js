
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username} Logged In!`);
    }

    static createId(){
        return "123456"
    }
}

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const user1 = new Teacher('kartik', 'kar@abc.com');
user1.logMe()

console.log(user1.createId());

// static is used to restrict access to any method for any instance created
// simply use static before method name

// console.log(user1.createId()); // return error after making method static that it is not a function
