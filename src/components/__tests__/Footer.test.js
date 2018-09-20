import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Footer from "../Footer";

describe("Footer component:", () => {
  const component = <Footer />;

  it("renders without crashing", () => {
    const wrapper = shallow(component);
    expect(wrapper.find(".Footer")).toHaveLength(1);
  });

  it("snapshot matches", () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
