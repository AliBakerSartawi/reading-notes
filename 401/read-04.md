# Data Modeling

## Name 3 advantages to Test Driven Development

1. You only write the needed code
2. Easier to refactor... because each feature is heavily tested
3. High test coverage since every feature is tested... this develops confidence in the written code

---

## In what case would you need to use beforeEach() or afterEach() in a test suite?

- They help to avoid repetition in tested code... especially if there is similar code across multiple tests 

---

## What is one downside of Test Driven Development

- Tests show the presence of bugs in the code... but they cannot help find or solve them
- Might be a slow process, because the test codes are written before the actual code
- Tests change when the requirements of the features change... this means more maintenance time

---

## What’s the primary difference between ES6 Classes and Constructor/Prototype Classes?

- The primary difference being that classes can be inherited by subclasses unlike constructors... in order to make a constructor inherit another constructor, it is a rather thorny process.

---

## Why REST?

- Because of its flexibility.. it can handle multiple types of code and data formats... and is able to communicate between different services written in different languages

---

## Define the Following

**functional programming**: It is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects... it is declarative rather than imperative, meaning that the application flows through pure functions... it is easier to test and predict than imperative or object oriented programming. [source](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

**object-oriented programming (OOP)**: It is the most popular programming paradigm and is taught as the standard way to code... it relies on the concept of classes and objects... classes can contain functions (methods)... and classes can be inherited in subclasses, saving time and space in writing repeated code unnecessarily. [source](https://www.educative.io/blog/object-oriented-programming#four)

**class**: They can be thought of as blueprints that define the variables (properties) and methods (functions) of an object.

**super**: This keyword is used to access and call functions on an object's parent (from subclass to class). [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)

**this**: In the global context, it refers to the global object (window)... inside classes, it refers to the object it belongs to... inside events, it refers to the element that received the event...

**Test Driven Development (TDD)**: It is a programming principle where the requirements of a feature are set, and then written as a test unit before the actual code is even written... each feature is executed this way.

**Jest**: It is a testing framework for JavaScript... love it!

**Continuous Integration (CI)**: It is the practice of automating the integration of code changes from multiple contributors into a single software project. [source](https://www.atlassian.com/continuous-delivery/continuous-integration)

**REST**: Stands for Representational State Transfer (whatever that means!!!!).. anyway... in simple terms, it is an architectural style that advocates that web applications should use HTTP methods to hang out with each other (communicate), aka (getting, creating, mutating data etc etc).  

**Data Model**: It organizes and standardizes how the data elements should look like and how they relate to each other.

---

## Extra Stuff

**SQL vs NoSQL**: 

- SQL databases are relational, NoSQL are non-relational.
- SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
- SQL databases are vertically scalable, NoSQL databases are horizontally scalable.
- SQL databases are table based, while NoSQL databases are document, key-value, graph or wide-column stores.
- SQL databases are better for multi-row transactions, NoSQL are better for unstructured data like documents or JSON.

[source](https://www.xplenty.com/blog/the-sql-vs-nosql-difference/#:~:text=SQL%20databases%20are%20relational%2C%20NoSQL%20are%20non%2Drelational.&text=NoSQL%20databases%20have%20dynamic%20schemas,graph%20or%20wide%2Dcolumn%20stores.)

## Maybe Useful Links

[sql vs nosql (Video)](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)

[nosql vs sql](https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool)

[nosql modeling techniques](https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/)

[mongoose api](https://mongoosejs.com/docs/api.html#Model)