import React from "react";
import { Grid, Header } from "semantic-ui-react";

import "./Tab.css";

const convertArray = function convertArrayToAString(element) {
  if (Array.isArray(element)) {
    let formatted = "";
    element.forEach(value => {
      formatted += `${value} \n`;
    });
    return formatted;
  } else {
    return element;
  }
};

const elementCheck = function checkElementForQuirks(value) {
  if (value === undefined || value === null) {
    return "Not defined";
  } else {
    return convertArray(value);
  }
};

function Tab(props) {
  const { data } = props;

  const renderRow = function renderDefaultRow(data, index) {
    const value = elementCheck(data.value);
    const { label } = data;

    return (
      <Grid.Row className="Tab__row" key={index}>
        <Header sub>{label}</Header>
        <span className="Tab__field">{value}</span>
      </Grid.Row>
    );
  };

  return data.map((element, index) => renderRow(element, index));
}

export default Tab;
