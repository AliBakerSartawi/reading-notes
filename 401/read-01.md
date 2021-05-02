# TDD & CI/CD

## TDD

**TDD** is short for **test-driven development**, where testing is tightly knit with the writing of the code and its refactoring.

This methodology results a higher degree of internal/technical robustness.

For this process to be smooth... there has to be a balance the amount of tests put... more is less. Forgetting to periodically run the tests can be another setback. Or exaggerating in writing tests for trivial code... wasting time and brain cells.

Guru programmers can reach a level where they are able to pre-write tests (roadmap) for planned features... others are able to expose bugs through the tests before any remedy is prescribed to the code.

Mastering the **TDD** methodology is an essentiality to become a programming legend.

[TDD](https://www.agilealliance.org/glossary/tdd/#q=~(infinite~false~filters~(postType~(~'page~'post~'aa_book~'aa_event_session~'aa_experience_report~'aa_glossary~'aa_research_paper~'aa_video)~tags~(~'tdd))~searchTerm~'~sort~false~sortDirection~'asc~page~1))

---

## CI/CD

**CI/CD** is short for **Cats International Cake Department**, or **Continuous Integration / Continuous Delivery**.

This is basically a set of cultural behaviors among programming addicts... the philosophy of being in sync code-wise.

**CI** boils down to consistency in the code among the programmers of a certain project, not any one of them strays away from the pack with their branched code... code changes are committed more frequently and tested... merged with main... and pulled to the others repos... that way, changes are always tangible and in reach.

**CD** is basically the state where the project is always updated to the environments with successful functionality... a step further is to interpret the **D** as deployment, where the code is always able to deployed successfully after each commit or integration.

[CI/CD](https://www.youtube.com/watch?v=xSv_m3KhUO8)

---

## Review

1- What is `Array.map()`: this method returns a new array similar in length to the original array, and elements will be manipulated based on the code inside. The original array remains unaffected.

2- What is `Array.reduce()`: this method returns one value, be it `string` or `number` or `array` or `object` based on the accumulation of the elements of the original array depending on the code written inside the method. The original array remains unaffected.

3- **Async Await** example:

```javascript
function getCharacters() {
  superagent.get('https://swapi.dev/api/people').then(data => {
    // console.log(data.body.results)
    const formattedData = {}; 
    data.body.results.forEach(obj => {
      return formattedData[obj.name] = obj.url;
    })
    console.log(formattedData);
  }).catch(e => {
    console.log(e);
  });
}

getCharacters();
```

The above code is in regular `async` format, the code below is refactored into `async await` format:

```javascript
async function getCharacters() {
  try {
    const data = await superagent.get('https://swapi.dev/api/people');

    const formattedData = {}; 

    data.body.results.forEach(obj => {
      return formattedData[obj.name] = obj.url;
    })
    console.log(formattedData);
  } catch (e) {
    console.log(e)
  }
}

getCharacters();
```

4- `Promises` in **JavaScript** are similar to promises in real life: they are code that may take some time to return a result, and the result may not come back, thus a reactive measure is to be taken if the code doesn't come back (`.catch()`). Since the code may take time to come back, it is run separately from the main thread so that the program doesn't block or stop. When the result comes back (`.then()`) will execute another code that depends on the returning result... and so on.

5- Are all **callback** functions considered **asynchronous**? Of course not... a callback is just a function at the end of the day, it can be async if it is in the microtask or macrotask category, or just a normal synchronous function.


