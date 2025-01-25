
// Different Ways to write promise and handle try and catch and resolve

// 1st 
let promiseOne = new Promise(function (resolve, reject){
    // Do async tasks
    // DB calls, cryptography, network
    setTimeout( () => {
        console.log('Promise resolved')
        // you need to add resolve to do futher actions so that we know that promise was resolved
        resolve();
    }, 1000)
})

promiseOne.then(() => {
    console.log('Promise consumed!');
})


// 2nd 
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Promised task 2 !');
        resolve();
    }, 1000);
}).then(() => {
    console.log('Promised 2 resolved !')
})


// 3rd
let promiseThree = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        console.log('Promised 3 task');
        resolve({ username: 'chai', email: 'chai@abc.com'});
    }, 1000)

})

promiseThree.then((user) => {
    console.log(user)
    console.log('Promised 3 resolved !');
})

// 4th
let promiseFour = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        let error = false;
        if(!error){
            console.log('Promised task 4 !');
            resolve();
        }
        else{
            reject('Error: something went wrong');
        }
    }, 1000)
})

promiseFour.then( () => {
    console.log('Promise 4 resolved !')
}).catch((e) => {
    console.log(e);
}).finally(() => {
    console.log('The promise is either resolved or rejected !');
})
// finally will execute no matter what the result is


// 5th

let promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            // console.log('Promised task 5 !');
            resolve('Promised task 5 !');
        }
        else{
            reject('Error: something went wrong');
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        let response = await promiseFive;
        console.log(response);
    }
    catch(e){
        console.log(e);
    }
    
}
consumePromiseFive()

// 6th 
// using fetch and with async await;

const url = 'https://api.github.com/users/KartikKonje30';

async function getInfo(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

getInfo('https://api.restful-api.dev/objects/4')

// OR
// using fetch and with .then and .catch;

fetch('https://jsonplaceholder.typicode.com/users')
.then(function (res){
    return res.json();
})
.then((data) => console.log(data))
.catch((error) => console.log(error))

