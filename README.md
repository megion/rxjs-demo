# Typescript and React (+ redux, rxjs) demo application

## Run webpack-dev-server

    $ npm start
    $ npm run dev-server-and-api # run devServer and start API server

Open demo page: [http://localhost:9000/module_1.html](http://localhost:9000/module_1.html)

## Build for development and watch

Webpack use ts-loader for transpile ts files (babel is not used)
\$ npm dev

## Build for production

    $ npm run prod

## Run tests

Jest use babel for transpile ts files

    $ npm t

## Upgrade all packages

    $ npx npm-check-updates -u
    $ npm install
