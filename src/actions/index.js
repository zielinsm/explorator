import axios from "axios";

export const SEARCH_FETCH_REQUEST = "SEARCH_FETCH_REQUEST";
export const SEARCH_FETCH_SUCCESS = "SEARCH_FETCH_SUCCESS";
export const SEARCH_FETCH_FAILURE = "SEARCH_FETCH_FAILURE";

export const NODE_FETCH_REQUEST = "NODE_FETCH_REQUEST";
export const NODE_FETCH_SUCCESS = "NODE_FETCH_SUCCESS";
export const NODE_FETCH_FAILURE = "NODE_FETCH_FAILURE";

const API_ROOT = "https://onionoo.torproject.org/";

export const fetchSearch = function fetchSearchAction(detail) {
  const url = `${API_ROOT}summary?search=${detail}`;

  return dispatch => {
    dispatch({ type: "SEARCH_FETCH_REQUEST", payload: { meta: { detail } } });
    return axios
      .get(url)
      .then(response =>
        dispatch({
          type: "SEARCH_FETCH_SUCCESS",
          payload: { meta: { detail }, response }
        })
      )
      .catch(error => {
        dispatch({
          type: "SEARCH_FETCH_FAILURE",
          payload: { meta: { detail } },
          error
        });
        throw error;
      });
  };
};

export const fetchNode = function fetchNodeAction(fingerprint) {
  const url = `${API_ROOT}details?search=${fingerprint}`;

  return dispatch => {
    dispatch({
      type: "NODE_FETCH_REQUEST",
      payload: { meta: { fingerprint } }
    });
    return axios
      .get(url)
      .then(response =>
        dispatch({
          type: "NODE_FETCH_SUCCESS",
          payload: { meta: { fingerprint }, response }
        })
      )
      .catch(error => {
        dispatch({
          type: "NODE_FETCH_FAILURE",
          payload: { meta: { fingerprint } },
          error
        });
        throw error;
      });
  };
};
