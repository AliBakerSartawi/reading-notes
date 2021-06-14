# Props and State

- **Does a deployed React application require a server?**
  - Yes, React is just a `view`, it needs a `controller` for full deployment

- **Why do we prefer to test a React application at the behavior rather than the unit level?**
  - Because React is not like a function that gives a simple output, there is a visual aspect involved

- **What does `npm run build` do?**
  - It merges files of the same type... `css` and `js`... fewer files mean less `HTTP` requests, which means faster loading

- **Describe the actual composition / architecture of a React application**
  - There isn't a certain/fixed architecture to it... it is simply a tree of components housing elements or even other components 

 
---

- **BDD**
  - **Behavior Driven Development** is a branch of **Test Driven Development** (TDD). **BDD** uses human-readable descriptions of software user requirements as the basis for software tests. [source](https://medium.com/javascript-scene/behavior-driven-development-bdd-and-functional-testing-62084ad7f1f2)

- **Acceptance Tests**
  - Testings that determine if the code has met the requirements

- **mounting**
  - The act of outputting the element from the virtual DOM into the actual DOM

- **build**
  - The build file is created after `npm run build`, which merges `css` files together and `js` files together for production to optimize loading times




---

## Resources

- [setState explained](https://css-tricks.com/understanding-react-setstate/)

- [Handling events](https://facebook.github.io/react/docs/handling-events.html)

- [Forms](https://facebook.github.io/react/docs/forms.html)

- [State and lifecycle](https://facebook.github.io/react/docs/state-and-lifecycle.html)

- [Components and props](https://facebook.github.io/react/docs/components-and-props.html)

- [React Testing Library](https://testing-library.com/docs/react-testing-library)

- [RTL Testing Example](https://thomlom.dev/beginner-guide-testing-react-apps/)

- [Roles Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles)


