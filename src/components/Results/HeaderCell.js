import React from "react";
import { Table } from "semantic-ui-react";

import "./HeaderCell.css";

const HeaderCell = props => {
  const { label, key, value } = props.cell;
  const { cellClick } = props;

  const onClick = function onCellClick(e) {
    cellClick(e, value);
  };

  return (
    <Table.HeaderCell onClick={onClick} className="HeaderCell" key={key}>
      {label}
    </Table.HeaderCell>
  );
};

export default HeaderCell;
