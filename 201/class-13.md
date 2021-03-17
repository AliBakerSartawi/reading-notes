## Local Storage

Native client application hold the advantage against web applications... since native apps can have their own storage on the machine.

What web apps need is a lot of storage on the client which persist beyond a page refresh and isn't transmitted to the server.

**HTML5** came in hot with the solution.

**HTML5** or later called **Local Storage** or even **DOM Storage**... basically it is a way for domains to store key/value pairs locally... the data will persist even after navigating from the page and will not be sent back to the server unless done manually.

The storage quota is **5MB**, in some browsers the user can increase that limit.

```javascript
openDatabase('documents', '1.0', 'Local document storage', 5*1024*1024, function (db) {
  db.changeVersion('', '1.0', function (t) {
    t.executeSql('CREATE TABLE docids (id, name)');
  }, error);
});
//I have no idea what this code does... but it looks cool... hence, it is here
```

Let's see what the future holds for local storage.

---

---

Local storage:
- client side
- 5 MB
- keeps data after closing the browser

Cookies:
- on server side
- 4 KB
- has an expiration limit

Session
- on client side
- loses data after closing tab or browser

to store any data we need key/value pairs.

```javascript
// localStorage.setItem('key', 'value'); to store data
localStorage.setItem('name', 'roaa');
```

to delete items you can select it, from applications tab in Inspect Element

or

```javascript
localStorage.removeItem('name'); //only needs the key
localStorage.clear(); //deletes all storage
```

to retrieve
```javascript
localStorage.getItem('key');
```

```javascript
localStorage.setItem('name', name);
localStorage.setItem('size', size);
localStorage.setItem('hot', isHot);
localStorage.setItem('type', dType);
localStorage.setItem('milk', milk);

//this is wrong
//with each submit that pushes the results to an array, we store that array
//we need to use JSON, which is JavaScript Object Notation... data interchange language... to be able to store arrays

Coffee.drinks = [];
//there is a function that will push to the array
localStorage.setItem('orders', Coffee.drinks); //this returns [object object]
localStorage.setItem('orders', JSON.stringify.Coffee.drinks); //to change the array into a string, write inside the constructor function

//to retrieve it we need to parse it again to return it to its original format
JSON.parse(localStorage.getItem('orders'));

function retrieve(){
  console.log(localStorage);
  if(localStorage.length > 0){
    Coffee.drinks = JSON.parse(localStorage.getItem('orders'));
    renderOrder(); //so that when page is refreshed the previous orders can be rendered automatically
  }
}

// we call the function at the end 
retrieve();
```