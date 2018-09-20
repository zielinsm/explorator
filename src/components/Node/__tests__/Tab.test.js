import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import Tab from "../Tab";

const mockData = [
  { label: "mockLabel", value: "mockValue" },
  { label: "someLabel", value: "someLabel" }
];

describe("Tab component:", () => {
  const component = <Tab data={mockData} />;

  it("renders data passed as props", () => {
    const wrapper = mount(component);
    expect(wrapper.find(".Tab__field")).toHaveLength(2);
  });

  it("snapshot matches", () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
