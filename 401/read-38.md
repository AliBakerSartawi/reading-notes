# Async Redux Actions

- **How granular should your reducers be?**
  - As granular as possible, too many action names and lengthy switch statements are recipe for confusion and error
  - For example, if you have a form, you shouldn't make an action for each field, one action for all the fields is sufficient mostly

- **Pro or Con – multiple reducers can “fire” when a commonly named action is dispatched**
  - It depends on the execution (implementation), it can cause errors if written poorly, or can result in clean firm code if done with caution

- **Name a strategy for preventing the above**
  - One strategy can be putting all the actions in one file, so their names and types can be compared quickly



---

- **store**
  - It is the state container in Redux. Redux can have one store in the application

- **combined reducers**
  - As the name suggests, it is simply combining multiple reducers into one, so they can be used in the Redux store


  

---

## Resources

- [async actions](https://redux.js.org/tutorials/fundamentals/part-6-async-logic)

- [thunk middleware](https://github.com/reduxjs/redux-thunk)

- [redux thunk](https://www.digitalocean.com/community/tutorials/redux-redux-thunk)

  