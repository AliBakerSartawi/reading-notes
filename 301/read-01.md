# SMACSS and Responsive Web Design

## RWD - Responsive Web Design

**Responsive web design** is the practice of building a website suitable to work on every device and every screen size.

The first book on **RWD** was written by **Ethan Marcotte** called *Responsive Web Design*.

**RWD** comes in three parts:
- Flexible layout
- Media queries 
- Flexible media

---

**Flexible layout** is the practice of building a layout with a flexible grid, using relative length units, percentages or *em* units, on *width*, *margin* and *padding*.

Other units include
- `vw` viewport's width
- `vh` viewport's height
- `vmin` minimum of viewport's height and width
- and `vmax`

The formula to convert from pixels to relative is `target / context = result`.
```css
.container {
  width: 538px;
}
section,
aside {
  margin: 10px;
}
section {
  float: left;
  width: 340px;
}
aside {
  float: right;
  width: 158px;
}

/* the above pixel numbers become like this */
.container {
  width: 100%; /*  or 75% or 50% */
}
}
section,
aside {
  margin: 1.858736059%; /*  10px ÷ 538px = .018587361 */
}
section {
  float: left;
  width: 63.197026%;    /* 340px ÷ 538px = .63197026 */   
}
aside {
  float: right;
  width: 29.3680297%;  /* 158px ÷ 538px = .293680297 */
}
/* the inner content will scale proportionally to the width of the container */
```

---

**Media queries** provide the ability to specify different styles for individual browser and device circumstances, the width of the viewport or device orientation for example.

There are a couple different ways to use media queries:
- Importing a new style sheet using the `@import` rule
- Linking to a separate style sheet from within the `HTML` document
- using the `@media` rule inside of an existing style sheet, **which is the recommended way, to avoid any additional `HTTP` requests**
```html
<!-- Separate CSS File -->
<link href="styles.css" rel="stylesheet" media="all and (max-width: 1024px)">
```
```css
/* @media Rule */
@media all and (max-width: 1024px) {...}

/* @import Rule */
@import url(styles.css) all and (max-width: 1024px) {...}
```

Each media query may include a media type followed by one or more expressions. Common media types include `all`, `screen`, `print`, `tv`, and `braille`. The `HTML5` specification includes new media types, even including `3d-glasses`. Should a media type not be specified the media query will default the media type to `screen`.

Logical operators in media queries
```css
/* Multiple individual media queries can be comma separated, acting as an unspoken or operator */

@media all and (min-width: 800px) and (max-width: 1024px) {...} /* selects all media types between 800 and 1024 pixels wide */

@media not screen and (color) {...} /* negates any color screen */

@media only screen and (orientation: portrait) {...} /* selects only screens in a portrait orientation that have a user agent capable of rending media queries */

/* features */
height
width
max-height
min-height
min-width
max-width

orientation: landscape, portrait;

aspect-ratio
device-aspect-ratio
with min and max

resolution

/* example */
@media all and (max-width: 420px) {
  section, aside {
    float: none;
    width: auto;
  }
}
/* will change two columns, for example, into two boxes on top of each other */
```

Using the viewport meta tag with either the `height` or `width` values will define the `height` or `width` of the viewport respectively. Each value accepts either a positive integer or keyword. For the `height` property the keyword `device-height` value is accepted, and for the `width` property the keyword `device-width` is accepted. Using these keywords will inherit the device’s default `height` and `width` value.
```html
<meta name="viewport" content="width=device-width">
```
```css
/* instead of including this in html, it is better to include it in css as an @ rule */
@viewport {
  width: device-width;
  zoom: 1;
}
```

---

**Flexible media**

As viewports begin to change size media doesn’t always follow suit. Images, videos, and other media types need to be scalable, changing their size as the size of the viewport changes.

One quick way to make media scalable is by using the max-width property with a value of 100%. Doing so ensures that as the viewport gets smaller any media will scale down according to its containers width.

```css
img, video, canvas {
  max-width: 100%;
}
```

---

## Floats

In web design, page elements with the CSS `float` property applied to them are just like the images in the print layout where the text flows around them. *Floated elements remain a part of the flow of the web page*.

```css
#footer {
  clear: both;			
}
/* both = left and right (both columns), or you can choose to clear right or left, it can be useful to include two images on top of each other with text wrapping around them */
```

If the parent element contained nothing but `floated` elements, the height of it would literally collapse to nothing.

Collapsing almost always needs to be dealt with to prevent strange layout and cross-browser problems. We fix it by clearing the float `after` the floated elements in the container but `before` the close of the container.
```css
.clearfix:after { 
   content: "."; 
   visibility: hidden; 
   display: block; 
   height: 0; 
   clear: both;
}
/* or */
/* remember, grid is the class of the container */
.grid:after {
  content: "";
  display: table;
  clear: both;
}
```

For `float` gutters, do the following
```css
*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
/* then use padding */
[class*='col-'] {
  padding-right: 20px;
}
[class*='col-']:last-of-type {
  padding-right: 0;
}
```

---

Links
- [RWD](https://learn.shayhowe.com/advanced-html-css/responsive-web-design/)
- [All About Floats](https://css-tricks.com/all-about-floats/)
- [Don't Overthink It Grids](https://css-tricks.com/dont-overthink-it-grids/)
- [CSS Floats Explained By Riding An Escalator](https://www.freecodecamp.org/news/css-floats-explained-by-riding-an-escalator-57fa55232333/)
- [SMACSS Official Documentation](http://smacss.com/)