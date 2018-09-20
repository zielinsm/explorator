import React from "react";
import { shallow } from "enzyme";

import App from "../App";

describe("App component:", () => {
  const component = <App />;

  it("renders without crashing", () => {
    const wrapper = shallow(component);
    expect(wrapper.find(".App__content")).toHaveLength(1);
  });
});
