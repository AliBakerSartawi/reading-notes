## EJS - Embedded JavaScript Templating

```
npm init -y
npm install --save express body-parser cors ejs
```

Then, in server.js...
```javascript
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path'); //built in module for Node, we don't have to install it... it takes two paths and joins them

var app = express(); //to create an instance of the express app (server), don't forget to call it

//// we can configure our app with app.use, telling it to run everything through these two
app.use(bodyParser());
app.use(cors());

//// set the views directory
// here we are saying: for the views of EJS or any views,
// concatenate the current working directory (__dirname) with
// a folder called views
app.set('views', path.join(__dirname, 'views')); // we might not need this line, experiment with it
app.set('view engine', 'ejs'); // we don't need to require ejs, we just need to set it as the view engine

//// then we create a new folder called (views),
//// inside of it we create a file (index.ejs)
```

inside `index.ejs`
```html
<h1>Hello World</h1>
<h1>Hello <%= foo %></h1>
<!-- these are called opening and closing ejs tags -->

<!-- we can use them like this too -->
<img src="<%= foo %>" alt="">
<a href="/<%= foo %>"></a>
```

Then, we continue writing in `server.js`
```javascript
//create a simple route for the root directory
app.get('/', function(req, res) {
  res.render('index', { // index without .ejs, because it takes the name of the file not the path
    foo: 'bar', // the second parameter of render is the local variables,
                // this will inject (bar) into the (route) ejs file
    people: [
      { name: 'dave' },
      { name: 'jerry' },
    ];
  }); 
});

app.listen(8000, function() {
  console.log('heard on 8000');
});
```

Also inside our `index.ejs`
```html
<ul>
  <% for(var person of people) { %>
  <li><%= person.name %></li>
  <% } %>
  <!-- the above loop will give us (dave) and (jerry) each one in a separate <li> -->
</ul>

<ul>
  <% for(var person of people) { %>
    <% if (person.name === 'dave') { %>
    <li>This is definitely <%= person.name %>!!!</li>
    <% } else { %>
    <li>This is definitely not dave!!! This is <%= person.name %>!</li>
    <% } %>
  <% } %>
</ul>
```

## Layouts

Layouts are not native to **EJS**, so we need to add them

```
npm install --save express-ejs-layouts
```

Then inside out **views** folder, we create `layout.ejs`.

```javascript
// we also require the newly installed package
var expressLayouts = require('express-ejs-layouts');

// and then we use it
app.use(expressLayouts); //without calling it, don't ask me why!
```

Inside `layout.ejs`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <!-- we use dash, not equals -->
  <%- body %>
  
</body>
</html>
```
The above will add this automatically to all `.ejs` files. Inside `<%- body %>` will be everything specified uniquely in the `.ejs` files other than `layout.ejs`.

## Partials

Unlike **Layouts**, **Partials** are native to **EJS**, so we don't need to install it.

Let's try it inside the `layout.ejs` file. Inside `views` folder, let's create a folder called `partials`, inside of it a file called `onepartial.ejs`. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <!-- we use dash, not equals -->
  <%- body %>
  <%- include('partials/onepartial') %>
  
</body>
</html>
```

We navigate to `onepartial.ejs`

```html
<h1>we can see you... most likely</h1>
```

---

## From EJS Docs

```
npm install ejs
```

Then

```javascript
let ejs = require('ejs');
let people = ['geddy', 'neil', 'alex'];
let html = ejs.render('<%= people.join(", "); %>', {people: people});
```

Then... feed it a template file and a data file, and specify an output file.

```
ejs ./template_file.ejs -f data_file.json -o ./output.html
```

Usage in `script` tag

```html
<script src="ejs.js"></script>
<script>
  let people = ['geddy', 'neil', 'alex'];
  let html = ejs.render('<%= people.join(", "); %>', {people: people});
</script>
```

Additional information in [EJS Docs](https://ejs.co/)




---

### Links

[Intro to EJS in ExpressJs](https://www.youtube.com/playlist?list=PL7sCSgsRZ-slYARh3YJIqPGZqtGVqZRGt)

[Google Books API Docs (section about working with volumes)](https://developers.google.com/books/docs/v1/using#WorkingVolumes)

[EJS Docs](https://ejs.co/)

[EJS tutorial](https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application)
[Source Code For Tutorial](https://github.com/scotch-io/node-ejs)