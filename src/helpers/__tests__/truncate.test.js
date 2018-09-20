import truncate from "../truncate";

describe("truncate helper:", () => {
  it("doesn't truncate a string above the limit", () => {
    const shortString = "mockString";
    expect(truncate(shortString, 10)).toEqual("mockString");
  });

  it("truncates strings above the limit", () => {
    const longString = "longMockString";
    expect(truncate(longString, 10)).toEqual("longM(...)");
  });
});
