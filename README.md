Once you've cloned this repository you need to do the following to run it:

```
cd 47-express-example
npm install
node index.js
```

### Why not `npm install express`?

Because when you run `npm install` alone without specifying a package name, npm will look for the dependencies defined in `dependencies` in your `package.json`. In this case it will find `express` there so it will know what you need. Cool, right!?
