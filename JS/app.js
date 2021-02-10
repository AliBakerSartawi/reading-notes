// functions are mostly used when you hover over buttons... written once, then used as many as needed... rendering it reusable

// below is a function declaration
// function funcName(parameter){
    // functionbody
// }

// calling the function, invoking the function... this is how you run the function
// funcName() 
// inside the paranthesis a argument can be written


// below is a function expression
// var funcName = function(){
    // functionbody
// }
// funcName()

/*this is
a multi line
comment*/

function getName(){
    var userName = prompt('Enter your name');
    document.getElementById("helloUser").innerHTML="Hello " + userName;
}

getName()

// var getSum = function(a,b) {
    // return a + b;
// }

// var sum = getSum(10, 4);
// alert(sum);

// This is how you make a comment in JavaScript
var x = "Failing is just another word for learning.";
var result = 8 * 3;
variable a equals Welcome John Doe;
var y = 3 + 4;

switch (key) {
  case value:
        
    break;

  default:
    break;
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

while (condition) {
    
}

do {
    
} while (condition);

// enter ten movie titles... we can use array to prompt them all at once
// an array is considered a new data type, other than numbers and strings and booleans... an array can hold multiple values of these three data types... even can have other arrays inside of it [[1,2],3]
let movieList = []; //empty array
let ageList = [23, 26, 22];
let arr = ['farid', 23];

// array method
let arr = [1, 2, 3, 4];
arr.pop() //the pop method removes the last value in the array, this would be [1, 2, 3]
arr.push(6) //adds another item after the last value in the array, this would be [1, 2, 3, 4, 6]
arr.unshift('Y') //appends in the beginning of the array, ['y', 1, 2, 3, 4]

let arr = [1, 2, true]
arr.shift() //removes the first element in the array, [2, true]

//attribute or property of arrays, thats why it doesnt have braces
let arr = [1, 2, true];
arr.length ===> 3
let arr = [1, 2, 3, 'y', 'xxx'];
arr.length ===> 5

//array methods, index
[1, 2, 3, 4]
 0  1  2  3
//an index is an indicator of where each element is in the array, we start by 0... which is its location in the memory.. to log the first element: arr[0]
// arr[-1] will give us the last element

//splice to add
let arr = ['a', 'l', 'i']
arr.splice(1, 0, 'a') //this will add 'a' after one spot starting the count from index
['a', 'a', 'l', 'i']
// splice can also delete and replace, experiment with the second value in it, the 0
// splice(where to Start, how many elements to delete, what elements to add)
