# Array & String Methods

```javascript
const arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/////// ---PUSH--- Adds numbers to the end of the array
arrOfNum.push(10);
arrOfNum.push(11, 12, 13, 14, 15);

////// ---POP--- Removes from end of array
arrOfNum.pop();

////// ---UNSHIFT--- Adds to the beginning
arrOfNum.unshift(0);
arrOfNum.unshift(-3, -2, -1); //mind the order

////// ---SHIFT--- removes from the beginning
arrOfNum.shirt();

////// ---TOSTRING--- returns array to string
const str = arrOfNum.toString(); //will stringify with commas
// 1,2,3,4,5,6

///// ---JOIN--- returns array to string, and can specify how they are separated instead of commas
const str = arrOfNum.join(''); //or join(' ') or whatever
// 1 2 3 4 5 6


///// ---SPLIT--- uses separator to turn string into array
const factCheck = 'cats are furniture\'s worst enemy';
const arr = factCheck.split(); //whole string as index 0
const arr2 = factCheck.split(' '); //separate by space, each word in separate index
.split(' ', 2); //the second parameter is to stop after 2 separates

const email = 'ali@hotmail.com';
const emailName = email.split('@', 1)[0]; //will return as string


////// ---SLICE--- find (or clone by assigning to another variable) elements within an array
//this method will not change original array
const slicedPizza = arrOfNum.slice(0, 2); //copy starting at 0 and stop before 2
slicedPizza = arrOfNum.slice(2, 4); //clone starting at 2 and stop before 4
slicedPizza = arrOfNum.slice(); //clone the whole array
slicedPizza = arrOfNum.slice(-1); //to clone the last one
slicedPizza = arrOfNum.slice(-2); //to clone the last two

////// ---SPLICE--- replace parts of an array with new values 
//this method will change the original array
const deleted = arrOfNum.splice(0, 1); //starts at 0 and deletes 1 element, then assign the deleted to this variable
const replaced = arrOfNum.splice(0, 1, 15); //will put 15 in place of the deleted
arrOfNum.splice(0, 1, 5, 6, 7, 'eight', 'nine'); //will add all these new elements after deleting

////// ---CONCAT--- 
const arrOne = [1, 2, 3];
const arrTwo = [4, 5, 6];
const arrThree = [7, 8, 9];
const concatArr = arrOne.concat(arrTwo, arrThree); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
```