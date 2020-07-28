# ES6 Express Starter Kit
----


This is a simple boilerplate to start working with an Express server right away. [Babel CLI](https://babeljs.io/docs/usage/cli/) does all the magic, compiling ES6 to standard JS. No more difference in syntax between the front-end (e.g React, Redux, etc.) and the back-end.

[![node](https://img.shields.io/badge/babel%20cli-v7.10.5-f5da55.svg)](http://babeljs.io/docs/usage/cli/)
[![node](https://img.shields.io/badge/express-v4.17.1-lightgrey.svg)](http://expressjs.com/)
[![node](https://img.shields.io/badge/jest-v26.1.0-15c213.svg)](https://jestjs.io/)
[![node](https://img.shields.io/badge/eslint-v7.5.0-463fd4.svg)](http://eslint.org/)
[![node](https://img.shields.io/badge/nodemon-v2.0.4-76d04b.svg)](https://nodemon.io/)
[![node](https://img.shields.io/badge/pm2-v4.4.0-5fd0eb.svg)](https://github.com/Unitech/pm2)


## Technologies & Packages

| Package | Repo |
| ------ | ------ |
| Babel CLI | http://babeljs.io/docs/usage/cli/ |
| Babel Eslint | https://github.com/babel/babel-eslint |
| body-parser | https://github.com/expressjs/body-parser |
| Eslint | https://github.com/eslint/eslint |
| Express | https://github.com/expressjs/express |
| Jest | https://jestjs.io/ |
| Node | https://github.com/nodejs/node |
| Nodemon | https://github.com/remy/nodemon |
| PM2 | https://github.com/Unitech/pm2 |
| Rimraf | https://github.com/isaacs/rimraf |
| Supertest | https://github.com/visionmedia/supertest |
| Yarn | https://github.com/yarnpkg/yarn/ |

## Installation
----
Install the dependencies and devDependencies.
```
yarn
```

## Development
----
Start working on the project.
```
yarn start
```

Go to [`http://localhost:3000/`](localhost:3000). The terminal should provide a notification with a successful message. `Nodemon` is listening for changes and the server will restart automatically anytime a file is saved.

## Test
Write test cases using [https://jestjs.io/](Jest) and [https://github.com/visionmedia/supertest#readme](Supertest).
```
yarn test
```

Or if you want to watch for file changes while testing
```
yarn test:watch
```

## Build
----
Compile all ES6 files inside `src` folder to standard js.
```
yarn prod-build
```
A new `lib` directory will be placed at the root project. Before compiling, this command uses `rimraf` to remove the `lib` folder (if it has already been created).

## Production
----
Start the production server.
```
yarn prod-start
```
A node enviroment variable will be set as production `NODE_ENV=production` and `pm2` will start `pm2 start lib/server` and stream logs `pm2 logs` for the node server.


Stop the server with
```
yarn prod-stop
```
`pm2 delete server` will clean up and delete the app from the `pm2` list.

## Deploy
----
Change the `ecosystem.json` in the root to configure a deployment environment.
```
deploy : {
    production : {
        user : "deploy",
        host : "IP_OR_DOMAIN",
        ref  : "origin/master",
        repo : "link_of_your_repo",
        path : "path_to_folder_of_your_remote_server",
        "post-deploy" : "nvm install && yarn install && pm2 startOrRestart ecosystem.json --env production"
    }
}
```
Set up the app folders and everything else needed with
```
pm2 deploy production setup
```

Then deploy your node app with
```
pm2 deploy production
```

Ensure the code is committed before deployment otherwise `pm2` will fail to deploy outputting this error `commit or stash your changes before deploying`.

Read more about how to create deploy strategies with `pm2` on their official documentation [http://pm2.keymetrics.io/docs/usage/deployment/](http://pm2.keymetrics.io/docs/usage/deployment/)

## Contribute
----
Feeling generous enough to give away some of your code - or something I've done bugging you? Either way, send a pull request!

## License
----

MIT
