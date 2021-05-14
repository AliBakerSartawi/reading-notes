# Linked Lists

A linked list is similar to a low level array structure... each element in the list is called a node, and it can reference (has a pointer to) the next node in the list (singly list).

A doubly list is when each node references the next and previous node... and a circular list is when the last node (tail) references the first (the head) or another node.

The big question here is... why even use linked lists when we can use arrays...

There are pros and cons to this:

Linked lists advantages: faster insertion and removal of elements (nodes) with a Big O(1), while doing that with normal array is a Big O(n) which is slower.

Arrays advantages: faster in getting an element by index with a Big O(1), while in linked lists it is slower with a Big O(n) because nodes are accessed sequentially starting from the first node... resulting in a linear process. That is linked lists are classified as a linear data structure.

Also... linked lists use more memory than arrays because of the storage of pointers.

---

## Useful Links

[Linked Lists - Web Dev Simplified Vid](https://www.youtube.com/watch?v=gJjPWA8wpQg)

[Linked Lists](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/resources/singly_linked_list.html)

[What’s a Linked List, Anyway pt1](https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d)

[What’s a Linked List, Anyway pt2](https://medium.com/basecs/whats-a-linked-list-anyway-part-2-131d96f71996)
