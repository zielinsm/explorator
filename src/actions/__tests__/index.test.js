import {
  SEARCH_FETCH_REQUEST,
  SEARCH_FETCH_SUCCESS,
  NODE_FETCH_REQUEST,
  NODE_FETCH_SUCCESS
} from "../index";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { fetchSearch, fetchNode, doFetch } from "../index";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Action creators:", () => {
  it("fetchSearch", async () => {
    const expectedActions = [
      {
        type: SEARCH_FETCH_REQUEST,
        payload: { meta: { detail: "Keyword" } }
      },
      {
        type: SEARCH_FETCH_SUCCESS,
        payload: { meta: { detail: "Keyword" }, response: {} }
      }
    ];

    const getActions = jest.fn(() => {});
    const dispatch = jest.fn();

    await fetchSearch("Keyword")(dispatch, getActions);

    expect(dispatch.mock.calls[0][0]).toEqual(expectedActions[0]);
    expect(dispatch.mock.calls[1][0].payload.response).toBeInstanceOf(Object);
  });

  it("fetchNode", async () => {
    const expectedActions = [
      {
        type: NODE_FETCH_REQUEST,
        payload: { meta: { fingerprint: "Fingerprint" } }
      },
      {
        type: NODE_FETCH_SUCCESS,
        payload: { meta: { fingerprint: "Fingerprint" }, response: {} }
      }
    ];

    const getActions = jest.fn(() => {});
    const dispatch = jest.fn();

    await fetchNode("Fingerprint")(dispatch, getActions);

    expect(dispatch.mock.calls[0][0]).toEqual(expectedActions[0]);
    expect(dispatch.mock.calls[1][0].payload.response).toBeInstanceOf(Object);
  });
});
