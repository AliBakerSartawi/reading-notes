## Send & Retrieve Form Data

The web uses a **client/server** architecture that can be summarized as follows; a **client** *(usually a web browser)* sends a request to a *server* (most of the time a web server like *Apache*, *Nginx*, *IIS*, *Tomcat*, etc.), using the **HTTP protocol**. The server answers the request using the same protocol.

The `<form>` element defines how the data will be sent. All of its attributes are designed to let you configure the request to be sent when a user hits a submit button. The two most important attributes are `action` and `method`.

The `action` attribute defines where the data gets sent. Its value must be a valid *relative or absolute URL*. If this attribute isn't provided, the data will be sent to the URL of the page containing the form — the current page.

Absolute URL such as:

```html
<form action="https://example.com">
```

Relative URL such as:

```html
<form action="/somewhere_else">
```

**Note:** It's possible to specify a URL that uses the HTTPS (secure HTTP) protocol. When you do this, the data is encrypted along with the rest of the request, even if the form itself is hosted on an insecure page accessed using HTTP. On the other hand, if the form is hosted on a secure page but you specify an insecure HTTP URL with the action attribute, all browsers display a security warning to the user each time they try to send data because the data will not be encrypted.

The `method` attribute defines how data is sent. The **HTTP protocol** provides several ways to perform a request; HTML form data can be transmitted via a number of different methods, the most common being the `GET` method and the `POST` method.

An **`HTTP`** request consists of two parts: a **`header`** that contains a set of global metadata about the browser's capabilities, and a **`body`** that can contain information necessary for the server to process the specific request.

The `GET` method is the method used by the browser to ask the server to send back a given resource... it will have an empty body. That is why if a form is sent using `GET`, the data sent to the server will be appended to the URL.

But in the `POST` method, the form data is appended to the body of the **HTTP** request.

---

### Sending Files

Sending files with HTML forms is a special case. Files are binary data — or considered as such — whereas all other data is text data. Because HTTP is a text protocol, there are special requirements for handling binary data.

If you want to send files, you need to take three extra steps:

- Set the method attribute to `POST` because file content can't be put inside URL parameters.
- Set the value of `enctype` to `multipart/form-data` because the data will be split into multiple parts, one for each file plus one for the text data - included in the form body (if text is also entered into the form).
- Include one or more `<input type="file">` controls to allow your users to select the file(s) that will be uploaded.

Such as:

```html
<form method="post" action="https://www.foo.com" enctype="multipart/form-data">
  <div>
    <label for="file">Choose a file</label>
    <input type="file" id="file" name="myFile">
  </div>
  <div>
    <button>Send the file</button>
  </div>
</form>
```

---

### Security Measures

**HTML forms** are by far the most common server attack vectors (places where attacks can occur).

All data that comes to your server must be checked and sanitized. Always. No exception.

- **Escape potentially dangerous characters**. The specific characters you should be cautious with vary depending on the context in which the data is used and the server platform you employ, but all server-side languages have functions for this. Things to watch out for are character sequences that look like executable code (such as **JavaScript** or **SQL** commands).
- **Limit the incoming amount of data to allow only what's necessary**.
- **Sandbox uploaded files**. Store them on a different server and allow access to the file only through a different subdomain or even better through a completely different domain.

---

### Links

[Sending and Retrieving Form Data](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)

[HTML5 Forms](https://htmlreference.io/forms/)

[Vid Series - Styling HTML5 Forms](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g5_p_BVUGWykHfqx6bb7qK)