# Component Composition

- **Can a parent component access the state of a child component?**
  - Usually, the follow goes from parent to child, no the opposite
  - But, there are workarounds to transfer the state from child to parent
  - Or by using a library (such as **Redux**) that keeps the state at the application level, making it accessible from anywhere 

- **What can be passed along in a prop variable?**
  - Anything

- **How can a child component “know” the state of another component?**
  - By communicating through a shared parent
  - Or by globalizing the state of the components (using **Redux** for example)


 
---

- **component props**
  - Short for *properties*, they are arguments that can be passed to the component

- **component state**
  - The data of the component and the changes that occur to it over its lifetime

- **application state**
  - This can refer to the storage that keeps the state of all the components of the app inside it





---

## Resources

- [react basics recap](https://medium.freecodecamp.org/these-are-the-concepts-you-should-know-in-react-js-after-you-learn-the-basics-ee1d2f4b8030)

- [props.children](https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891)

- [composition vs inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)

- [react testing library api example](https://testing-library.com/docs/react-testing-library/example-intro)

- [react-if component](https://www.npmjs.com/package/react-if)

- [react-testing-library-async](https://testing-library.com/docs/dom-testing-library/api-async)


