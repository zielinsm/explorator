import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumb, Header, Loader, Segment } from "semantic-ui-react";

import { fetchSearch } from "../../actions/";
import TableElement from "./TableElement";
import "./index.css";

function Navigation() {
  return (
    <Breadcrumb className="Node__Breadcrumbs">
      <Breadcrumb.Section>
        <Link to="/">Search</Link>
      </Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section active>Results</Breadcrumb.Section>
    </Breadcrumb>
  );
}

const headerRow = [
  { label: "Name", value: "name" },
  { label: "IP", value: "ip" },
  { label: "Fingerprint", value: "fingerprint" },
  { label: "Status", value: "running" }
];

class Results extends PureComponent {
  constructor(props) {
    super(props);
    this.routeParameter = props.match.params.id;
  }

  componentDidMount() {
    const { fetchSearch } = this.props;
    if (this.routeParameter) {
      fetchSearch(this.routeParameter);
    }
  }

  renderDefaultContent(data) {
    if (data.length > 0) {
      return <TableElement results={data} headerRow={headerRow} />;
    } else {
      return (
        <Header as="h5" className="Results__no-results" textAlign="center">
          No results, try searching again...
        </Header>
      );
    }
  }

  render() {
    const { searchReducer } = this.props;
    const { data, isLoading } = searchReducer;

    if (!isLoading) {
      return (
        <div>
          <Navigation />
          <Header as="h3" attached="top" className="Results__Header">
            Showing results for "{this.routeParameter}"
          </Header>
          <Segment attached>{this.renderDefaultContent(data)}</Segment>
        </div>
      );
    } else {
      return <Loader active>Fetching data...</Loader>;
    }
  }
}

const mapState = function mapStateToProps(state) {
  const { searchReducer } = state;
  return { searchReducer };
};

export default connect(
  mapState,
  { fetchSearch }
)(Results);
