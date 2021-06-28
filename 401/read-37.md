# Combined Reducers

- **Why choose Redux instead of the Context API for global state?**
  - Better for managing huge applications with complex state management
  - Suitable for eliminating unnecessary rendering 

- **What is the purpose of a reducer?**
  - The reducer takes a state and an action and returns a new state

- **What does an action contain?**
  - An object that has the type of the action and any necessary payload

- **Why do we need to copy the state in a reducer?**
  - In order to avoid mutating the state directly, since the state is read-only anyway



---

- **immutable state**
  - Means that it read-only, to ensure that it only changes through actions in reducers

- **time travel in redux**
  - Time travel debugging is stepping forward and backward in the state of the application to understand what is happening in the app's lifecycle

- **action creator**
  - A function that returns the action object

- **reducer**
  - A function that takes in state and actions and returns the new state

- **dispatch**
  - A function that triggers the action that changes that state in the reducer

  

---

## Resources

- [Multiple Reducers Example](https://www.youtube.com/watch?v=gBER4Or86hE)

- [Redux Docs: Using Combined Reducers](https://redux.js.org/recipes/structuring-reducers/using-combinereducers/)

- [Redux Docs: Combined Reducer Syntax](https://redux.js.org/api/combinereducers/)

  