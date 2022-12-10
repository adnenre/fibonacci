import fibonacci from "./index.js";

describe("fibonacci ", () => {
 
  test("generates the correct Fibonacci sequence up to n", () => {
    try{
      expect(fibonacci(-1))
    } catch(e:any){
      expect(e.message).toBe('n must be positive !')
    }
   
    expect(fibonacci(0)).toEqual([0]);
    expect(fibonacci(1)).toEqual([0,1]);
    expect(fibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8,13]);
    expect(fibonacci(9)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21,34]);
    expect(fibonacci(20)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181, 6765
    ]);
  });
});
