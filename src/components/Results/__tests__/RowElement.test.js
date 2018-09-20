import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import RowElement from "../RowElement";
import { Table } from "semantic-ui-react";

const mockData = {
  name: "mockRelay",
  address: ["000.000.000.000:9001"],
  fingerprint: "LONGFINGERPRINT",
  running: true
};

describe("RowElement component:", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<RowElement row={mockData} />);
    expect(wrapper.find(".RowElement")).toHaveLength(1);
  });

  it("handles clicks properly", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<RowElement row={mockData} rowClick={onClick} />);
    wrapper.find(".RowElement").simulate("click");
    expect(onClick).toBeCalled();
  });

  it("snapshot matches", () => {
    const tree = renderer.create(<RowElement row={mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
