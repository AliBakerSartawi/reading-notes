# Trees

- Unlike `arrays` and `linked lists` which are linear data structures, `trees` are hierarchial or non-linear.
  - Each element in the tree is called a `node`, which has a `value` and a `pointer` to the next node.
  - The first node is called the `root` which is the also first `parent`, then we have `child` node.
  - Nodes next to each other are called `siblings`.
  - Any node without a `child` is called a `leaf` node.
  - An `edge` is the link between a `parent` and a `child` node.
  - `height` is the number of edges from the `root` to the farthest `leaf`.
  - `K`: A number that specifies the maximum number of children any node may have in a k-ary tree. In a binary tree, `k = 2`.

- A `binary tree` is where a node's maximum number of children is two (right and left).

- A `binary search tree` is a type of `binary tree` that naturally stays sorted.
  - Every `left` child must be less than its `parent`.
  - Every `right` child must be greater than its `parent`.

- A `binary search tree` aka `BST` is **balanced** when its `right` and `left` sub-trees have **roughly** the same amount of nodes.
  - If sub-trees have the exact same amount, it makes it a **perfect** tree, which is rare.
  - Otherwise, it is called an **unbalanced** tree.
  - In worst case scenarios, a `BST` can become so unbalanced it becomes **degenerate**, where it basically becomes a `linked list`. (not a tree anymore)

---

**Binary Search Tree**

```javascript
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value)
    this.count = 1 // keep track how many nodes in the tree
  }

  size() {
    this.count
  }

  insert(value) {
    this.count++

    let newNode = new Node(value)

    // recursive search algorithm
    const searchTree = node => {
      // if value < node.value, go left
      if (value < node.value) {
        // if no left child, append newNode
        if (!node.left) {
          node.left = newNode
        } 
        // if left child, look left again
        else {
          searchTree(node.left) // recursive call
        }
      }
      // if value > node.value, go left
      else if (value > node.value) {
        // if no right child, append newNode
        if (!node.right) {
          node.right = newNode
        }
        // if right child, look right again
        else {
          searchTree(node.right)
        }
      }
    }
    searchTree(this.root)
  }

  // min value is the most left leaf
  min() {
    let currentNode = this.root

    // continue traversing left until no more children
    while(currentNode.left) {
      currentNode = currentNode.left
    }

    return currentNode.value
  }

  max() {
    let currentNode = this.root

    // continue traversing right until no more children
    while(currentNode.right) {
      currentNode = currentNode.right
    }

    return currentNode.value
  }

  contains(value) {
    let currentNode = this.root

    while (currentNode) {
      if (value === currentNode.value) {
        return true
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return false
  }

  // --- depth first search --- branch by branch
  
  
  /**         (15)
   *    (3)         (36)
   * (2)  (12)   (28)   (39)
   * */

  // in-order (from left to right regardless of level)
  // left, root/parent, right
  // 2, 3, 12, (15), 28, 36, 39
  dfsInOrder() {
    let result = []

    // nested recursive function
    const traverse = node => {
      // if left child, go left again
      if (node.left) traverse(node.left)

      // capture node value
      result.push(node.value)

      // if right child, go right again
      if (node.right) traverse(node.right)
    }
    traverse(this.root)

    return result
  }

  // pre-order (parents over children)
  // root, left, right
  // (15), 3, 2, 12, 36, 28, 39
  dfsPreOrder() {
    let result = []

    // nested recursive function
    const traverse = node => {
      // capture node value
      result.push(node.value)

      // if left child, go left again
      if (node.left) traverse(node.left)

      // if right child, go right again
      if (node.right) traverse(node.right)
    }
    traverse(this.root)

    return result
  }

  // post-order (children over parents)
  // left, right, root
  // 2, 12, 3, 28, 39, 36, (15)
  dfsPostOrder() {
    let result = []

    // nested recursive function
    const traverse = node => {
      // if left child, go left again
      if (node.left) traverse(node.left)

      // if right child, go right again
      if (node.right) traverse(node.right)

      // capture node value
      result.push(node.value)
    }
    traverse(this.root)

    return result
  }

  // --- breadth first search --- level by level
  // using a queue!
  // (15), 3, 36, 2, 12, 28, 39 
  bfs() {
    let result = []
    let queue = []

    queue.push(this.root)

    // or queue.peek() if queue is a class
    while(queue.length) {
      let currentNode = queue.shift()

      result.push(currentNode.value)

      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    return result
  }

}
```

---

## Some Info To Consider

- The Big O time complexity for inserting a new node is `O(n)`. Searching for a specific node will also be `O(n)`. Because of the lack of organizational structure in a Binary Tree, the worst case for most operations will involve traversing the entire tree. If we assume that a tree has `n` nodes, then in the worst case we will have to look at `n` items, hence the `O(n)` complexity.

- The Big O space complexity for a node insertion using breadth first insertion will be `O(w)`, where `w` is the largest width of the tree. For example, in the above tree, w is 4.

- A **perfect** binary tree is one where every non-leaf node has exactly two children. The maximum width for a perfect binary tree, is `2^(h-1)`, where `h` is the height of the tree. Height can be calculated as `log n`, where `n` is the number of nodes.

- The Big O time complexity of a Binary Search Tree’s insertion and search operations is `O(h)`, or `O(height)`. In the worst case, we will have to search all the way down to a leaf, which will require searching through as many nodes as the tree is tall. In a balanced (or “perfect”) tree, the height of the tree is `log(n)`. In an unbalanced tree, the worst case height of the tree is `n`.

- The Big O space complexity of a BST search would be `O(1)`. During a search, we are not allocating any additional space.


---

## Resources

**[Trees - Codefellows](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-15/resources/Trees.html)**

**[Tutorial](https://www.youtube.com/watch?v=6JeuJRqKJrI)**