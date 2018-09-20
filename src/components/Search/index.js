import React from "react";
import { Segment } from "semantic-ui-react";

import Heading from "./Heading";
import SearchBar from "./SearchBar";

function Search() {
  return (
    <div>
      <Segment padded attached="top">
        <Heading />
        <SearchBar />
      </Segment>
    </div>
  );
}

export default Search;
