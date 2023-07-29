const shuffle = require("../src/shuffle");

describe("shuffle should return an array", () => {
  // CODE HERE

  test("Shuffle", ()=>{
    let arrTest = shuffle(["john","joe","bob"]);
    expect(Array.isArray(arrTest)).toBe(true)

  })
});

describe('shuffle should return the same elements in possibly a different order', () => {
  test('should return true for sorted and joined arrays', () => {
    let arrTest1=shuffle(["john","bob","joe"]);
    let arrTest2=shuffle(["bob","joe","john"]);
    expect(arrTest1.sort().join(",")===arrTest2.sort().join(",")).toBe(true);

  });

});

