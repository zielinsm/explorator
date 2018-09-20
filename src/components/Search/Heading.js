import React from "react";
import { Header } from "semantic-ui-react";

import "./Heading.css";

function Heading() {
  return (
    <div className="Heading">
      <Header as="h2" textAlign="center">
        exploraTor
        <Header.Subheader>Find and discover Tor nodes.</Header.Subheader>
      </Header>
    </div>
  );
}

export default Heading;
