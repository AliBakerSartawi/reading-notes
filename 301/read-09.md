# Refactoring

## Functional Programming

When a function is built for one thing, and the whole program consists of multiple functions like this... this results in a side-effect-free code.

A **pure function** is one that gives the same result if given the same argument, and does not have any observable side-effects. If the function relies on an external variable that might change... to be pure, the function must have a parameter for that variable to be passed.

Any function that relies on a random number generator cannot be pure.

Side effect of a function include modifying a global object or parameter passed by reference. Modifying global objects can be called *mutability*, which is discouraged.

When a function is pure it is easier to test without having to mock possibilities.

**Immutable** data cannot be changed after its creation... instead of changing it, you create a new object with the new value. Usually a `for` loop is used for that.

**Recursion** is when a function calls itself creating a `for` loop, as such...

```javascript
let list = [1, 2, 3, 4, 5];
let accumulator = 0;

function sum(list, accumulator) {
  if (list.length == 0) {
    return accumulator;
  }

  return sum(list.slice(1), accumulator + list[0]);
}

sum(list, accumulator); // 15
list; // [1, 2, 3, 4, 5]
accumulator; // 0
```

This will allow iterating while keeping variables *immutable*.

*Function composition or chaining* means that the result of each function will be used as input for the next function without modifying the original input

```javascript
const string = " I will be a url slug   ";

const slugify = string =>
  string
    .toLowerCase()
    .trim()
    .split(" ")
    .join("-");

slugify(string); // i-will-be-a-url-slug
```

Search more on **referential transparency** and **memoization**. 

---

**Functions** as first-class entities can:
- refer to it from constants and variables
- pass it as a parameter to other functions
- return it as result from other functions

The idea is to treat functions like data. So, functions can be combined to create new functions... such as

```javascript
const sum = (a, b) => a + b;
const subtraction = (a, b) => a - b;

const doubleOperator = (f, a, b) => f(a, b) * 2;

doubleOperator(sum, 3, 1); // 8
doubleOperator(subtraction, 3, 1); // 4
```

**Higher order functions** (such as the doubleOperator above) can:
- take one or more functions as arguments, or
- return a function as its result

When a function relies on an argument passed by another we can use `this` like this

```javascript
function smaller(number) {
  return number < this;
}

function filterArray(x, listOfNumbers) {
  return listOfNumbers.filter(smaller, x);
}

let numbers = [10, 9, 8, 2, 7, 5, 1, 3, 0];

filterArray(3, numbers); // [2, 1, 0]
```

---

## Refactoring For Readability

**Strategies**:

- return early from functions

```javascript
function showProfile(user) {
  if (user.authenticated === true) {
    // ..
  }
}

// Refactor into ->

function showProfile(user) {
  // People often inline such checks
  if (user.authenticated === false) { return; }
  // Stay at the function indentation level, plus less brackets
}
```

- cache variable so functions can be read like sentences

```javascript
function searchGroups(name) {
  for (let i = 0; i < continents.length; i++) {
    for (let j = 0; j < continents[i].length; j++) {
      for (let k = 0; k < continents[i][j].tags.length; k++) {
        if (continents[i][j].tags[k] === name) {
          return continents[i][j].id;
        }
      }
    }
  }
}

// Refactor into ->

function searchGroups(name) {
  for (let i = 0; i < continents.length; i++) {
    const group = continents[i]; // This code becomes self-documenting
    for (let j = 0; j < group.length; j++) {
      const tags = group[j].tags;
      for (let k = 0; k < tags.length; k++) {
        if (tags[k] === name) {
          return group[j].id; // The core of this nasty loop is clearer to read
        }
      }
    }
  }
}
```

- check for web APIs before implementing your own functionality

```javascript
function cacheBust(url) {
  return url.includes('?') === true ?
    `${url}&time=${Date.now()}` :
    `${url}?time=${Date.now()}`
}

// Refactor into ->

function cacheBust(url) {
  // This throws an error on invalid URL which stops undefined behaviour
  const urlObj = new URL(url);
  urlObj.searchParams.append('time', Date.now); // Easier to skim read
  return url.toString();
}
```

It's important to get your `code` right the first time because in many businesses there isn't much value in refactoring. Or at least, it's hard to convince stakeholders that eventually uncared for codebases will grind productivity to a halt.

---

### Links

[Functional Programming](https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa)

[Refactoring For Readability](https://dev.to/healeycodes/refactoring-javascript-for-performance-and-readability-with-examples-1hec)



