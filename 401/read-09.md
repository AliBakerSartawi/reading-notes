# OAuth

I'm not sure what we're supposed to summarize out of this [link](https://github.com/LTUC/amman-javascript-401d6/blob/master/class-12/README.md)... it is kinda already summarized.

**OAuth** is basically a way to let the user grant access to an application to access the user's data in another server or service... such as `sign up with Google`, instead of signing up directly to the app.

The process includes...
- Prompting the user to choose the **OAuth** option 
- If the user agrees... the remote server or service will send a `code` to the app
- Then the app will contact that remote service to get a `token` instead of that temporary `code`
- Then the app can use that `token` to access the user's granted info on that remote service

## Security Benefits

The sign up process (and storing passwords) is not a lightweight liability... if an app can relieve itself from that, it would be a great plus.

That is why opting for `OAuth` is sometimes a better option than simply architect-ing a `sign up` process...

Also, it ensures users cannot spam new accounts as they like... for example, if a website is intended for programmers, using `OAuth` with `GitHub` is a great choice... their information will be migrated and their profiles will be ready in a second.

Some users actually like that... relieving them from having to create new profiles and bios and whatnot! 