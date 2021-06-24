# Graph

- A **Graph** is a non-linear data structure that contains `nodes` and `edges`
  - A `node` or a `vertex` is a unique value
  - An `edge` represents a connection or relationship between two `nodes`  

- `Directed Graph`: relation flows one way (someone follows someone else on **twitter** for example)
- `Undirected Graph`: goes both ways (like friends on **facebook**)
- `Weighted Graph`: `edges` have data or meaning (like distance between locations) 
- `Cycle`: `edge` points to the same itself

- **Graphs** are useful for
  - Social Media
  - Maps (geographic data)
  - Recommendation engines

- A good way to represent a `graph` is in a **2d array** (adjacency matrix)

  ```
  Graph:
          A
         / \
        B   C
            |
            D

  Adjacency Matrix:
         A  B  C  D
      [
    A   [0, 1, 1, 0],
    B   [1, 0, 0, 0],
    C   [1, 0, 0, 1],
    D   [0, 0, 1, 0]
      ]

  (1) is added at the intersection of each two nodes that have an edge
  ```

  - This way it easy to add or look up an edge
  - But takes quadratic time to insert a new `node` in the `graph`

- An alternative is an `adjacency list`, where each item has its own array of its `neighbors`

  ```
  A [B, C]
  B [A]
  C [A, D]
  D [C]
  ```

  - This method is faster to iterate over a `node's` edges and is more efficient with memory especially when you have many `nodes` and few `edges`

- Traversing `graphs`: (common interview question)
  - DFS (depth-first search) **recursive**
    - Start with a `node`, go to its first child, then to that's first child, until no more children
    - Then, backtrack to the last node (the one before the childless) and continue the process

      ```js
      function visit(n) {
        if (n.notVisited) {
          visit(n)
        }
      }
      ```

  - BFS (breadth-first search) with a **queue**
    - From the starting `node`, add all the direct children to a queue
    - Once they have been visited, move to the grandchildren and so on

      ```js
      let Q = []
      while (Q.length) {
        n = Q.dequeue()
        for (let v in n) {
          Q.enqueue(v)
        }
      }
      ```

---

## Resources

- **Read** [Graphs](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-35/resources/graphs.html)
