import {
  NODE_FETCH_FAILURE,
  NODE_FETCH_REQUEST,
  NODE_FETCH_SUCCESS
} from "../actions";

const defaultState = {
  isLoading: false,
  data: {}
};

const extract = function extractData(node) {
  const {
    nickname,
    fingerprint,
    or_addresses,
    dir_address,
    running,
    flags,
    country_name,
    as_number,
    as_name,
    consensus_weight,
    verified_host_names,
    bandwidth_rate,
    bandwidth_burst,
    observed_bandwidth,
    advertised_bandwidth,
    exit_policy,
    exit_policy_summary,
    exit_policy_v6_summary,
    alleged_family,
    effective_family,
    contact,
    platform
  } = node;

  return {
    name: nickname,
    id: fingerprint,
    or_addr: or_addresses,
    dir_addr: dir_address,
    up: running,
    details: flags,
    country: country_name,
    as: {
      number: as_number,
      name: as_name
    },
    weight: consensus_weight,
    host: verified_host_names,
    bandwidth: {
      rate: bandwidth_rate,
      burst: bandwidth_burst,
      observed: observed_bandwidth,
      advertised: advertised_bandwidth
    },
    policy: exit_policy,
    policy_summary_v4: exit_policy_summary,
    policy_summary_v6: exit_policy_v6_summary,
    family_alleged: alleged_family,
    family_effective: effective_family,
    info: contact,
    tor: platform
  };
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case NODE_FETCH_REQUEST: {
      return { ...state, isLoading: true };
    }

    case NODE_FETCH_SUCCESS: {
      const { relays } = action.payload.response.data;
      if (relays.length === 1) {
        return {
          data: relays.map(extract)[0],
          isLoading: false
        };
      } else {
        return { ...defaultState };
      }
    }

    case NODE_FETCH_FAILURE: {
      return { ...defaultState };
    }

    default:
      return state;
  }
}
