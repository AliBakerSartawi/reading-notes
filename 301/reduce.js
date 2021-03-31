'use strict';

/////// REDUCE

let numbers = [1, 2, 3, 4];

let sum = numbers.reduce((accumulator, value, idx) => {
  console.log('loop #', idx);
  console.log(accumulator); //set to numbers[0]
  console.log(value); //first value is numbers[1]
  return accumulator += value;
});
//this will iterate 3 times, result is 10
console.log(sum);

let sum = numbers.reduce((accumulator, value, idx) => {
  console.log('loop #', idx);
  console.log(accumulator); //set to 5 because it was passed as a second parameter
  console.log(value); //first value is numbers[1]
  return accumulator += value;
}, 5); //this parameter here will make accumulator = 5
//this will iterate 4 times (because value will start at [0] not [1]), result is 15
console.log(sum)

///////////////////

let people = [
  {name: 'john', role: 'developer'},
  {name: 'smith', role: 'developer'},
  {name: 'will', role: 'manager'},
  {name: 'ham', role: 'support'},
];

let detailedPeople = people.reduce((accumulator, value) => {
  accumulator[value.name]=value.role; //this will make an object
  return accumulator;
}, {}); //we need to initialize accumulator as an object
//if we dont initialize it as an object, it will be the first index and result would be wrong
console.log(detailedPeople);
//result [{john:developer}, {smith:developer}...]