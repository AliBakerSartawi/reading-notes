# NODE.JS

**NODE.JS** is a **JavaScript** runtime built on **Chrome's** *V8 Javascript engine*. Basically, **NODE.JS** is a program that can run **JavaScript** outside a browser.

**NPM** is a package manager that comes bundled with **NODE.JS**.

To run **NODE.JS** in the terminal, simply write `node file-name.js` in the main or branch directory, like this...
```
reading-notes[main]$ node app.js
```

**NPM** is not just a package manager for **NODE.JS**, it also holds over *1,000,000* packages of **JavaScript** code available to download.

You can also install packages locally to a project, as opposed to globally, on your system. In the directory of a `test` folder in the terminal write...
```
npm init -y
```
This will create and auto-populate a `package.json` file in the same folder. Next, use npm to install the lodash package and save it as a project dependency: 
```
npm install lodash --save
```
Any packages/libraries installed are stored in a `node_modules` folder. It should not be checked into version control, and can be re-created anytime by running `npm install` from within the project's **root**.

If you open `package.json`, the installed libraries will be shown under dependencies, letting any developer know the packages required to run the code.

---

## Why We Need NODE.JS

One of the most pressing reasons, is that it can make us run **JavaScript** on the server... and that bestows many advantages.

Without getting into technical detail, **NODE.JS** allows servers to handle large numbers of simultaneous connections due to its *asynchronous (non-blocking) behavior*.

---

## "Hello, World!" -Server Version

Write this in a `hello-world-server.js` file:
```javascript
const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
}).listen(3000);

console.log('Server running on http://localhost:3000');
```
Then run `node hello-world-server.js` in the terminal. Open a browser and navigate to `http://localhost:3000`.

We start by requiring Node’s native **HTTP module**. We then use its `createServer` method to create a new web server object, to which we pass an anonymous function. This function will be invoked for every new connection that’s made to the server.

The anonymous function is called with two arguments (`request` and `response`). These contain the request from the user and the response, which we use to send back a *200 HTTP status code*, along with our **“Hello World!”** message.

Finally, we tell the server to listen for incoming requests on port 3000, and output a message to the terminal to let us know it’s running.

---

## What Kind of Apps is NODE.JS Suited For

Apps that require some form of real-time interaction or collaboration, such as **chat sites**, or apps such as **CodeShare** where you can watch a document being edited live by someone else. It is also good for **APIs** where you're handling a lot of requests that are **I/O (Input/Output)** driven. Or for sites involving data streaming as **Node** makes it possible to process files as they are being uploaded.

---

## Express

**Express** is the most popular **Node** web framework, and is the underlying library for a number of other popular **Node** web frameworks. It provides mechanisms to: [Source: MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
- Write handlers for requests with different HTTP verbs at different URL paths (routes).
- Integrate with "view" rendering engines in order to generate responses by inserting data into templates.
- Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response.
- Add additional request processing "middleware" at any point within the request handling pipeline.

---

### Links

- [Introduction to NODE.JS](https://www.sitepoint.com/an-introduction-to-node-js/)