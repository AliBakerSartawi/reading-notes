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

//helper function

function getRandomNumber(min, max) {
  return Math.floor(math.random() * (max - min + 1) + min);
}

const frankie = {
  name: 'frankie',
  age: 0,
  likes: ['cuddling', 'chasing string', 'napping'],
  isGoodWithKids: false, 
  isGoodWithOtherCats: true,
  isGoodWithDogs: false,
  breed: 'British Short Hair',
  imagePath: './images/frankie.jpeg',
  getAge: function(min, max){
    this.age = getRandomNumber(min, max); //to change properties inside an object we must use the contextual this
  },
  render: function () {
    const container = document.getElementById('kitten-profiles');
    console.log(container);
    //we can copy the HTML text here for reference on how to deal with it
    //1 create element
    //2 append the element to its parent or container
    //3 add text content to the element or attributes
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name //we can hardcode the name frankie or use this

    const pEl = document.createElement('p');
    articleEl.appendChild(pEl);
    pEl.textContent = `${this.name} is adorable, and is ${this.age} months old.`; //interpolation method uses backticks

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.likes.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(li);
      liEl.textContent = this.likes[i];
    }

    const imgEl = document.createElement('img');
    articleEl.appendChild(imgEl);
    imgEl.setAttribute('src', this.imagePath);
  },
};

console.log(frankie.getAge(3, 7));
frankie.render();