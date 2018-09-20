import {
  NODE_FETCH_SUCCESS,
  NODE_FETCH_REQUEST,
  NODE_FETCH_FAILURE
} from "../../actions";
import nodeReducer from "../nodeReducer";

const mockResponse = [
  {
    nickname: "Nickname",
    fingerprint: "FINGERPRINT",
    or_addresses: ["000.000.000.000:9000"],
    dir_address: "000.000.000.000:9001",
    running: true,
    flags: ["Mock", "Running"],
    country_name: "Mock",
    as_number: "AS194",
    as_name: "Mock Networks",
    consensus_weight: 10000,
    verified_host_names: "mock-relay.net",
    bandwidth_rate: 10000,
    bandwidth_burst: 10000,
    observed_bandwidth: 10000,
    advertised_bandwidth: 10000,
    exit_policy: ["reject *:*"],
    exit_policy_summary: { reject: ["1-65535"] },
    exit_policy_v6_summary: { reject: ["1-65535"] },
    alleged_family: ["ALLEGED"],
    effective_family: ["EFFECTIVE"],
    contact: "Contact",
    platform: "Tor 0.3.2.10 on Mock"
  }
];

const mockExpectedNode = {
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

describe("Node reducer", () => {
  it("should return initial state", () => {
    const action = {};
    const initialState = undefined;
    const expectedState = {
      isLoading: false,
      data: {}
    };
    expect(nodeReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle NODE_FETCH_REQUEST", () => {
    const action = {
      type: NODE_FETCH_REQUEST
    };
    const initialState = {
      isLoading: false,
      data: {}
    };
    const expectedState = {
      isLoading: true,
      data: {}
    };
    expect(nodeReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle NODE_FETCH_SUCCESS", () => {
    const action = {
      type: NODE_FETCH_SUCCESS,
      payload: {
        response: {
          data: {
            relays: mockResponse
          }
        }
      }
    };
    const initialState = {
      isLoading: true,
      data: {}
    };
    const expectedState = {
      isLoading: false,
      data: mockExpectedNode
    };

    expect(nodeReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle NODE_FETCH_FAILURE", () => {
    const action = {
      type: NODE_FETCH_FAILURE
    };
    const initialState = {
      isLoading: true,
      data: {}
    };
    const expectedState = {
      isLoading: false,
      data: {}
    };
    expect(nodeReducer(initialState, action)).toEqual(expectedState);
  });
});
