'use strict';

// they are asynchronous / async = running at the same time
// the functions we are used to are synchronous functions = they work in order

let longTask = (status) => new Promise((resolve, reject) => {
  let timer = Math.floor(Math.random() * 1000);
  setTimeout(() => {
    if (status) { resolve(`Good (${status} / ${timer})`); }
    else { reject('Bad');}
  }, timer);
});

longTask('First One')
  .then(task => console.log('Task', task)).catch(console.error);









/////// APIs and REST
// REST is an architectural standardized style for building a web server
// RESTful methodology
// get is an HTTP method to get data
// post HTTP method to create data (from user to server)
// delete
// put/update
