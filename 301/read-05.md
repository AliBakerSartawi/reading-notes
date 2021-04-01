## HEROKU

This was a tutorial deployed a **Node.js** app to **Heroku**.

To deploy an app, install **Heroku** then login, then `cd` to the `repo` directory... then write the following commands...

```
$ heroku create 
```

A random name will be generated for the app, then `push`.
```
$ git push heroku main 
```

The app is now deployed, to make sure at least one instance is running...
```
$ heroku ps:scale web=1
```

Then visit the app by typing...
```
$ heroku open
```

The app will automatically open in browser, or a link will be displayed in the terminal... copy and paste to open manually in browser.

To view logs...
```
$ heroku logs --tail
```

Press `control+c` to exit logs.

---

### Links
- [Getting started on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#view-logs)

- [Deploying a Simple Blog to Heroku](https://howtonode.org/deploy-blog-to-heroku)

