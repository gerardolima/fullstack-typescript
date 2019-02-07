# FAST FullStack React with TypeScript starter kit.

<img src="https://github.com/gerardolima/fullstack-typescript/raw/master/assets/images/logo.png" width="150">

---

### Directory Layout

```
.
├── /node_modules/          # 3rd-party libraries and utilities
├── /dist/                  # All the generated files will go here, and will run from this folder
├── /src/                   # The source code of the application
│   ├── /client/            # React app
│   ├── /server/            # Express server app
│   ├── /shared/            # The shared code between the client and the server
├── /assets/                # images, css, jsons etc.
├── .babelrc                # babel configuration
├── .gitignore              # ignored git files and folders
├── .nvmrc                  # Force nodejs version
├── package.json            # The list of 3rd party libraries and utilities
└── tslint.json             # TypeScript linting configuration file
├── README.md               # This file
```

### Usage

- `npm run dev` - Client and server are in watch mode with source maps, opens [http://localhost:3000](http://localhost:3000)
- `npm run test` - Runs jest tests
- `npm run cover` - Runs jest coverage tests
- `npm run build` - `dist` folder will include all the needed files, both client (Bundle) and server.
- `npm start` - Just runs `node ./dist/server/server.js`

#### ENV
- NODE_ENV=development
- PORT=3000
- DEV_PORT=8080

### What's included

- [React v16](https://facebook.github.io/react/)
- [React router v4](https://github.com/ReactTraining/react-router)
- [Material-ui](https://github.com/mui-org/material-ui)
- [Jest](https://github.com/facebook/jest)
- [Css modules](https://github.com/css-modules/css-modules)
- [Axios](https://github.com/mzabriskie/axios) (For Client/Server communication)
