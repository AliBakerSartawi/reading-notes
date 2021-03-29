## Map method

to loop through an array

```javascript
const numbers = [2, 3, 4, 5];

numbers.map(number => {
  console.log(number); //same as forEach
  //it allows us to return, contrary to forEach
})

const clonedNumArr = numbers.map(number => {
  return number; //returns values as an array
});

///////

const nums = [1, 2, 3, 4, 5, 6, 7];
//clone array with an increment
const incrementedNums = nums.map(element => {
  return element + 1;
});

//map has a second parameter, index
const incremental = nums.map((num, idx) => {
  if (num[idx]+1) {
    return num + nums[idx+1];
  } else {
    return '';
  }
});


/////// on objects

const people = [
  {name: 'john', role: 'dad'},
  {name: 'smith', role: 'how'},
  {name: 'will', role: 'dad'},
  {name: 'ham', role: 'why'},
];

people.map(person => {
  return person.name; // ['john', 'smith', 'will', 'ham'];
})
```