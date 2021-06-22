# Context API

- **Describe use cases for useMemo() and useReducer()**
  - `useMemo()` is can be used to memorize the output of functions, useful for costly functions
  - `useReducer()` is good for application with complex state management needs and for deep updates because it sends a dispatch instead of a callback 

- **Why do custom hooks need the use prefix?**
  - Firstly, for us to know that it is a hook
  - Secondly, React seems to throw an error if the name doesn't start that way 🤷

- **What do custom hooks usually do?**
  - Get rid of redundancy... and offer cleaner code

- **Using any list of custom hooks, research and name one that you think will be useful in your applications**
  - Custom hooks that offer **db** & **localStorage** actions (getting and setting)

- **Describe how a hook that fetches API data might work**
  - The hook will have functions inside of it, each function for a certain method for example, the hook will return an array of these functions so they can be used
  - The proper arguments should be passed to both the hook and the returned functions


---

- **reducer**
  - A reducer is a function that determines changes to an application's state. It uses the action it receives to determine this change. We have tools, like Redux, that help manage an application's state changes in a single store so that they behave consistently. [source](https://css-tricks.com/understanding-how-reducers-are-used-in-redux/#:~:text=A%20reducer%20is%20a%20function,so%20that%20they%20behave%20consistently.)

---

## Resources

- [context api](https://reactjs.org/docs/context.html)
  - Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.



- [hooks and context example]()
  - 

- [react context links]()
  - 

