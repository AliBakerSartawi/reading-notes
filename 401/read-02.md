# Express

1- Difference between `PUT` and `PATCH`:

The main difference between **PUT** and **PATCH** requests are in the way the server processes the enclosed entity to modify the resource identified by the Request-URI.

In a **PUT** request, the enclosed entity is considered to be a modified version of the resource stored on the origin server, and the client is requesting that the stored version be replaced.

With **PATCH**, however, the enclosed entity contains a set of instructions describing how a resource currently residing on the origin server should be modified to produce a new version.

Also, another difference is that when you want to update a resource with **PUT** request, you have to send the full payload as the request whereas with **PATCH**, you only send the parameters which you want to update.

[source](https://devqa.io/difference-put-patch-requests/)

---

2- 3 tools or services to **mock** an API from development like **json-server**:
- [json-server](https://www.npmjs.com/package/json-server)
- [superTest](https://www.npmjs.com/package/supertest)
- [Mocha](https://www.npmjs.com/package/mocha)
- [Chai](https://www.npmjs.com/package/chai)

---

3- Compare and contrast **Swagger** and **APIDoc.js** Which HTTP status codes should be sent with each type of (un)successful API call?

**Note**: In the requirements, this point connects Swagger and APIDoc.js in a comparison with their behavior regarding status error codes... they should be two separate points... anyway, for error codes, pay a kind visit to [this](https://www.restapitutorial.com/httpstatuscodes.html)

*I searched this matter... this is what I found*:

Regarding **Swagger**: Note that an API specification does not necessarily need to cover all possible HTTP response codes, since they may not be known in advance. However, it is expected to cover successful responses and any known errors. By "known errors" we mean, for example, a 404 Not Found response for an operation that returns a resource by ID, or a 400 Bad Request response in case of invalid operation parameters. [source](https://swagger.io/docs/specification/2-0/describing-responses/)

Regarding **APIDoc.js**: All parameters will be grouped by this name. Without a group, the default `Error 4xx` is set. [source](https://apidocjs.com/#param-api-error).

So it seems that **APIDoc.js** has a default error status code which can be edited and refined by the programmer.

---

4- Compare and contrast **SOAP** and **ReST**:

**SOAP** stands for Simple Object Access Protocol, it was designed before **REST**, and it allows programs built on different platforms and languages to exchange data in an easy manner.

**REST** stands for Representational State Transfer, it is an architectural style that uses **HTTP** verbs of GET, POST, PUT, DELETE to work with the required components.

**SOAP** needs more bandwidth than **REST**, since its messages contain a lot of information... which also makes **REST** far easier to write.

**SOAP** offers additional features when it comes to security. Also, **SOAP** is better for stateful operations.

[source](https://www.guru99.com/comparison-between-web-services.html#:~:text=SOAP%20stands%20for%20Simple%20Object%20Access%20Protocol%20whereas%20REST%20stands,REST%20is%20an%20architectural%20pattern.&text=SOAP%20only%20works%20with%20XML,can%20make%20use%20of%20SOAP.)

---

**Web Server**: It has two components, a hardware side and a software side... the hardware being the computer that stores the server software and a website's components files... the software side is the several parts that control how users access the hosted files. [source](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)

**Express**: It is the most popular **Node.js** web framework... it provides the ability to create routes and handlers, backend rendering and the use of middlewares to do all sorts of sweet stuff.

**Routing**: Routing defines the way in which the client requests are handled by the application endpoints. [source](https://www.geeksforgeeks.org/routing-in-node-js/#:~:text=Routing%20defines%20the%20way%20in,By%20Using%20Framework)

**WRRC**: It is strange how hard it is to find the meaning of the **WRRC** acronym on the web, even though I know it is the **Web Request Response Cycle**... as the name suggests, it is the cycle of HTTP requests (get, post...) and the responses to them.

*extra definition:* **NPM**: **Node Package Manager**, a subsidiary of **GitHub**... It is the world's largest software registry... its registry is a public database of **JavaScript** software... using the **CLI**, a human being, aka programmer, can install packages and tools to be used in ways unimaginable to non-programming human beings.  

---

## Useful Thingies

[Intro to Node and Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

[What Is NPM](https://docs.npmjs.com/getting-started/what-is-npm)

[nodeJS docs](https://nodejs.org/en/docs/)

[npm docs](https://docs.npmjs.com/)

[express docs](https://expressjs.com/en/4x/api.html)

[http status codes](https://www.restapitutorial.com/httpstatuscodes.html)

[supertest](https://github.com/visionmedia/supertest)