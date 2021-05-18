# ACL - Access Control List

## Questions

**When is Basic Authorization used vs. Bearer Authorization?**
- Basic Auth &rarr; Signin \|\| Authentication
- Bearer Auth &rarr; to stayed signed in with each request \|\| Authorization

**What does the JSON Web Token package do?**
- **JWT** signs and encrypts the user's username and some extra credentials or info (except the password) and passes it in the `headers` for authorization purposes.

**What considerations should we make when creating and storing a SECRET?**
- It should be stored securely (in `.env` for example)
- It should be random, not guessable
- It should be a `String`

---

## Terms

**Encryption**: 
- It is the process of encoding information... making it readable only to authorized parties.

**Token**:
- It is an object or series of characters (`String`) used for authorization purposes.

**Bearer**:
- The bearer is the holder of the token.

**Secret**:
- A string used as a key to **sign || verify** encrypted tokens. 

**JSON Web Token**:
- It is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. [source](https://jwt.io/introduction)

---

## Useful Links

**RBAC** = Role Based Access Control

[RBAC tutorial](https://www.youtube.com/watch?v=C4NP8Eon3cA)

[5 steps to RBAC](https://www.csoonline.com/article/3060780/5-steps-to-simple-role-based-access-control.html)

[wiki - RBAC](https://en.wikipedia.org/wiki/Role-based_access_control)


