const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE

  test("Shuffle returns an array", ()=>{
    let arrTest = shuffle(["john","joe","bob"]);
    expect(Array.isArray(arrTest)).toBe(true)

  })

  test('should return true for sorted and joined arrays', () => {
    let arrTest1=shuffle(["john","bob","joe"]);
    let arrTest2=shuffle(["bob","joe","john"]);
    expect(arrTest1.sort().join(",")===arrTest2.sort().join(",")).toBe(true);

  });

});

