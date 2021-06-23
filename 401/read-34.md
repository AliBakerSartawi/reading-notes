# `<Login />` & `<Auth />`

- **Why is the Context API useful?**

  - Because when using it, there is no need to keep drilling props in each level of the tree

- **Can a component outside of a provider get its context?**

  - Logically, I would say no

- **What are some common use cases for using the Context API?**

  - Sharing state across different levels of the component tree

- **Describe “Context Hell”**
  - Too many nested providers with some nasty indentation 😅... It has some nice fixes though such as `React.cloneElement` [source](https://dev.to/alfredosalzillo/the-react-context-hell-7p4)

---

- **global state**

  - State that needs to be defined at the application level, to be accessible anywhere down the tree

- **global context**

  - State that is provided (with context) at the global level

- **provider**

  - A component that provides state to all its children

- **consumer**
  - A component (child) that can read the state from the provider

---

## Resources

- [what is role based access control?](https://digitalguardian.com/blog/what-role-based-access-control-rbac-examples-benefits-and-more)

- [react-cookies library](https://www.npmjs.com/package/react-cookies)

  - `npm i react-cookies`

    ```js
    import cookie from 'react-cookies'

    class MyApp extends Component {
      constructor() {
        super();

        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
      }

      componentWillMount() {
        this.state = { userId: cookie.load('userId') };
      }

      onLogin(userId) {
        this.setState({ userId });
        cookie.save('userId', userId, { path: '/' });
      }

      onLogout() {
        cookie.remove('userId', { path: '/' });
      }

      render() {
        const { userId } = this.state;

        if (!userId) {
          return <LoginPanel onSuccess={this.onLogin} />;
        }

        return <Dashboard userId={userId} />;
      }
    }
    ```

  - Use `/` as the path if you want your cookie to be accessible on all pages

- [react-cookie component](https://www.npmjs.com/package/react-cookie)
  - `npm i react-cookie`
  - `<CookiesProvider />`
  - `const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);`
  - If no cookie name is provided to the above hook, it will re-render on every cookie change (cookie name in the hook is considered a dependency)
  - `cookies` is an object, the keys are the cookie names
  - `setCookie(name, value, [options])`
  - `removeCookie(name, [options])`

    ```js
    // Root.jsx
    import React from 'react';
    import App from './App';
    import { CookiesProvider } from 'react-cookie';
    
    export default function Root() {
      return (
        <CookiesProvider>
          <App />
        </CookiesProvider>
      );
    }

    // App.jsx
    import React from 'react';
    import { useCookies } from 'react-cookie';
    
    import NameForm from './NameForm';
    
    function App() {
      const [cookies, setCookie] = useCookies(['name']);
    
      function onChange(newName) {
        setCookie('name', newName, { path: '/' });
      }
    
      return (
        <div>
          <NameForm name={cookies.name} onChange={onChange} />
          {cookies.name && <h1>Hello {cookies.name}!</h1>}
        </div>
      );
    }
    
    export default App;
    ```