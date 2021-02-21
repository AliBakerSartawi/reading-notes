## Images

```html
<img src="URL" alt="text">
```

`alt` is the text that appears if the image does not load.

Usual `css` styles
```css
img.large {
  width: 500px;
  height: 500px;
}

/* medium being 250px, small being 100px */
```

The `float` attribute can be used to align photos left and right.

To center an image, make it a `display: block;`, then you can `text-align:center;` on the containing element, or set the left and right `margin` values of the image to `auto`.

`background-image: url();` allows you to place an image behind `HTML` content, either for the whole page of part of it.

If the background image is not being repeated, `background-position` can be used to dictate its location on the page, `left top`, `right bottom`, `center center` values for example.

`:hover` is when you hover on a button or a link, `:active` is when the button is clicked.

---

Adding gradients
```css
#gradient {
  /* fallback color */
  background-color: #66cccc;
  /* fallback image */
  background-image: url();
  /* firefox */
  background-image: -moz-linear-gradient(#336666, #66cccc);
  /* safari and so on */
}
```

---
 
---

## Practical Information

**SEO** is *search engine optimization*, which is the practice of helping your site to appear nearer to the top of search engine results.

The **on-page** techniques include adding keywords that people might search for in your **HTML** code and in the page... ensuring images have proper values in their `alt` attributes so the search engine understands the content of the image.

The **off-page** techniques are getting other sites to link to your page, this will determine the site rank... if the hyperlink contains keywords it may be considered more relevant than just including *click here* for example.

There are **seven** key places to include keywords:
- Page title
- URL... where possible use keywords in the file name
- Headings... if they keyword is here the search engine will give it more priority or importance
- Text... repeating keywords in it helps
- Link text... use keywords in text linking to other pages rather than just click here
- Image alt text... this will help in image-related searches
- Page description... this lives in the head, specified by the `<meta>` tag.

---

---

## Flash

**Flash** is no longer supported in browsers... **HTML5** has properties that replace **Flash**