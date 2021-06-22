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
  - Example below

    ```jsx
    export const ThemeContext = React.createContext();

    export default function App() {
      const [darkTheme, setDarkTheme] = useState(true);

      function toggleTheme() {
        setDarkTheme((prevDarkTheme) => !prevDarkTheme);
      }

      return (
        <>
          <ThemeContext.Provider value={darkTheme}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <FunctionContextComponent />
            <ClassContextComponent />
          </ThemeContext.Provider>
        </>
      );
    }
    ```

  - The context provider should wrap all the code that needs access to the context
  - In class child components, we import `{ThemeContext}` and then use `<ThemeContext.Consumer>`
  - In functional components, we use `useContext()`, such as below

    ```jsx
    import React, { useContext } from 'react';
    import { ThemeContext } from './App';

    export default function FunctionalComponent() {
      const darkTheme = useContext(ThemeContext);

      const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
      };

      return <div style={themeStyles}>Functional</div>;
    }
    ```

  - How does this look like in a class component??? Well, check it below and try not to laugh

    ```jsx
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>Classy Class</div>;
        }}
      </ThemeContext.Consumer>
    );
    ```

  - Anyway, to take this a step further, we can create a custom hook for that context and relieve the `App` component from managing the state

    ```jsx
    import React, { useContext, useState } from 'react';

    const ThemeContext = React.createContext();
    const ThemeUpdateContext = React.createContext();

    // extra custom hooks to simplify usage in components
    export function useTheme() {
      return useContext(ThemeContext)
    }

    // extra custom hooks to simplify usage in components
    export function useThemeUpdate() {
      return useContext(ThemeUpdateContext)
    }

    export function ThemeProvider({ children }) {
      const [darkTheme, setDarkTheme] = useState(true);

      function toggleTheme() {
        setDarkTheme((prevDarkTheme) => !prevDarkTheme);
      }

      return (
        <ThemeContext.Provider value={darkTheme}>
          // we created another context for the toggle button
          <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
          </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
      );
    }

    // now, our App component looks like this
    import { ThemeProvider } from './ThemeContext';

    export default function App() {
      return (
        <ThemeProvider>
          // we removed the button from here, we can add it inside components so we can update it from anywhere
          // or we can keep using the button here
          <FunctionContextComponent />
          // we removed the class component from this example, because class component suck!! 😎
        </ThemeProvider>
      );
    }

    // our function component looks like this
    import { useTheme, useThemeUpdate } from './ThemeContext';

    export default function FunctionalComponent() {
      const darkTheme = useTheme();
      const toggleTheme = useThemeUpdate();

      const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
      };

      return (
        <button onClick={toggleTheme}>Functional</button>
        <div style={themeStyles}>Functional</div>
      );
    }
    ```

- [hooks and context example](https://medium.com/swlh/snackbars-in-react-an-exercise-in-hooks-and-context-299b43fd2a2b)

- [react context links](https://github.com/diegohaz/awesome-react-context)
