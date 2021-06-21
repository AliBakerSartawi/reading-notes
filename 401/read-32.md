# Custom Hooks

- **What does a component’s lifecycle refer to?**

  - Refers to mounting, updating and unmounting

- **Why do you sometimes need to “wrap” functions in useCallback when called from within useEffect**

  - To prevent unnecessary re-renders
  - Extra: `useCallback` returns a memoized version of the callback that only changes if one of the dependencies have changed... useful for memoizing calculations of expensive functions. `useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`. [source](https://reactjs.org/docs/hooks-reference.html#usecallback)

- **Why are functional components preferred over class components?**

  - Firstly, you don't have to think about the type of the component, will it be a class, functional, stateless??? You just start with a function... that saves time
  - Secondly, functional components make for cleaner and DRYer code

- **What is wrong with the following code?**

  - useEffect is used inside a for loop, and it's not used at the top level of the function

    ```javascript
    import React, { useState, useEffect } from 'react';

    function MyComponent(props) {
      const [count, setCount] = useState(0);

      function changeCount(e) {
        setCount(e.target.value);
      }

      let renderedItems = [];

      for (let i = 0; i < count; i++) {
        useEffect(() => {
          console.log('component mount/update');
        }, [count]);

        renderedItems.push(<div key={i}>Item</div>);
      }

      return (
        <div>
          <input type="number" value={count} onChange={changeCount} />
          {renderedItems}
        </div>
      );
    }
    ```

---

- **state hook**

  - `useState` manages the state

- **effect hook**

  - `useEffect` manages lifecycle operations (and side effects) on components

- **reducer hook**
  - `useReducer` is an alternative to `useState` that returns the current state along with a dispatch function... useful for complex state and deep updates

---

## Questions

  - Is **Hash Browsing** related to **ID Scrolling**?

---

## Resources

- [custom hooks - all you need to know](https://www.telerik.com/kendo-react-ui/react-hooks-guide/#toc-custom-react-hooks)

  - Custom Hooks are JavaScript functions whose names are prefixed with the word `use` which lets us know that this function follows the rules of `hooks`
  - Custom hooks can call other hooks
  - Useful for blocks of codes that need to be used repeatedly across different locations
  - example:

    ```js
    const useDocumentTitle = (title) => {
      useEffect(() => {
        document.title = title;
      }, [title]);
    };
    ```

  - Now this custom hook can be imported and used in functional components, like this

    ```js
    function Something() {
      // do stuff

      useDocumentTitle(`You clicked ${count} times`);
      // useEffect(() => {
      //   document.title = `You clicked ${count} times`
      // });

      // return stuff
    }
    ```

- [async hooks](https://dev.to/vinodchauhan7/react-hooks-with-async-await-1n9g)

  - We cannot use `async` keyword with `useEffect` callback method. It will result in race conditions. So, we can use it in functions inside `useEffect`
  - Example

    ```js
    function useAsyncHook(param) {
      const [result, setResult] = React.useState([]);
      const [loading, setLoading] = React.useState('false');

      useEffect(() => {
        async function fetchFunc() {
          try {
            // fetch
          } catch (error) {
            // catch
          }
        }

        if (param !== '') {
          fetchFunc();
        }
      }, [param]);

      return [result, loading];
    }

    // used in component as follows
    function App() {
      const [search, setSearch] = React.useState('');
      const [query, setQuery] = React.useState('');

      const [result, loading] = useAsyncHook(query);

      // return
    }
    ```

- [useReducer Hook]()

  - Counter example rewritten with `useReducer`

    ```js
    const initialState = { count: 0 };

    function reducer(state, action) {
      switch (action.type) {
        case 'increment':
          return { count: state.count + 1 };
        case 'decrement':
          return { count: state.count - 1 };
        default:
          throw new Error();
      }
    }

    function Counter() {
      const [state, dispatch] = useReducer(reducer, initialState);
      return (
        <>
          Count: {state.count}
          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
          <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
      );
    }
    ```

  - If you return the same value from a Reducer Hook as the current state, React will bail out without rendering the children or firing effects. (React uses the `Object.is` comparison algorithm).

- [react custom hooks](https://reactjs.org/docs/hooks-custom.html)

- [use hooks](https://usehooks.com/)

  - Great custom hooks!!!! 🔥

- [hooks list](https://github.com/rehooks/awesome-react-hooks)

  - More awesome and specific hooks for all kinds of weird stuff 😎

- [10 essential react hooks](https://blog.bitsrc.io/10-react-custom-hooks-you-should-have-in-your-toolbox-aa27d3f5564d)

  - 10 more customs hooks... because... why not ¯\\_(ツ)_/¯
