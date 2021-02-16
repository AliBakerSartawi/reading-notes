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
