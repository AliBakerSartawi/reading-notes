# Express REST API

## Name 3 real world use cases where you’d want to change the request with custom middleware

1-Encrypting a password or sensitive information.

2-Using `methodOverride` to utilize `put` and `delete` methods instead of `post`.

3-To process incoming information for statistics and analytics.

---

## True or false: The route handler is middleware?

If the route Handler is the last function in a route (doesn't have or need a next() parameter), then there is no need to call it a middleware... because it is the end point that will send the response.

---

## In what ways can a middleware function end the process and send data to the browser?

By sending a response and not using `next();`... or by passing a parameter in `next()` which will use an error handler.

---

## At what point in the request lifecycle can you “inject” middleware?

Anywhere before reaching the final function (the handler) which is the end point.

---

## What can cause express to error with “Request headers sent twice, cannot start a second response”

This happens when a server tries to send more than one response to the client per one request. [source](https://www.codementor.io/@oparaprosper79/understanding-node-error-err_http_headers_sent-117mpk82z8)

---

**Middleware**: A middleware is basically a function that will receive the Request and Response objects, giving the ability to process or edit them.

**Request Object**: The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. [source](https://www.tutorialspoint.com/nodejs/nodejs_request_object.htm)

**Response Object**: The response object represents the HTTP response that an Express app sends when it gets an HTTP request. [source](https://www.tutorialspoint.com/nodejs/nodejs_response_object.htm)

**Application Middleware**: Application-level-middleware are functions are bound to an instance of the app object by using `app.use` and `app.METHOD()` functions... these functions have no mount path and are executed every time the app receives a request.

**Routing Middleware**: Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router(). [source](http://expressjs.com/en/guide/using-middleware.html#middleware.application)

**Test Driven Development**: It is a software development approach where each functionality is tested and validated... failed tests should be re-written until they pass before proceeding with writing new code.

**Behavioral Testing**: It is mainly focused on on the behavior of users rather than the technical functions of the software. [source](https://medium.com/@connecttokc/behaviour-driven-testing-in-node-js-using-mocha-chai-5e0c85258bbe)

---

## Links

[Review: ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

[Using Express Routing](https://expressjs.com/en/guide/routing.html)

[Express Routing](https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4)