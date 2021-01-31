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
    var userName = prompt('enter your name');
    console.log(userName);
}

getName()

var getSum = function(a,b) {
    return a + b;
}

var sum = getSum(10, 4);
alert(sum);