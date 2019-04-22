export const isPrime = (n: number): boolean => {
  for (let i = 2; i < n - 1; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

export const nextPrime = (n: number): number => {
  let result = n + 1;
  while (!isPrime(result)) {
    result += 1;
  }
  return result;
};

export const isFactor = (x: number) => (n: number) => n % x === 0;

export const primeFactors = (n: number): number[] => {
  let result: number[] = [];

  let prime = 2;
  let test = n;
  while (test !== 1) {
    if (test % prime === 0) {
      result = [...result, prime];
      test /= prime;
    } else {
      prime = nextPrime(prime);
    }
  }

  return result;
};

const largestPrime = (n: number): number => {
  const pf = primeFactors(n);
  return Number(pf.pop());
};

describe('Largest prime factor', () => {
  it('Should ', () => {
    expect(largestPrime(13195)).toBe(29);
    expect(largestPrime(600851475143)).toBe(6857);
  });
});
