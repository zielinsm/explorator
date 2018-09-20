import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import configureStore from "../store/configureStore";
import Footer from "./Footer";
import Routes from "./Routes";
import "./App.css";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Grid className="App__container">
            <Grid.Row centered verticalAlign="middle">
              <Grid.Column className="App__content">
                <Router>
                  <Routes />
                </Router>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
