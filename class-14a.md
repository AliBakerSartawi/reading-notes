## CSS Transforms

The actual syntax for the transform property is quite simple, including the transform property followed by the value.

```css
div {
  -webkit-transform: scale(1.5);
     -moz-transform: scale(1.5);
       -o-transform: scale(1.5);
          transform: scale(1.5);
}
```

The transform includes multiple vendors to ensure compatibility with most browsers.

The transform includes
```css
/* rotate */
.box-1 {
  transform: rotate(20deg);
}

/* scale */
.box-1 {
  transform: scale(.75);
}

/* translate, works like relative positioning */
.box-1 {
  transform: translateX(-10px);
}
.box-2 {
  transform: translateY(25%);
}
.box-3 {
  transform: translate(-10px, 25%);
}

/* skew */
.box-1 {
  transform: skewX(5deg);
}
.box-2 {
  transform: skewY(-20deg);
}
.box-3 {
  transform: skew(5deg, -20deg);
}

/* origin */
/* perspective */
/* 3d rotate (rotateX, rotateZ) */
/* 3d scale (scaleX, scaleZ) */
/* 3d translate */
/* backface-visibility */
```

---

## Transitions

There are four transitions in general

```css
example {
  transition-property: ;
  transition-duration: ;
  transition-timing-function: ;
  transition-delay: ;

  /* shorthand */
  transition: example .2s linear, border-radius 1s ease-in 1s;
}
```

There are also many properties related to `animation`.

---

## 8 Simple css Transitions

These are (when hovered)
- Fade in (increase opacity)
- Change color
- Grow (transform: scale(1.3);)
- Shrink (decrease scale)
- Rotate (I don't like this one)
- Square to circle (don't like this one too)
- 3D Shadow (I like this one... feels distorted)
```css
.threed:hover {
  box-shadow:
    1px 1px #53a7ea,
    2px 2px #53a7ea,
    3px 3px #53a7ea;
  -webkit-transform: translateX(-3px);
  transform: translateX(-3px);
}
```
- Swing (flutter right and left, complicated and unnecessary, or it's like SMH-No)
- Inset Border (not by using border, but by using `box-shadow: inset 0 0 0 25px #53a7ea;`)