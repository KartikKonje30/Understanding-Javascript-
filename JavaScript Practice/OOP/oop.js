
let test = {
    user: 'Kartik',
    email: "abc@123.com",
    
    sample: function (){
        return this.user
    }
}

console.log(test.email);
console.log(test.sample());