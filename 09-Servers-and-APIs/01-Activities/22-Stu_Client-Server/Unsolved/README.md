# Add Comments to Implementation of the Client-Server Model

## Root-level Functionality

* TODO: Explain what each script does in the root-level `package.json` file:

```json
 "scripts": {
   // builds the client application by running the client:build script, and then starts the server -run server
    "start": "npm run client:build && npm run server",
    //concurrently package to run both the server and client in development mode simultaneously.
   "start:dev": "concurrently \"npm run server:dev\" \"wait-on tcp:3001 && npm run client:dev\"",

    "server": "cd server && npm start",
    "server:dev": "cd server && npm run dev",
//      This script navigates to the server directory and installs its dependencies using npm install, then moves back to the root directory and installs dependencies for the client application.
// Use Case: Provides a convenient way to install all necessary dependencies for both the server and client applications in one command.
    "install": "cd server && npm i && cd ../client && npm i",
    // Functionality: This command changes the directory to client and runs the build script defined in the client's package.json, which typically compiles the client application for production.
    "client:build": "cd client && npm run build",
    "client:dev": "cd client && npm run dev",
    "build": "cd client && npm run build"
  },
```

## Client-side Functionality

* TODO: Explain the following rule from the client-side `client/tsconfig.json` file:

```json
  {
  "extends": "../tsconfig.json"
}
```

## Server-side Functionality

* TODO: Explain what each rule does in the server-side `server/tsconfig.json` file:

```json
{
    "extends": "../tsconfig.json",//INHERITS PRPORTY FROM TS CONGIF IN THE ROOT DIR
    "compilerOptions": {
      /* Modules */
      "rootDir": "src" /* Specify the root folder within your source files. */,
  
      /* Emit */
      "outDir": "dist" /* Specify an output folder for all emitted files. */
    },
    "include": ["src"]
  }
  
```
* TODO: Add a comment describing the functionality in the following code block from the `server/src/server.ts` file:
 This route handles all GET requests that do not match any other defined routes. 
// It serves the `index.html` file from the client's `dist` directory, 
// allowing client-side app to handle routing 

```js
/ This route captures all GET requests that are not handled by previous routes. 
// It serves the `index.html` file from the `client/dist` directory, enabling the client-side 
// application to take over routing and rendering, which is typical in single-page applications (SPAs).

    app.get('*', (_req, res) => {
        res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
    });
```