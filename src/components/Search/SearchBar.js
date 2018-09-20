import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Icon, Input } from "semantic-ui-react";

class SearchBar extends PureComponent {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.onKeyPress = this.handleKeyPress.bind(this);
    this.onInputChange = this.handleChange.bind(this);
    this.performSearch = this.goToSearch.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.goToSearch();
    }
  }

  goToSearch() {
    if (this.state.value.length > 0) {
      this.context.router.history.push("/results/" + this.state.value);
    }
  }

  render() {
    return (
      <div className="SearchBar">
        <Input
          icon={
            <Icon
              name="search"
              inverted
              circular
              link
              onClick={this.performSearch}
            />
          }
          placeholder="Search..."
          fluid
          onChange={this.onInputChange}
          onKeyPress={this.onKeyPress}
        />
      </div>
    );
  }

  static contextTypes = {
    router: PropTypes.object
  };
}

export default SearchBar;
