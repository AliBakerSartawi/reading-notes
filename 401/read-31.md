# Hooks API

- **Why do we not need more .html pages in a multi-page React app?**
  - Because routes in `React` are not for exploring `HTML` pages, but for mounting and unmounting `components`

- **If we wanted a component to show up on every page, where would we put it and why?**
  - Outside the <BrowserRouter/>
  - Inside the <BrowserRouter />, outside a <Route />
  - Inside a <Route />
  - **Answer**: Inside the <BrowserRouter />, outside a <Route />, because it needs to be included in the `BrowserRouter`, which holds everything, but it needs to be outside of `routes` so that they do not change or disappear no matter the chosen `Route`

- **What does props.children contain?**
  - It is used to display whatever is passed between the parent's opening and closing tags 




 
---

- **Composition**
  - Creating a unique component from a generic/reusable component

- **Children / Child Components**
  - Components that are inside a parent component  

- **Hash Routing**
  - A <Router> that uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL. Used to support legacy browsers. [source](https://reactrouter.com/web/api/HashRouter)

- **Link Routing**
  - Provides declarative, accessible navigation around your application. [source](https://reactrouter.com/web/api/Link)





---

## Resources

- [making sense of hooks](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)

- [the state hook](https://reactjs.org/docs/hooks-state.html)

- [hooks api](https://reactjs.org/docs/hooks-overview.html)

- [hooks api reference](https://reactjs.org/docs/hooks-reference.html)

- [effects hook](https://reactjs.org/docs/hooks-effect.html)




