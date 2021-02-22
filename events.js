'use strict';

const names = [
  'cruising-goat',
  'emotional goat',
  'float-your-goat',
  'goat-out-of-hand',
  'kissing-goat',
  'sassy-goat',
  'smiling-goat',
  'sweater-goat',
];

//helper function
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const leftImage = document.getElementById('left-image');
const rightImage = document.getElementById('right-image');
const imagesSection = document.getElementById('images-section');

function Goat(name) {
  this.name = name;
  this.path = `./assets/${name}.jpg`; //image path
  this.votes = 0;
  this.views = 0;
  Goat.all.push(this);
}

Goat.all = []; //this is an array that holds objects

for (let i = 0; i < names.length; i++) {
  new Goat(names[i]);
}

console.table(Goat.all);

//add a line in the render to count the view count
function render() {
  const leftIndex = randomNumber(0,Goat.all.length -1);
  leftImage.src = Goal.all[leftIndex].path;
  leftImage.title = Goat.all[leftIndex].name;
  leftImage.alt = Goat.all[leftIndex].name;

  const rightIndex = randomNumber(0,Goat.all.length -1);
  rightImage.src = Goal.all[rightIndex].path;
  rightImage.title = Goat.all[rightIndex].name;
  rightImage.alt = Goat.all[rightIndex].name;
}

imagesSection.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('Target', event.target.id);

  if(event.target.id !== 'images-section') {
    for (let i = 0; i < Goat.all.length; i++) {
      if (Goat.all[i].name === event.target.title) {
        Goat.all[i].votes++;
      }
      
    }
    render();
  }
}