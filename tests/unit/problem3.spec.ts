const isPrime = (n: number): boolean => {
  for (let i = 2; i < n - 1; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const nextPrime = (n: number): number => {
  let result = n + 1;
  while (!isPrime(result)) {
    result += 1;
  }
  return result;
};

const isFactor = (x: number) => (n: number) => n % x === 0;

const isPrimeFactor = (x: number) => (n: number) => isPrime(x) && isFactor(x)(n);

const largestPrime = (n: number): number => {
  let result = 2;
  for (let prime = 2; prime < n; prime = nextPrime(prime)) {
    if (isPrimeFactor(prime)(n)) {
      result = prime;
    }
  }
  return result;
};

describe('Largest prime factor', () => {
  it('Should ', () => {
    expect(largestPrime(13195)).toBe(29);
  });
});
