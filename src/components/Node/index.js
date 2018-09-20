import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumb, Header, Loader, Segment } from "semantic-ui-react";

import { fetchNode } from "../../actions";
import isEmpty from "../../helpers/isEmpty";
import Information from "./Information";
import "./index.css";

function Navigation(props) {
  const { nodeName } = props;
  const resultsLink = `/results/${nodeName}`;

  return (
    <Breadcrumb className="Node__Breadcrumbs">
      <Breadcrumb.Section>
        <Link to="/">Search</Link>
      </Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section>
        Results: <Link to={resultsLink}>{nodeName}</Link>
      </Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section active>Node</Breadcrumb.Section>
    </Breadcrumb>
  );
}

function NoResults() {
  return (
    <div className="Node__no-results">
      <Header as="h5" textAlign="center">
        Such fingerprint doesn't exist. Try again.
      </Header>
    </div>
  );
}

class Node extends Component {
  constructor(props) {
    super(props);
    this.routeParameter = this.props.match.params.id;
  }

  componentDidMount() {
    const { fetchNode } = this.props;
    if (this.routeParameter) {
      fetchNode(this.routeParameter);
    }
  }

  assignSegmentColor(data) {
    if (!isEmpty(data)) {
      return data.up ? "green" : "red";
    } else {
      return "black";
    }
  }

  render() {
    const { nodeReducer } = this.props;
    const { data, isLoading } = nodeReducer;

    if (!isLoading) {
      return (
        <div>
          <Navigation nodeName={data.name} />
          <Segment color={this.assignSegmentColor(data)} className="Node">
            {!isEmpty(data) ? <Information results={data} /> : <NoResults />}
          </Segment>
        </div>
      );
    } else {
      return <Loader active>Fetching data...</Loader>;
    }
  }
}

const mapState = function mapStateToProps(state) {
  const { nodeReducer } = state;
  return { nodeReducer };
};

export default connect(
  mapState,
  { fetchNode }
)(Node);
