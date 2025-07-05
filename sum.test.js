const { sum, myFunction, FetchData, fetchdatapromise } = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// Object assignment test
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

//False test
test("n is falsy", () => {
  const n = null;
  expect(n).toBeFalsy();
});
//Truthy test
test("n is truthy", () => {
  const n = 69;
  expect(n).toBeTruthy();
});

test("throws error for invalid input", () => {
  expect(() => {
    myFunction(true);
  }).toThrow();
});

//Testing Async function

test("data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }
  FetchData(callback);
});

//Testing Promise-based Async function
test("the data is peanut butter in promise", () => {
  return expect(fetchdatapromise()).resolves.toBe("peanut butter");
});
// Uncomment the following test to see it fail
// This test will fail because the promise will resolve with 'peanut butter'
// test('the fetchdatapromise fails with as error',()=>{
//   return expect(fetchdatapromise()).rejects.toThrow();
// })

// Async/Await test
test("the data is peanut butter ", async () => {
  const data = await fetchdatapromise();
  expect(data).toBe("peanut butter");
});

//mock implementation
test("mock implementation of simple function", () => {
  const mock = jest.fn((x) => 42 + x);
  expect(mock(2)).toBe(44);
  expect(mock).toHaveBeenCalledWith(2);
});
 
//spying on a function
test('spying on a method of an object',()=>{
  const video = {
    play(){
      return true;
    }
  };
  const spy =jest.spyOn(video,'play');
  video.play();
  expect(spy).toHaveBeenCalled();
  spy.mockRestore(); // Restore the original method
})