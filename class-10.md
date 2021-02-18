## JavaScript Debugging

If the script you are going to write is long, chances are you won't get it perfectly the first time... that's why `debugging` exists.

The `javascript` interpreter process one line at a time, if a statement needs data from another function, it will pile or stack the new function on top of the current task.

types of `error` messages

error | meaning
--- | ---
SyntaxError | Syntax has not been followed
ReferenceError | Tried to reference a variable that is not declared/within scope
TypeError | An unexpected datatype that cannot be coerced
RangeError | Numbers not in acceptable range
URIError | encodeURI(), decodeURI(), and similar methods used incorrectly
EvalError | eval() function used incorrectly

Next to the `error` message there will be the number of the `javascript` file and line of code that caused the problem.

The `inspect element` feature in browsers can help find these errors, check the `console`.

Another form of `debugging` can be logging information in the `console` to see if script is running currently or if values are correct or not.

`console.log();`'s can be grouped inside `console.group();` then end the group with `console.groupEnd();`.

`console.table();` will log an object's info as a table.

`console.assert(this.value > 10);` for example will show an error message if the condition is not met.

`breakpoints` can be used in browser consoles to stop code at a certain line and check the values of variables by hovering on them. This can be added inside the `javascript` code by adding the `debugger;` keyword, which will activate the `breakpoint` if the developer tools are opened in the browser.

Another debugging method is this... handling the errors **gracefully**:
```javascript
try {
  //try to execute this code
  //if break or continue is used here, it will jump to finally
} catch {
  //if there is an exception, run this code
} finally {
  //this always gets executed
}
```

`throw new Error('error message');` this is developer generated when expected errors might happen... can be useful in many situations.

So, the steps of debugging can be summed up to this:
- try in another browser
- add numbers to the console to see how far your code runs before stopping
- remove parts of code or comment it and see what happens
- explain the code to someone else... that might help
- search Stack Overflow QnA
- search in Google
- code playgrounds and forums, like JSBin.com, JSFiddle.com or Dabblet.com... or even CSSDeck.com and CodePen.com
- use validation tools to find errors in your code, like jslint.com and jshint.com

---

**hoisting**

All `var`'s will go to the top of the code with a value of undefined.

```javascript
var userName = 'mahmoud';
```

this equals
```javascript
var userName;
//code here
userName = 'mahmoud';
```

meaning that if `userName` is used before putting a value in it, we will see `undefined` in console... whereas if we use `let` or `const` we will get an error, which is better for debugging.