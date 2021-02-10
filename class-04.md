## `HTML` Links

Below is an example of how to insert a link in `HTML`

```html
<a href="http://websitelink">Name of website</a> 
```

Below are examples of linking to pages inside the same website

```html
<a href="index.html">Home</a>
<a href="about-us.html">About</a>
<a href="#">Empty Link</a>
<a href="#prologue">To the prologue section with the 'id' value of prologue</a>
```

Links can also be modified to open in a different tab by adding `target="_blank"` after the `URL`.

---

## `HTML` Layout

`Block-level` elements start on a new line, such as
- `<h1>`
- `<p>`
- `<ul>`
- `<li>`

`Inline` elements flow in between the surrounding text, such as
- `<img>`
- `<b>`
- `<i>`

Boxes such as `<div>` or elements can also be nested inside other `block-level` elements.

`Relative` positioning moves the element in relation to where it would have been in normal flow.

```css
p {
    position: relative;
    top: 10px;
    left: 100px;
}
```

`Absolute` positioning takes the box out of normal flow and no longer affects the position of other elements... it is as if it does not exist.

```css
h1 {
    position: absolute;
    top: 0px;
    left: 500px;
    width: 250px;
}
p {
    width: 450px;
}
```

`fixed` positioning affixes the box to the browser window even while scrolling up and down.

```css
h1 {
    position: fixed;
}
```

The `z-index` dictates which elements appear on top, the higher the number the closer it is to the front.

```css
h1 {
    position: fixed;
    z-index: 10;
}
p {
    position: relative;
    z-index: 5;
}
```

The `float` property will take an element and shift it to the most right or most left position while being surrounded by other elements inside the same box. The `float` can be used to place elements next to each other, such as making three columns of text.

### Screen Sizes

To optimize viewing experience, designers often try to create pages of around `960-1000 pixels` wide... most users will be able to see designs this wide on their screens.

The first `570-600 pixels` are what mostly appear vertically in most screen.

A `liquid` layout is not a `fixed-width` layout, meaning that the `liquid` layout will stretch and contract depending on the browser window size... percentages are used instead of pixels mostly.

---
---

## `JS` Functions, Methods and Objects

A `function` let's you group a series of statements and then call them on command as many times as you want.

``` javascript
function calculateArea(width, length/*parameters*/) {
    return width * length; //statement... the parameters are used like variables within the function
} //this is called declaring the function, now it is set up and ready to be called
calculateArea(3, 5); //here the function is called
```

Here is another example of getting multiple outcomes from a `function`

```javascript
function getSize(width, height, depth){
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}
var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];
```

---
---

## Reasons for Pair Programming

There is a **navigator** and a **driver**. The **Driver** is the one with their hands on the keyboard handling the mechanics, the **navigator** thinks about the bigger picture and how algorithm might be converted into code, while also scanning for typos and bugs.

The benefits of pair programming lie in the many skills used in the process, as well as increasing the **efficiency** and providing **collaboration** aid which contributes into more **learning** for both parties while enhancing **social skills** that will reflect positively on both **job interviews** and **work environment readiness**.