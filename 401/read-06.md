# Authentication

## Questions

Explain what is a **Singleton** in computer science terms: It is character encoded with one unit in variable-width encoding schemes for computer character sets. [source](https://en.wikipedia.org/wiki/Singleton)

---

Explain how the **Singleton** pattern can be used with Node modules, specifically with classes:

```javascript
class Singleton {
  constructor() {
    if (Singleton.instance === null) {
      this.property = [];
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const instance = new Singleton();
Object.freeze(instance);
export default instance; // import instance from './Singleton.js';
```

---

If you were tasked with building a middleware system like Express uses, what approach might you take to construct/operate it?

Firstly, create that middleware (function) in a separate file for modularity purposes... then require it (import it) in the desired file... then if the middleware is to be used globally on all routes, that can be achieved with `app.use(middlewareName)`... or if it is meant for certain routes, it can be added in them as an argument as such `app.get('/route', middlewareName, handleRoute)`.

---

## Terms

**Router Middleware**: It is a function that comes between the request and the response and can modify the data, then calls the next middleware or the endpoint function.

**Dynamic Module Loading**: It is an approach where modules are loaded on demand (when needed)... this is also called **lazy loading**... another use case is dynamically loading modules based on conditions (computed module specifier strings).

**Singleton Pattern**: It is a design pattern where a class or function can only have one instance... making it shareable through different resources without losing information or needing to recreate it. It is a very controversial design pattern that can cause errors, but some programmers like to use it in niche cases.

**CRUD -> REST Method Matches**: Create = POST, Read = GET, Update = PUT, Delete = DELETE. Also, PUT can be used to create in some cases.

**Mock Testing**: It is an approach in unit testing where dependencies are replaced with objects that simulate the behavior of the real ones. [source](https://devopedia.org/mock-testing#:~:text=Mock%20testing%20is%20an%20approach,behaviour%20of%20the%20real%20ones.). Meaning that mock testing a database will not affect its real contents, for example.

---

## Useful Links

[Securing Passwords](https://thehackernews.com/2014/04/securing-passwords-with-bcrypt-hashing.html)

[Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication)

[OWASP auth cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

[bcrypt docs](https://www.npmjs.com/package/bcrypt)

