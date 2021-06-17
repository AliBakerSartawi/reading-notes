# Hash Tables &rarr; ┬─┬ ノ( ゜-゜ノ) &rarr; (╯°□°）╯︵ ┻━┻

- A **Hash Table** is an array-based data structure with some added functionality
- In simple terms, **Hashing** is encrypting
  - Generally, a **Hash** is irreversible
  - It is deterministic, meaning that it gives the same encrypted value (string) if the hashing function is fed with the same input
  - The purpose of **Hashing** is to create a short reference to the data's location in the table
  - In some hashing functions, different inputs can have similar outputs, this is called **collision**
    - A way to handle **collision** is to store both key-value pairs at the same index using an array or a linked-list, this method is called **separate chaining**
  - A **Bucket** is an index in the **Hash Table**

- **Hash Tables** are useful for
  - Dictionaries
  - Libraries
  - Storing unique values

- **Technical Benefits**
  - O(1) time complexity for inserting, deleting and lookup... no matter the size of the table
---


```javascript
const hash = (key, size) => {
  let hashedKey = key.charCodeAt(key.length)

  return hashedKey % size
}

class HashTable {
  constructor() {
    this.size = 20
    this.buckets = Array(this.size)

    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map()
    }
  }

  insert(key, value) {
    let idx = hash(key, this.size)
    this.buckets[idx].set(key, value)
  }

  remove(key) {
    let idx = hash(key, this.size)
    let deleted = this.buckets[idx].get(key)
    this.buckets[idx].delete(key)

    return deleted
  }

  search(key) {
    let idx = hash(key, this.size)
    return this.buckets[idx].get(key) || 'Key not found'
  }
}
```

---

## Resources

- **Read** [Intro to Hash Tables](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-30/resources/Hashtables.html)

- **Watch** [what is a hash table?](https://www.youtube.com/watch?v=MfhjkfocRR0)

- **Read** [basics of hash tables](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)

- **Skim** [hash table wiki](https://en.wikipedia.org/wiki/Hash_table)

