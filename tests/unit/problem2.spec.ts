const fibonacci = (n: number): number => {
  if (n > 0 && n < 3) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const sumEvenFibonacci = (n: number): number => {
  let result = 0;
  let i = 1;
  let fib = 0;
  while (fib <= n) {
    if (fib % 2 === 0) {
      result += fib;
    }
    i += 1;
    fib = fibonacci(i);
  }
  return result;
};

describe('Even Fibonacci numbers', () => {
  it('Should find the sum of the even-valued fibonacci terms', () => {
    expect(sumEvenFibonacci(10)).toBe(10);
    expect(sumEvenFibonacci(100)).toBe(44);
  });
});
