' use strict';

// its bad practice to mix data types in an array
let movieList=['Titanic', 'C America', 'Thor', 'Interstellar'];

// console.log(movieList);

// movieList.push('Tenet'); //adds it to the end
// console.log(movieList);

// movieList.pop(); //removes the last element

// let userInput=prompt('please provide a name');

// movieList.push(userInput);
// console.log(movieList);

// arr.shift() deletes the first element
// arr.unshift() adds an element to the beginning of the array
// arr.splice(x, y, z) x is the index number of where to start, y is how many to delete, z is what elements to add
//arr.length shows how many elements in the array... without () because it is an attribute or property not a method or function

// console.log(movieList.length);

// for (let i = 0; i < movieList.length; i++){
//     console.log(movieList[i]);
// }

let attempts=4;
let userInput=prompt('try to guess the movie');

// while(attempts){
//     for (let i = 0; i < movieList.length; i++){
//         if (userInput===movieList[i]){
//             alert('correct answer');
//             correct=true;
//             break;
//         }
//         attempts-=1;
//         userInput=prompt('please try again, you have ' + attempts+ ' attempts remaining.');
        
//     }
// if (!attempts){
//     break;
// }
// }    

let attempts=4;
let userInput=prompt('try to guess the movie');
while(attempts){
  for (let i= 0;i<moviesList.length;i++){
    if (userInput===moviesList[i]){
      alert('correct answer!');
      correct=true;
      break;
    }
    attempts-=1;
    userInput=prompt('please try again you have : '+attempts+' remaining!');
  }
if (!attempts){
  break;
}

}

