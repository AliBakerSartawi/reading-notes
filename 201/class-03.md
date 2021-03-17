## `HTML` Lists

`HTML` lists tags include:
- `<ul>` unordered list that houses `<li>` elements... they appear as bullets
- `<ol>` ordered list that houses `<li>` elements... they use numbers
- `<di>` definition list that houses `<dt>` the definition term and `<dd>` the actual definition

And yes, lists can be nested inside each other.

---

## `HTML` Boxes

The **box concept** can be defined in three parts:
- **Border**, which, from its name, is a border around the content...
- **padding**, which is the area between the content and the **border**
- **Margin**, which is the area outside the border 

These three are the **box**, `CSS` treats each `HTML element` as a box, and can edit it in many ways.

---

---

## `JavaScript` Instructions

An `array` is a special variable that can store a list of values...

```javascript
var colors;

colors = ['white', 'black', 'custom'];

var el = document.getElementById('colors');

el.textContent = colors[0]; 
```

The result of this would be `white` because it is the first value, and was chosen by the number `0`. To get the `black` value, the number `1` can be used... and so on.

---

## `JavaScript` Decisions and Loops

A `switch` statement allows to compare a value with a a number of possible results... it looks like this:

```javascript
switch (variableName) {
  case value:
        
    break;
  case value:
    
    break;

  default:
    break;
}
```

Each `case` can be assigned a value that returns a certain result or runs a certain code, after each `case` must come a `break`. The `default` option will run if none of the `cases` match.

The `for` loop will run a code a specific number of times depending on a counter inside the loop.

```javascript
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
```

The `while` loop should be used if you do not knowhow many times the code should run... the code will run as long as the condition returns `true`.

```javascript
while (condition) {
    
}
```

The `do while` loop has one key difference with the `while` loop, which is that it will run the code inside the curly braces at least once even if the condition evaluates to be `false`.

```javascript
do {
    
} while (condition);
```
