# Roman numerals

## Getting Started

-   Go to **/server** path in your terminal and run command **yarn dev** - this will start the server.
-   In different terminal go to **client** path and run command **yarn start** - this will start web application.
-   In your browser go to (http://localhost:3000/)
-   Type in input element number between 1-3999 and press enter or click on the arrow icon. This action will send request to the backend (http://localhost:8080/?romannumeral=<number>).
-   Server Response will be shown below with roman numerals. To copy roman numerals click on the box and it will be copied to the clipboard

## Server Side Available Scripts

In the project directory **server**, you can run:

### `yarn dev`

Runs the server app in the development mode on PORT 8080.\
Server runs on PORT 8080(http://localhost:8080) if there is .env file in the root of server directory. Otherwise runs on PORT 3001 http://localhost:3001

### `yarn watch`

Launches the typescript compiler and checks all directory ./src files and compiles into **/dist** folder

### `yarn lint`

Checks if in project is linting errors and displays in terminal.

### `yarn lint:fix`

Checks if in project is linting errors and displays in terminal and fix them.

## Client Side Available Scripts

In the project directory **client**, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner (jest) and checks all file directory.

### `yarn test:coverage`

Launches the test runner (jest) and checks all file directory with mode coverage.
You can see test reports in web browser by this path **client/coverage/lcov-report/index.html**

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn lint`

Checks if in project is linting errors and displays in terminal.

### `yarn lint:fix`

Checks if in project is linting errors and displays in terminal and fix them.
