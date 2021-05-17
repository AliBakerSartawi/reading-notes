# Bearer Authorization

## Questions

Write the following steps in the correct order:

- Ask the client if they want to sign in via a third party
- Redirect to a third party authentication endpoint
- Register your application to get a client_id and client_secret
- Make a request to a third-party API endpoint
- Receive authorization code
- Make a request to the access token endpoint
- Receive access token

I think this seems like the right order... maybe.

**What is the purpose of the authorization code?** To make a request to get an access token. 

**What can you do with an access token?** You can use it to make API requests on behalf of the user. The access token represents an authorization of a specific application to access specific parts of a user's data. [source](https://www.oauth.com/oauth2-servers/access-tokens/#:~:text=Access%20tokens%20are%20the%20thing,in%20transit%20and%20in%20storage.)

**What’s a benefit of using OAuth instead of your own basic authentication?** Firstly, it is safer... basic auth requires sending the user credentials with each request, which is bad practice... Also, by using OAuth, the application is not required to store passwords, and that relieves from a huge liability.

---

## Terms

**Client ID**: The client_id is a public identifier for apps. Even though it’s public, it’s best that it isn’t guessable by third parties, so many implementations use something like a 32-character hex string. It must also be unique across all clients that the authorization server handles. If the client ID is guessable, it makes it slightly easier to craft phishing attacks against arbitrary applications. [source](https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/)

**Client Secret**: The client_secret is a secret known only to the application and the authorization server. It must be sufficiently random to not be guessable, which means you should avoid using common UUID libraries which often take into account the timestamp or MAC address of the server generating it. A great way to generate a secure secret is to use a cryptographically-secure library to generate a 256-bit value and converting it to a hexadecimal representation. [source](https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/). OAuth 2.0 has reduced the role of the client secret significantly, but it is still passed along for the servers that use it. [source](https://stackoverflow.com/questions/12152247/whats-the-purpose-of-the-client-secret-in-oauth2)

**Authentication Endpoint**: Endpoint authentication is a security mechanism designed to ensure that only authorized devices can connect to a given network, site or service. [source](https://whatis.techtarget.com/definition/endpoint-authentication#:~:text=Endpoint%20authentication%20is%20a%20security,also%20known%20as%20device%20authentication.&text=Authenticating%20both%20the%20user%20and,%2Dfactor%20authentication%20(2FA).)

**Access Token Endpoint**: The token endpoint is where apps make a request to get an access token for a user. [source](https://www.oauth.com/oauth2-servers/access-tokens/#:~:text=The%20token%20endpoint%20is%20where,Client%20Credentials)

**API Endpoint**: It is the point of entry in a communication channel when two systems are interacting. [source](https://rapidapi.com/blog/api-glossary/endpoint/). A route is the name you use to access the endpoint.

**Authorization Code**: The authorization code is a temporary code that the client will exchange for an access token. The code itself is obtained from the authorization server where the user gets a chance to see what the information the client is requesting, and approve or deny the request. [source](https://www.oauth.com/oauth2-servers/server-side-apps/authorization-code/#:~:text=4.1,approve%20or%20deny%20the%20request.)

**Access Token**: OAuth 2.0 is an authorization protocol and NOT an authentication protocol. As such, it is designed primarily as a means of granting access to a set of resources, for example, remote APIs or user’s data. [source](https://auth0.com/intro-to-iam/what-is-oauth-2/)

---

## Useful Links

[JWTs Explained](https://www.youtube.com/watch?v=926mknSW9Lo)

[Intro to JWT](https://jwt.io/introduction/)

[Are JWTs Secure?](https://stackoverflow.com/questions/27301557/if-you-can-decode-jwt-how-are-they-secure)

[npm jsonwebtoken docs](https://www.npmjs.com/package/jsonwebtoken)

