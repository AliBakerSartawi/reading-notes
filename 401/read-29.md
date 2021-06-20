# Routing

- **Do child components have direct access to props/state from the parent?**
  - Nope  

- **When a component “wraps” another component, how does the child component’s output get rendered?**
  - It gets rendered inside the `props.children` in the parent component 


```jsx
<Main>
  <Content />
</Main>
```

- **Can a component, such as `<Content />`, which is a child also be used as a standalone component elsewhere in the application?**
  - Yes 

- **What trick can a parent use to share all props with it’s children**
  - The trick lies in the spread operator &rarr; `<Child {...props} />` 



 
---

- **props.children**
  - It is used to display whatever is passed between the parent's opening and closing tags 

- **composition**
  - Creating a unique component from a generic/reusable component





---

## Resources

- **[React Router Documentation With Amazing Examples!!!!](https://reactrouter.com/web/api/Link)**

- [browser router tutorial](https://blog.pshrmn.com/entry/simple-react-router-v4-tutorial/)

- **[router detailed tutorial](https://learnwithparam.com/blog/different-types-of-router-in-react-router/)**

- [browser router api docs](https://reacttraining.com/react-router/web/api)

- [react-if component](https://www.npmjs.com/package/react-if)

- [react testing library queries](https://testing-library.com/docs/dom-testing-library/api-queries)

- [aria roles](https://www.w3.org/TR/html-aria/)



