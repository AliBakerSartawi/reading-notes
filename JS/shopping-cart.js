'use strict';

const cats = localStorage.getItem('cats');

if (cats) {
  const catsFromLS = JSON.parse(cats);
  for (let i = 0; i < catsFromLS.length; i++) {
    new Cat(catsFromLS[i].name);
    cats.all[i].render();
  }
}

catForm.addEventListener('submit', handleCatSubmit);

// another js file

const catButton = document.getElementById('catButton');

var handleCatButtonClick = function () {
  const catFromLS = JSON.parse(localStorage.getItem('cats'));
  Cat.all = catsFromLS;
  console.log('allCats array', Cat.all[0]); //this cant access the prototypes because it is a normal object not a constructor
  console.log(Cat(Cat.all[0].name)); //this will bring the constructor object that has access to the prototypes

  for (let i = 0; i < catsFromLS.length; i++) {
    const newCat = new Cat(catsFromLS[i].name);
    newCat.render();
  }
}

catButton.addEventListener('click', handleCatButtonClick);