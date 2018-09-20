import React, { Component } from "react";
import arraySort from "array-sort";
import PropTypes from "prop-types";
import { Grid, Pagination, Table } from "semantic-ui-react";

import HeaderCell from "./HeaderCell";
import RowElement from "./RowElement";
import "./TableElement.css";

class TableElement extends Component {
  constructor(props) {
    super(props);
    this.data = props.results;
    this.perPage = props.perPage || 10;
    this.headerRow = props.headerRow;
    this.totalPages = Math.ceil(this.data.length / this.perPage);

    this.onSortChange = this.handleSortChange.bind(this);
    this.onRowClick = this.handleRowClick.bind(this);

    this.state = {
      data: this.data,
      activePage: 1,
      sort: "name",
      sortAscending: true
    };
  }

  pagination(data, activePage, perPage) {
    const finalElement = activePage * perPage;
    return data.slice(finalElement - perPage, finalElement);
  }

  sortData(data, column, sortAscending) {
    if (sortAscending) {
      return arraySort(data, column);
    } else {
      return arraySort(data, column, { reverse: true });
    }
  }

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

  handleRowClick(e, fingerprint) {
    this.context.router.history.push("/node/" + fingerprint);
  }

  handleSortChange = (e, column) => {
    if (this.state.sort === column) {
      const opposite = !this.state.sortAscending;
      this.setState({ sortAscending: opposite });
    } else {
      this.setState({ sort: column });
    }
  };

  renderHeaderCell(data, index, handler) {
    return <HeaderCell cell={data} cellClick={handler} key={index} />;
  }

  renderBodyRow(data, handler) {
    return <RowElement key={data.fingerprint} row={data} rowClick={handler} />;
  }

  renderPagination(current, total, handler) {
    if (total > 1) {
      return (
        <Grid centered className="TableElement__pagination">
          <Pagination
            size="mini"
            activePage={current}
            totalPages={total}
            onPageChange={handler}
          />
        </Grid>
      );
    } else return null;
  }

  render() {
    const sorted = this.sortData(
      this.data,
      this.state.sort,
      this.state.sortAscending
    );
    const page = this.pagination(sorted, this.state.activePage, this.perPage);

    return (
      <div className="TableElement">
        <Table selectable>
          <Table.Header>
            <Table.Row>
              {this.headerRow.map((cell, index) =>
                this.renderHeaderCell(cell, index, this.onSortChange)
              )}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {page.map(row => this.renderBodyRow(row, this.onRowClick))}
          </Table.Body>
        </Table>
        {this.renderPagination(
          this.state.activePage,
          this.totalPages,
          this.handlePaginationChange
        )}
      </div>
    );
  }

  static contextTypes = {
    router: PropTypes.object
  };
}

export default TableElement;
