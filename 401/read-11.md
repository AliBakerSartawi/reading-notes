# Event Driven Applications

## Questions

- **Why is access control important?**
  - Because certain information and actions should not be available for all types of users.

- **Describe an application that would need access control**:
  - A freelancing website:
    - Only you can edit your profile.
    - Anyone can post a job, but only the user (client) can edit their own posts.
    - Anyone can search for jobs, but only freelancers can apply to jobs.
    - Website admins can ban freelancers or clients for bad behavior.

- **What is a role used for?**
  - Used to specify which actions are permitted for that user.

- **Why is role based access control more scalable than discretionary or mandatory access control?**
  - Because roles can be added easily if needed.
  - Actions for each role can be easily modified and will be updated for all users.
  - Actions on routes can be changed easily since they are merely parameters in the middleware.

---

## Terms

**Authorization**: Giving permission for a user to perform a certain action.

**Role Based Access Control**: A system where users have roles, and permissions are granted based on their roles.

**Capabilities**: They are the actions (permissions) specified for each role.

---

## Links

[Event Driven Programming](https://www.digitalocean.com/community/tutorials/nodejs-event-driven-programming)

[Node docs: events](https://nodejs.org/api/events.html)

Examples:

```javascript
const EventEmitter = require('events').EventEmitter;
const chatRoomEvents = new EventEmitter;

function displayMessage(message){
  document.write(message);
}

function userJoined(username){
  chatRoomEvents.on('message', displayMessage);
}

chatRoomEvents.on('userJoined', userJoined);

// to remove listener
chatRoomEvents.removeListener('message', displayMessage);

// ------------------Object-Oriented-Example
// ------------------The gator needs to access the methods inside of Food to perform the action
class Food {
  constructor(name) {
    this.name = name;
  }

  becomeEaten() {
    return 'I have been eaten.';
  }
}

var bacon = new Food('bacon');

class gator {
  eat() {
    bacon.becomeEaten();
  }
}

// ------------------Object-Oriented-Plus-Event-Driven
// ------------------This way, the gator only needs to emit the name of the event
const EventEmitter = require('events').EventEmitter;
const myGatorEvents = new EventEmitter;

class Food {
  constructor(name) {
    this.name = name;
    // Become eaten when gator emits 'gatorEat'
    myGatorEvents.on('gatorEat', this.becomeEaten);
  }

  becomeEaten(){
    return 'I have been eaten.';
  }
}

var bacon = new Food('bacon');

const gator = {
  eat() {
    myGatorEvents.emit('gatorEat');
  }
}
```