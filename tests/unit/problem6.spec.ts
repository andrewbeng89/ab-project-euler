const sumOfSquares = (end: number): number => {
  let result = 0;
  for (let i = 1; i <= end; i += 1) {
    result += i ** 2;
  }
  return result;
};

const squareOfsum = (end: number): number => (end * (end + 1) / 2) ** 2;

describe('Euler 6', () => {
  it('Should return 2640 as the difference between the sum of the squares of the first ten natural numbers and the square of the sum', () => {
    expect(squareOfsum(10) - sumOfSquares(10)).toBe(2640);
  });

  it('Should return 25164150 as the difference between the sum of the squares of the first hundred natural numbers and the square of the sum', () => {
    expect(squareOfsum(100) - sumOfSquares(100)).toBe(25164150);
  });
});
