## Forms

Forms include fields to type in for username, password, text... or making choices from radio buttons, checkboxes or drop-down lists... and so on.

```html
<form action="http://example.com/subscribe.php" method="get"> <!-- the action is the URL for the page on the server that will receive the information in the form when it is submitted... methods are either get or post -->
  <p>This is where the form controls will appear</p>
</form>
```

examples are like
```html
<form action="http://example.com/subscribe.php" method="get">
  <p>username:
    <input type="text" name="username" size="15" maxlength="30" />
  </p>
</form>

<!-- password -->
<input type="text" name="password" size="15" maxlength="30" />

<!-- textarea -->
<textarea name="comments" cols="20" rows="4"></textarea>

<!-- radio buttons --> <input>
<!-- checkbox --> <input>
<!-- drop down list box --> <select><option>
<!-- multiple select box -->
<!-- file input box -->
<!-- submit button -->
<!-- image button -->
<!-- fieldset and legend --> to group form elements.
<!-- date input -->
<!-- email and URL input -->
<!-- search input -->
```

---
 
---

## Lists, Tables and Forms

`list-style` can be used in `css` to add styles to lists.

In tables, `empty-cells: show/hide`. Also, borders can be added to them. 

`:focus` pseudo-class is used to change form color when it is being used. `:hover` for hover.

`border-radius` is used to soften the edges of boxes.

---

---

## JavaScript Events

Events can be fired or raised. If the user taps a link, a click event will fire in the browser.

Basically, events trigger functions or script.

**Event handling** are the steps for triggering an event. First, select the element node, indicate the desired event and then state the code you wish to run.

```javascript
//structure
element.onevent = functionName; 
// events are preceded by 'on'
//functions are called without parenthesis

//example
function checkUsername(){
  //statements
}
const el = document.getElementById('username');
el.onblur = checkUsername;
```

**Event listeners** can deal with more than one function but are not supported in older browsers.

```javascript
element.addEventListener('event', funcName, false) 
//the last of three is a boolean, called capture, and is usually set to false

const el = document.getElementById('username');
el.addEventListener('blur', checkUsername, false);

//functions with parameters
el.addEventListener('blur', function() {
  checkUsername(5);
}, false);
```

**Event bubbling**, the event starts at the most specific node and flows outwards to the least specific. **Event capturing** is the opposite.

These true are triggered by the final parameter in the eventListener. `true` for capture phase, `false` for bubbling phase.

