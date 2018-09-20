import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockSearch = [
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

const mockNode = {
  name: "Name",
  id: "FINGERPRINT",
  or_addr: ["000.000.000.000"],
  dir_addr: "111.111.111.111",
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

const store = mockStore({
  searchReducer: {
    isLoading: false,
    data: mockSearch
  },
  nodeReducer: {
    isLoading: false,
    data: mockNode
  }
});

export default store;
