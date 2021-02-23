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