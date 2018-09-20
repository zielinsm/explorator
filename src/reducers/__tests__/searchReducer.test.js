import {
  SEARCH_FETCH_REQUEST,
  SEARCH_FETCH_SUCCESS,
  SEARCH_FETCH_FAILURE
} from "../../actions";
import searchReducer from "../searchReducer";

const mockResponse = [
  {
    n: "Name",
    f: "Fingerprint",
    a: "000.000.000.000",
    r: true
  }
];

const mockExpectedSearch = [
  {
    name: "Name",
    fingerprint: "Fingerprint",
    address: "000.000.000.000",
    running: true
  }
];

describe("Search reducer", () => {
  it("should return initial state", () => {
    const action = {};
    const initialState = undefined;
    const expectedState = {
      isLoading: false,
      data: []
    };
    expect(searchReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SEARCH_FETCH_REQUEST", () => {
    const action = {
      type: SEARCH_FETCH_REQUEST
    };
    const initialState = {
      isLoading: false,
      data: []
    };
    const expectedState = {
      isLoading: true,
      data: []
    };
    expect(searchReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SEARCH_FETCH_SUCCESS", () => {
    const action = {
      type: SEARCH_FETCH_SUCCESS,
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
      data: []
    };
    const expectedState = {
      isLoading: false,
      data: mockExpectedSearch
    };

    expect(searchReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SEARCH_FETCH_FAILURE", () => {
    const action = {
      type: SEARCH_FETCH_FAILURE
    };
    const initialState = {
      isLoading: true,
      data: []
    };
    const expectedState = {
      isLoading: false,
      data: []
    };
    expect(searchReducer(initialState, action)).toEqual(expectedState);
  });
});
