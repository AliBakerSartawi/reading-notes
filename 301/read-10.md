## The Call Stack

**The Call Stack** is basically the order in which called functions are executed... meaning that it is **synchronous**... more elaboration below...

A **call stack** is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

- When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
- Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
- When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
- If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.

If there is a function(B) invocation inside another function(A) that is being executed, the stack will execute (A) until it reaches the line of (B), then it will execute all of (B), the resume (A) where it left off. When (A) is done, the stack list will be empty.

So... the main principle of the **call stack** is **LIFO**: *Last In, First Out*.

Think of the **call stack** as an array, and *function invocations* are *pushed* and *popped* in that array, and the execution is always in the *last index*. 

The JavaScript engine (which is found in a hosting environment like the browser), is a single-threaded interpreter comprising of a heap and a single call stack.

**Stack overflow** can happen in a *recursive function*, which calls itself but without an exit point. The error in the console is `Maximum call stack size exceeded`.

## JS Errors

**Reference errors** when using a variable that is not declared.

**Syntax error**... well... it is when there is a problem with... syntax.

**Range error** when using a wrong `.length` value.

Here is a strange unrecommended way to empty an array by manipulating its length
```javascript
var foo = [0, 0]
foo.length = foo.length - 2 // (or foo.length - foo.length)
foo // would log [] instead of [0, 0]
```

**Type error** when 


---

### Links

[The Call Stack MDN](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)

[Understand The JavaScript Call Stack](https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4)

[JavaScript Error Messages](https://codeburst.io/javascript-error-messages-debugging-d23f84f0ae7c)

[JavaScript Error References MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)