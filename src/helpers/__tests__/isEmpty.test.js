import isEmpty from "../isEmpty";

describe("isEmpty helper:", () => {
  it("returns 'true' when passed an empty object", () => {
    const emptyObject = {};
    expect(isEmpty(emptyObject)).toEqual(true);
  });

  it("returns 'false' when passed a non-empty object", () => {
    const object = {
      key: "mockValue"
    };
    expect(isEmpty(object)).toEqual(false);
  });
});
