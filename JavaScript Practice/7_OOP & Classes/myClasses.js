
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.password.toUpperCase()}`
    }

}

const user1 = new User('Kartik','kartik@abc.com','dnahfwkd12')

console.log(user1.encryptPassword());
console.log(user1.changeUsername());
