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