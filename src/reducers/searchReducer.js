import { SEARCH_FETCH_FAILURE, SEARCH_FETCH_REQUEST, SEARCH_FETCH_SUCCESS } from '../actions';

const defaultState = {
  isLoading: false,
  data: []
};

const extract = function extractData(list) {
  const { n, f, a, r } = list;

  return {
    name: n,
    fingerprint: f,
    address: a,
    running: r
  };
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case SEARCH_FETCH_REQUEST:
      return { ...state, isLoading: true };

    case SEARCH_FETCH_SUCCESS: {
      const { relays } = action.payload.response.data;
      return { data: relays.map(extract), isLoading: false };
    }

    case SEARCH_FETCH_FAILURE:
      return { ...defaultState };

    default:
      return state;
  }
}
