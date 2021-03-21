'use strict';

// hoisting demo

var x = 10;

let y = 20;

console.log(x);
console.log(y);

if (true) {
  var varDeclared = 'my var declared variable';
}
console.log(varDeclared); //will give the value from inside the function

if (true) {
  let letDeclared = 'my let declared variable';
}
console.log(letDeclared); //will initiate an error