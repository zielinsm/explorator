import React from "react";
import { Label, Table } from "semantic-ui-react";

import truncate from "../../helpers/truncate";
import "./RowElement.css";

const RowElement = props => {
  const data = props.row;
  const rowClick = props.rowClick;

  const onClick = function onRowClick(e) {
    const { fingerprint } = data;
    rowClick(e, fingerprint);
  };

  const renderLabel = function renderRelayLabel(status) {
    if (status) {
      return <Label color="green">Running</Label>;
    } else {
      return <Label color="red">Offline</Label>;
    }
  };

  const { name, fingerprint, address, running } = data;
  const truncatedFingerprint = truncate(fingerprint, 15);

  return (
    <Table.Row onClick={onClick} className="RowElement">
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{address[0]}</Table.Cell>
      <Table.Cell>{truncatedFingerprint}</Table.Cell>
      <Table.Cell>{renderLabel(running)}</Table.Cell>
    </Table.Row>
  );
};

export default RowElement;
