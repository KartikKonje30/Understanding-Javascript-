
// console.log("Ganpati Bappa Morya !")


// array functionality
// array is a collection of different datatypes
// so array works in FIFO manner i.e. First In First Out 
// array elements can be accessed by their index 
// pop() and push() are two most used methods while using array
// two methods of defining and declaring an array
// 1. using direct [] 
// 2. using new Array(); method in array
// example:

const arr1 = [4,8,1,3,9,10];
// const are used usually to declare an array

const arr2 = new Array(5);
// you can also define size of the array while creation
// console.log(arr2);
// after printing this it will show an array with 5 empty items

// Basic methods of array are:
// length - returns the length/size of the array
// reverse() - reverses order of the array
// sort() - sorts an array
// push() - inserts an element from right or end i.e. normal insertion of elements in array
// pop() - deletes or removes an element from the right or end
// shift() - shifts the elements to the left and thus deleting/removing first element from the begining or start of the array
// unshift() - enters an element to the begining or start of the array
// concat() - concats two arrays into one single array and returns the new array
// to string() - returns the array into a string where elements seperated by comma
// at() - returns the array at specific indexed
// join() -  joins all the elements of the array and returns a string
// flat() - creates a new array by concatinating elements of all the sub-arrays and to a specific depth
// splice() - slices out the elements from the array and returns the removed elements; updates the original array
// slice() - slices out a copy of the elemnts and returns a new array; does not update the original array

// console.log(arr1.length) // returns the length of array
// console.log(arr1.reverse()); // returns new array with reverse ordered elements
// console.log(arr1.sort((a,b) => a - b)); // returns a newly sorted array
// console.log(arr1.push(6)); // returns the updated length of the array
// console.log(arr1.pop()); // returns the element removed
// console.log(arr1.shift()); // returns the element removed
// console.log(arr1.unshift(2)); // returns the updated length of the array
// console.log(arr1.concat(['abc','x','z'])); // returns a new concatinated array
// console.log(arr1.toString()); // returns a string with all the elements seperated with a comma
// console.log(arr1.at(2)); // returns the element present at index specified
// console.log(arr1.join('*')); // returns the string with all the elements seperated by a specified value

// const arr3 = [ [1,2], [ 4, [5, 6]], [7, [8, [9, 10]]] ]
// console.log(arr3.flat(1)); // returns a new array with sub-arrays being concatinated depending upon the depth given

// console.log(arr1.splice(2, 0, "abc", "xyz"));
// console.log(arr1);

// console.log(arr1.slice(0, 3));
// console.log(arr1);


// Search methods of array
// indexOf() - returns the index of first occurance of the element found in the array; returns -1 if element not found
// lastIndexOf() - returns the index of last occurance of the element found in the array;  returns -1 if element not found
// includes() - returns a boolean value if present ie. true or false
// find() -  method returns the value of the first array element that passes a test function

// Iteration methods in array
// forEach() - performs an operation for each element present in the array; returns undefined
// map() - maps an array to a new array by performing some operation on each element; returns a new array
// filter() - creates a new array with array elements that pass the condition; returns a new array

// let arr3 = []
// console.log(arr1.forEach((val, ind) => arr3.push(val)))
// console.log(arr3);

// console.log(arr1.map((item) => item * 2));

// console.log(arr1.includes(0))

// console.log((arr1.filter((item) => item < 6)));



