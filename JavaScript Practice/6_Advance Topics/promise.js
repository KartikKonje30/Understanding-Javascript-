
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


// Understanding Fetch() in detail

// As we know in JS engine, In a function whenever a methods provided by web API / browser API are called they are firstly registered in Register callback and then holded into a tast queue.
// A event loop keeps on checking in the task queue whether it has some task to be executed, If found the tasks are added into the call stack for execution.
// for example; setTimeout method provided by the browser is taken for registration of callstack and then stored in the task queue, after timeout seconds has been passed it will send to the call stack for execution.

// In this case, for Fetch() a special priority queue is allocated known as micro task queue is provided where fetch tasks are stored, which have a higher priority.
// And are pushed first in the call stack for execution.

// Behind every fetch call, It's execution is divided into two parts
// 1. Data 
// 2. Web Browser / node

// In data part, It defines and allocated memory for two arrays OnFullilled[] and OnRejection[], which are bydefault set to undefined or empty
// for storing response from the web browser after making a network request
// Note: This is how a fetch works behind the secenes and these variables from the data cannot be accessed as they are private.

// In Browser part, a network request is made and depending upon output of that request a response is stored in the data part.
// If network request is successful then received response is stored in the OnFullfilled[] array 
// If network request is unsuccessful, it will be stored in OnRejection[] array
// After getting the response from the netwrok request from the browser part tha data is then shared to the global memory as a response.

// Facts: 
// When a network request is made and an status error occurs just like '404' then this will not be considered as an error 
// and it will be stored in OnFullfilled[] and treated as a response because it is not an error occured because of the network request.
// As after network request is made successful then we get a response as '404'
// It will consider error as to if network request is not made or stuck for some reason and results in failure.



