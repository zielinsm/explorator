import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Node from "./Node";
import Results from "./Results/";
import Search from "./Search/";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Search} />
      <Route path="/results/:id" component={Results} />
      <Route path="/node/:id" component={Node} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default Routes;
