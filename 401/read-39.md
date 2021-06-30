# Redux Toolkit

- **What’s the best practice for “pre-loading” data into the store (on application start) in a Redux application?**
  - Assign an empty object or array to the initial state
  - Dispatch the action in `useEffect` hook (equivalent of `componentDidMount`)

- **When using a thunk/async action that dispatches the actual action, which do you export from your reducer?**
  - the thunk action, because it is the one that will be used in the components




---

- **middleware**
  - Software or code that acts as a middle man... and performs a necessary handle on the data before reaching its next destination 

- **thunk**
  - Basically, it is a filter to check if the dispatched action is a function or an object, if it's a function it will get executed, if it's an object it will be sent directly to the reducer



  

---

## Resources

- [Redux Toolkit (RTK)](https://redux-toolkit.js.org/)
  - [Tutorial](https://redux-toolkit.js.org/tutorials/intermediate-tutorial)

- [MobX](https://mobx.js.org/getting-started.html)

- [HookState](https://hookstate.js.org/)


  