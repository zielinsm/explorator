import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import TableElement from "../TableElement";

const mockResults = [
  {
    name: "mockNode",
    fingerprint: "MOCKNODE",
    address: "000.000.000.000",
    running: true
  },
  {
    name: "mockRelay",
    fingerprint: "MOCKRELAY",
    address: "000.000.000.000",
    running: true
  }
];

const headerRow = [
  { label: "Name", value: "name" },
  { label: "IP", value: "ip" },
  { label: "Fingerprint", value: "fingerprint" },
  { label: "Status", value: "running" }
];

describe("TableElement component:", () => {
  let wrapper;
  const component = (
    <TableElement results={mockResults} headerRow={headerRow} />
  );

  beforeEach(() => {
    wrapper = mount(component);
  });

  it("renders without crashing", () => {
    expect(wrapper.find(".TableElement")).toHaveLength(1);
  });

  it("sets the right amount of pages to render", () => {
    expect(wrapper.instance().totalPages).toEqual(1);
  });

  it("sets the right amount of pages to render", () => {
    expect(wrapper.instance().totalPages).toEqual(1);
  });

  it("responds to changes in sorting", () => {
    wrapper.instance().handleSortChange({}, "fingerprint");
    expect(wrapper.state("sort")).toEqual("fingerprint");
  });

  it("responds to changes in pagination", () => {
    wrapper.instance().handlePaginationChange({}, { activePage: 4 });
    expect(wrapper.state("activePage")).toEqual(4);
  });

  it("snapshot matches", () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
