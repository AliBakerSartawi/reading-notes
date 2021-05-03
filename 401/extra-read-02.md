# Prep Subjects

## Event Loop

[WTH Is The Event Loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

[The Async Await Episode I Promised](https://www.youtube.com/watch?v=vn3tm0quoqE)

To put it simply, take a look at this code

```javascript
console.log('Synchronous 1');

setTimeout(_ => console.log('TimeOut 2'), 0);

Promise.resolve().then(_ => console.log('Promise 3'));

console.log('Synchronous 4');

/* Result in console

Synchronous 1
Synchronous 4
Promise 3
Timeout 4 */
```

Time-outs and so are Macro tasks, while promises are micro tasks and they take priority over macro tasks.

---

## ES6 Classes

[ES6 Classes - Repl](https://replit.com/@3liSar6awi/ES6-Classes#vehicles-with-classes.js)

```javascript
class Vehicle {

  constructor (name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  drive = () => {
    return 'Moving Forward';
  }
  stop = () => {
    return 'Stopping';
  } 
}

class Car extends Vehicle {

  constructor (name, wheels) {
    super (name, 4);
    // if we don't pass arguments in super, we delete the inherited properties
    // this.year = 1993; we can add other properties after super,
    // ... don't forget to add parameters in the subclass constructor if needed
  }

}

class Motorcycle extends Vehicle {

  wheelie = () => {
    return 'Wheee!';
  }

}
```

[MDN Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

[MDN This](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

[MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

---

## Callbacks 

[Callbacks (basic) - Repl](https://replit.com/@3liSar6awi/Callbacks#index.js)

[Callbacks Vid](https://www.youtube.com/watch?v=xLDI7hIgU4o)

[Error First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)

[FS Module Docs](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html)

---

## Promises

[Promises - Repl](https://replit.com/@3liSar6awi/Promises#index.js)

[Promises Vid](https://www.youtube.com/watch?v=4bPdjAerRzQ)

[MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

## Async Await

[Async Await - Repl](https://replit.com/@3liSar6awi/AsyncAwait#index.js)

[Async Await Vid](https://www.youtube.com/watch?v=o1B395-3Elg)

[MDN Async Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)




