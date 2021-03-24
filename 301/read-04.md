## CSS GRID

Container Properties
```css
.container {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
  /* this will make a five-by-five grid */

  /* similar to */
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(5, 20%);

  /* various units may be used */
  grid-template-columns: 100px 3em 40%; /* three different sized columns */

  /* fractions */
  grid-template-columns: 1fr 5fr; /* first column occupying 1sixth, the second occupying 5sixths */

  /* combinations */
  grid-template-columns: 50px 1fr 1fr 1fr 50px; /* first and last column 50px each, with three equal columns in the middle */
  grid-template-columns: 50px auto 50px;

  /* shorthand */
  /* grid-template: rows / columns */

}
```

Content Properties
```css
.content {
  grid-column-start: 1;
  grid-column-end: 4;  /* this will fill 3 squares */
  grid-column-end: span 2; /* this will give it width of two squares */

  grid-column: 1 / 4; /* this shorthand combines start / end */
  grid-column: 2 / span 3;

  /* grid-row being the same thing */
  grid-row: 3 / span 3;

  /* combined */
  grid-column: 2 / span 4;
  grid-row: 1 / span 5;

  /* shorthand */
  /* grid-area: row-start / column-start / row-end / column-end */
  grid-area: 1 / 2 / span 3 / span 4;

  /* z-index equivalent */
  /* usually, highest order goes to end, similar to an array index */
  order: 1;
}
```

---

## Regex

*Check cheat sheet in the links below*

---

Links
- [GRID GARDEN](https://cssgridgarden.com/)
- [RegExr](https://regexr.com/)
- [Regex Tutorial - cheat sheet](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285)
- [Regex 101](https://regex101.com/)
- [CSS GRID Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [RWD With GRID](https://medium.com/samsung-internet-dev/common-responsive-layouts-with-css-grid-and-some-without-245a862f48df)