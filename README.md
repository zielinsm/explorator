# exploraTor

![Project screenshot](https://raw.githubusercontent.com/zielinsm/explorator/master/capture.png)

React-based app to help users find and dicover Tor nodes.

---

#### Features and details
  - The app is using [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [React-Router](https://www.npmjs.com/package/react-router) (shareable links to results and particular nodes!)
  - Unit testing implemented using [Jest](https://jestjs.io/) and [Jest-Enzyme](https://www.npmjs.com/package/jest-enzyme)
  - UI built around [Semantic UI React](https://react.semantic-ui.com/)
  - Mobile-friendly
  - Sortable results

#### Usage and development
exploraTor was bootstraped using [create-react-app](https://www.npmjs.com/package/create-react-app).

There are two main scripts you want to use when either building or further developing the project. To compile the app and create a production build, use `npm run build`. Starting a development server is as simple as typing `npm start`. Tests can be triggered using `npm test`. For more information you should refer to create-react-app's *[Usage Guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)*.

---

#### Notes

I wanted to create a fully functional, similar project to Tor's [relay search](https://metrics.torproject.org/rs.html).

There are still features I want to add to the project like bandwidth/consensus weight graphs. If you have any ideas, please don't hesitate to open an issue or send in a PR.
