# Focused Labs Knowledge Base Demo · https://chat.withfocus.com/

This sample project is the UI (frontend) for a domain specific AI Knowledge Base using Focused Labs as
the example.

The core logic of the application lives in [backend repository](https://github.com/focused-labs/knowledge-base-demo).

## Why?

#### Why build this? Why does this matter?

- AI driven solutions will empower organizations to build on top of existing infrastructure and unlock legacy
- Customized AI ChatBots accelerate product development by making disparate and complex information easy to find
- Unblock teams to focus on what matters - building working software - rather than chasing down people and documentation

## What?

#### What is in this repository?

A React Typescript codebase that demonstrates the features in a domain specific AI Knowledge Base.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

### `npm run lint`

Shortcut for running `eslint ./ --ignore-path .gitignore`

Runs and lists warnings and errors found by eslint.

### `npm run fixlint`

Shortcut for running `npm run lint -- --fix`

Runs and fixes warnings and (some) errors found by eslint.

## Linting/Formatting

* These instructions apply for IntelliJ. Consult other tutorials if you are using another IDE.

#### ESLint

- To enable eslint, go to IntelliJ's `Settings`
- Search for `eslint`
- Enable Automatic ESLint configuration
- Click Apply and Ok

#### Prettier

- To enable prettier, go to IntelliJ's `Settings`
- Search for `prettier`
- Select the package that is in your project directory (ex: `<your path here>/<project name>/node_modules/prettier`)
- Select the `Run on Reformat Code action`
- Click Apply and Ok
