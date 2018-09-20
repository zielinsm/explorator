import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import SearchBar from "../SearchBar";

describe("SearchBar component:", () => {
  let wrapper;
  const component = <SearchBar />;

  beforeEach(() => {
    wrapper = mount(component);
  });

  it("handles changes to the input", () => {
    wrapper.find("input").simulate("change", {
      target: { value: "hello" }
    });
    expect(wrapper.state("value")).toEqual("hello");
  });

  it("snapshot matches", () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
