# bank-of-react-example-code-gh-pages
This repository contains a React application example on how to implement client-side routing with React Router and its components including Route, Router Link, and Redirect.

### Use the following commands to run the application

- First, run this command to install dependencies:
```npm install```
- Next, run this command to start the React application:
```npm start```

Note: This application uses React Router version 5 and should be compatible with later versions of React Router. 
If you encounter problems with a later version of React Router, you can specifically install React Router version 5 using the following command:
```npm install react-router-dom@5.3.0 react-router@5.2.1```

### Live Link 
[Website link](https://johnnylaicode.github.io/bank-of-react-example-code-gh-pages/)

----------
### Use the following steps to set up and deploy a React application to GitHub Pages
#### 1. Create a React Application
1. If you don't already have an existing React application on your local machine, you can create a new React application (e.g., "my-react-app").

  Optionally, you can clone the "bank-of-react-example-code-gh-pages" repository to your local machine and re-name it "my-react-app."
2. Start a terminal (e.g., Git Bash) on your local machine.
3. Go into the "my-react-app" folder.
4. All the following steps are performed inside the "my-react-app" folder. 

#### 2. Add "basename" to Router Tag in "App.js" File
1. In the `App.js` file, located inside the `src` folder, make sure that you add the `basename` path in the `<Router>` tag using the format: `<Router basename="/[repository name]">`
2. For the "my-react-app" application, it should be: `<Router basename="/my-react-app">`

#### 3. Install "gh-pages" Package
1. Install the `gh-pages` package on your local machine by entering the following command in the terminal: `npm install gh-pages --save-dev`
2. The installation automatically adds the `gh-pages` version number in the "dependencies" section of the `package.json` file.

#### 4. Add "homepage" Property in "package.json" File
1. In the `package.json` file, add a `homepage` property using the format: `https://[your GitHub username].github.io/[repository name]`
2. For the "my-react-app" application, it should be:`"homepage": "https://[your GitHub username].github.io/my-react-app/",` 
    ```
    {
    "name": "bank-of-react",
    "version": "0.1.0",
    "homepage": "https://[your GitHub username].github.io/my-react-app/",
    ...
    }
    ```

#### 5. Add Deployment Scripts in "package.json" File
1. In the `package.json` file, add `predeploy` and `deploy` properties to the "scripts" section as follows:
    ```
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
    ...
    ```

#### 6. Add "remote" to Local Repository Pointing to GitHub Repository
1. Add a `remote` to the local repository by entering the following command in the terminal, using the format: `git remote add origin https://github.com/[your GitHub username]/[repository name].git`
2. For the "my-react-app" application, it should be:`git remote add origin https://github.com/[your GitHub username]/my-react-app.git` 

#### 7. Deploy React Application to GitHub Pages
1. Deploy the "my-react-app" application to GitHub Pages by entering the following command in the terminal: `npm run deploy`
2. Open a web browser, go to the following address to see your React application on GitHub Pages: `https://[your GitHub username].github.io/my-react-app/` 
