# Stacks & Queues

## Stacks

**Methods**:

- push &rarr; insert at top &rarr; **O(1)**
- pop &rarr; remove at top, raises `exception` is queue is empty &rarr; **O(1)**
- peek &rarr; view value of the top node, raises `exception` if stack is empty &rarr; **O(1)**
- isEmpty &rarr; returns true if empty &rarr; **O(1)**

**Concept**:

- LIFO &rarr; Last In First Out
- FILO &rarr; First In Last Out

**Uses**:

- **undo &harr; redo** implementation
  - each action is `pushed` to an `undo` stack
  - when an action is `popped`, it is `pushed` to a `redo` stack
  - if action is `popped` from redo, it will be `pushed` again to the `undo` stack

**Code Example**:

```javascript
class Stack {
  constructor() {
    this.storage = {};
    this.size = 0; // or length, or count
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }

  pop(element) {
    if (this.isEmpty()) return 'exception';

    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }

  peek() { // return the top
    return this.isEmpty() ? 'exception' : this.storage[this.size];
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

const stack = new Stack();
```

## Queues

**Methods**:

- enqueue &rarr; added to queue &rarr; **O(1)**
- dequeue &rarr; removed from queue, raises `exception` is queue is empty &rarr; **O(1)**
- peek &rarr; view value of the front/first node, raises `exception` if queue is empty &rarr; **O(1)**
- isEmpty &rarr; returns true if empty &rarr; **O(1)**

**Concept**:

- FIFO &rarr; First In First Out
- LILO &rarr; Last In Last Out

**Uses**:

- **printer queue** implementation
  - actions are executed in their order in being `queued`.

**Code Example**:

```javascript
class Queue {
  constructor() {
    this.storage = {}
    this.head = 0
    this.tail = 0
  }

  enqueue(element) {
    this.storage[this.tail] = element
    this.tail++
  }

  dequeue(element) {
    if (this.isEmpty()) return 'exception'

    let removed = this.storage[this.head]
    delete this.storage[this.head]
    this.head++
    return removed
  }

  peek() {
    return this.isEmpty() ? 'exception' : this.storage[this.head]
  }

  isEmpty() {
    if (this.tail === 0 || this.tail === this.head) {
      return true
    }
    return false
  }
}

const queue = new Queue();
```
