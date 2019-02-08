# FAST FullStack React with TypeScript starter kit.

<img src="https://github.com/gerardolima/fullstack-typescript/raw/master/assets/images/logo.png" width="150">

---

### Usage

- `npm run dev` - Client and server are in watch mode with source maps, opens [http://localhost:3000](http://localhost:3000)
- `npm run test` - Runs jest tests
- `npm run cover` - Runs jest coverage tests
- `npm run build` - `dist` folder will include all the needed files, both client (Bundle) and server.
- `npm start` - Just runs `node ./dist/server/server.js`

### Directory Layout

```
.
├── /node_modules/          # 3rd-party libraries and utilities
├── /dist/                  # All the generated files will go here, and will run from this folder
├── /src/                   # The source code of the application
│   ├── /client/            # React app
│   ├── /server/            # Express server app
│   ├── /shared/            # The shared code between the client and the server
├── /assets/                # images, css, json etc.
├── .gitignore              # ignored git files and folders
├── package.json            # The list of 3rd party libraries and utilities
├── tsconfig.json           # TypeScript compiler settings
├── tsconfig.test.json      # TypeScript compiler settings (optimized for tests)
├── tslint.json             # TypeScript linting configuration file
├── webpack.config.ts       # Bundler for the client-side application
├── README.md               # This file
└── .env                    # use this file to set values to the env variables
```

#### ENV
The following environment variables are used by the application and/or by the
build process:
- NODE_ENV=development
- PORT=3000
- DEV_PORT=8080

These variables can be set at the `.env` file, but this file should **not** be
be committed into the repository

### What's included

- [React v16](https://facebook.github.io/react/)
- [React router v4](https://github.com/ReactTraining/react-router)
- [Material-ui](https://github.com/mui-org/material-ui)
- [Jest](https://github.com/facebook/jest)
- [Css modules](https://github.com/css-modules/css-modules)
- [Axios](https://github.com/mzabriskie/axios) (For Client/Server communication)
