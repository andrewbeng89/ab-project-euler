const multiplesOf3and5 = (n: number) => {
  const numbers = Array.from({ length: n }, (v, k) => k);
  return numbers.reduce((acc, i) => (
    (i % 3 === 0 || i % 5 === 0)
      ? acc + i
      : acc
  ), 0);
};

describe('Multiples of 3 and 5', () => {
  it('Should find the sum of all the multiples of 3 or 5 below 1000.', () => {
    expect(multiplesOf3and5(10)).toBe(23);
    expect(multiplesOf3and5(100)).toBe(2318);
  });
});
