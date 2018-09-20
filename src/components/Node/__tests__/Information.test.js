import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Information from "../Information";

const mockResults = {
  name: "Nickname",
  id: "FINGERPRINT",
  or_addr: ["000.000.000.000:9000"],
  dir_addr: "000.000.000.000:9001",
  up: true,
  details: ["Mock", "Running"],
  country: "Mock",
  as: {
    number: "AS194",
    name: "Mock Networks"
  },
  weight: 10000,
  host: "mock-relay.net",
  bandwidth: {
    rate: 10000,
    burst: 10000,
    observed: 10000,
    advertised: 10000
  },
  policy: ["reject *:*"],
  policy_summary_v4: { reject: ["1-65535"] },
  policy_summary_v6: { reject: ["1-65535"] },
  family_alleged: ["ALLEGED"],
  family_effective: ["EFFECTIVE"],
  info: "Contact",
  tor: "Tor 0.3.2.10 on Mock"
};

describe("Information component:", () => {
  const component = <Information results={mockResults} />;

  it("renders without crashing", () => {
    const wrapper = shallow(component);
    expect(wrapper.find(".Information__Header")).toHaveLength(1);
  });

  it("snapshot matches", () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
