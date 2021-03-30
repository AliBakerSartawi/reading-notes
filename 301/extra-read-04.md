## Filter Method

```javascript
////// FILTER

const numbers = [2,3,4,5,6,7,8,9];

///like map, filter will return a new array

let even = numbers.map((n, i) => {
  if (!(n % 2)) {
    return n;
  }
});
/// will return even values and undefined similar to the length of the original array [2, undefined, 4, undefined, 6, undefined, 8, undefined]

let even = numbers.filter((n, i) => {
  if (!(n % 2)) {
    return n;
  }
});
// returns [2, 4, 6, 8]

///////////////////////

const people = [
  {name: 'john', role: 'dad'},
  {name: 'smith', role: 'how'},
  {name: 'will', role: 'kid'},
  {name: 'ham', role: 'why'},
];

const kids = people.filter(person => {
  return person.role === 'kid'; //filter treats this as a condition and then will return the whole index/object
});
//returns the objects of the kids like [{name; 'will', role: 'kid'}]
//if it was a map, it would return true and false like [false, false, true, false]
//if it was a map and had an if statement inside it, it will return [undefined, undefined, {name; 'will', role: 'kid'}, undefined]
```