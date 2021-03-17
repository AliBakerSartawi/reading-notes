## Understanding The Problem Domain Is The Hardest Part Of Programming

The **Problem Domain** can be described as the *area undergoing analysis*, or *all the things that have nothing to do with the programming language*...

For example, if you are designing a website for photography, your problem domain is **photography** and **commerce**... and so on.

`Programming` becomes easier if the **Problem Domain** is understood.

Another example... imagine you are writing code to program a printer... if you are given the specs and protocols of how the printer should function in an unambiguous manner, it becomes clearer how the `code` should be.

Attempting to write `code` before understanding the **Problem Domain** is no different than attempting to answer a question without understanding the question.

---

---

## `Objects` in `JavaScript`

When you have a group of variables and functions that form together a model that is recognizable in real life, that is an `object`.

In an `object`, `variables` are called `properties` such as a hotel name and number of rooms, `functions` are called `methods` which represent the tasks related to the `object` such as the number of available rooms.

Below is one way of creating an `object`, itt is called the `literal notation` way:

```javascript
var hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};
```

In the example above, there are three `properties` and one `method`. Below is an example of how the object can be used:

```javascript
var hotelName = hotel.name;
var hotelName = hotel['name']; //this is an alternative way of accessing object properties, but does not work with methods
var roomsFree = hotel.checkAvailability();
```

---

## Document Object Model, DOM

Many people refer to the **DOM** as **Application Programming Interface (API)**. In other words, user interface allows humans to communicate with programs, while **APIs** allow programs (and scripts) to communicate with each other.

Below are examples of this:

```javascript
getElementById() //uses the ID attribute
querySelector() //uses a CSS selector and returns the first matching element
getElementsByClassName() //selects all elements with that class attribute
getElementsByTagName()
querySelectorAll()
parentNode()
previousSibling()
nextSibling()
firstChild()
lastChild()
```

Elements can be fetched and then stored in variables to work with them multiple times
```javascript
var itemOne = getElementById('one');
```
Now, `itemOne` does not store the selected element, but stores a *reference* to where that node is in the **DOM** tree. To access the text inside of it, for example, you can write `itemOne.textContent`.

Finding the quickest way to access an element within the page will make the page seem faster and more responsive. The quickest way to access elements is `getElementById()`.

`Document` refers to the document object, individual elements have to always be accessed via the `document` object.
```html
<li id="one" class="hot">fresh figs</li>
```
```javascript
//select the element and store it in a variable
var el = document.getElementById('one');
//change the value of the class attribute
el.className = 'cool';
```

If the selected elements return more than one value, it is called a `nodelist`, to select one element from a `nodelist` an index number can be used using the `item` method. 
```javascript
var elements = document.getElementByClassName('hot')
var firstItem = elements.item(0); //this will select the first element
var firstItem = elements[0]; //the array method is preferred over the item method because it is faster
```

To affect all elements in a `nodelist` a for loop can be used to go through each element.

---

```html
<li id="one"><em>fresh</em> figs</li>
```
```javascript
//below is how to access the text node (figs)
document.getElementById('one').firstChild.nextSibling.nodeValue;
//the first child is <em> and the next sibling is the text (figs) and nodeValue will change the text value
```

`innerHTML` property can be used to retrieve and replace one any element node.
To change an element, store the new content in a new variable, then select the element to be edited, then set the `innerHTML` to the new variable. To delete the content of an element, the new variable can be an empty string.

```javascript
//DOM manipulation functions
createElement()
createTextNode()
appendChild()
removeChild()
```

`document.write()` method is a simple way to add content, but its use is rarely advised. It has many disadvantages that can affect the whole page.

`element.innerHTML` should not be used for information coming from users, it poses security threats.

`DOM manipulation` methods can be much slower than `innerHTML` if a lot of lines are needed to be added.

Below is an example of how to change attributes
```javascript
document.getElementById('one').getAttribute('class'); //getAttribute gets the value of an attribute, stores it an a variable
hasAttribute() //checks if an element node has a specified attribute
setAttribute() //sets the value of an attribute
removeAttribute() //removes the attribute
className //gets or sets the value of the class attribute
id //gets or sets the value of the id attribute
```

---

<!-- console logs for objects

let students = {
    name: 'zuhair',
    age: 25,
    isEnrolled: true,
    classes: ['101', '102', '201'],
    '1x': true,
    'full name': 'test test',
}
let x = 'name';

console.log(students.classes[0]);
console.log(students[x]);
console.log(students['name']);
console.log(students['name']);
console.log(students['1x']);
console.log(students['full name']);
console.log(typeof students);
console.log(typeof []); //an array is an object
console.log(Array.isArray([])); //a mtheod special for arrays
console.log(Array.isArray(students)); //false because it is an object not an array
 -->



