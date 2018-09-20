import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import store from "../../../store/mockStore";

import Node from "../index";

describe("Node container:", () => {
  let wrapper;
  const component = (
    <Provider store={store}>
      <MemoryRouter>
        <Node match={{ params: { id: "FINGERPRINT" } }} />
      </MemoryRouter>
    </Provider>
  );

  it("snapshot matches", () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
