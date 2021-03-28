# Object Methods

```javascript
'use strict';

////objects 

///// we can put the properties (keys) inside quotations or without
let person =
{
  'name': 'john',
  'role': 'Dad',
  'interests': ['teaching', 'coaching']
};

console.log(person); 

// for (const key in object) { //will loop for each key in the object
//   console.log(key);
//   console.log(person[key]);
//   console.log(person['name']);
// }


//////// Object.keys
let properties = Object.keys(person);
console.log(properties);

properties.forEach(key => {
  console.log(person[key]);
  console.log('dot', person.key); //returns undefined
  //this will return the values
})

//////// Object.keys
let values = Object.values(person);
console.log(values); 
values.forEach(value => {
  console.log(value);
})

/////// Object.entries
const entries = Object.entries(person);
console.log(entries); //each key:value as an array, all in one array

```