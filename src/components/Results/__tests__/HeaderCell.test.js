import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import HeaderCell from "../HeaderCell";

const mockData = { label: "mockCell", key: 1, value: "mockValue" };

describe("Tab component:", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<HeaderCell cell={mockData} />);
    expect(wrapper.find(".HeaderCell")).toHaveLength(1);
  });

  it("handles clicks properly", () => {
    const clickHandler = jest.fn();
    const wrapper = shallow(
      <HeaderCell cell={mockData} cellClick={clickHandler} />
    );
    wrapper.find(".HeaderCell").simulate("click");
    expect(clickHandler).toBeCalled();
  });

  it("snapshot matches", () => {
    const tree = renderer.create(<HeaderCell cell={mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
