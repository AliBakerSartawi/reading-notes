## String Manipulation Methods

```javascript
///////// includes - returns boolean
let str = 'My instructor is awesome'
console.log(str.includes('uct')); // true

//////// substring - returns part of a string between indexes
console.log(str.substring(0, 2)); // My - started at zero, and returned two

//////// charAt - returns character at an indexed position
console.log(str.charAt(5)); // s

/////// charCodeAt - returns the ASCII code of a character
console.log(str.charCodeAt(0)); // 77
// or
console.log('M'.charCodeAt(0)); // 77

/////// fromCharCode - returns a letter from ASCII code
console.log(String.fromCharCode(77)); // M
```