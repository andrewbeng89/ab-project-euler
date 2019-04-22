import { nextPrime, isPrime, primeFactors } from './problem3.spec';

const productOfPrimes = (end: number): number => {
  let prime = 2;
  let primes = [prime];

  while (prime < end) {
    prime = nextPrime(prime);
    if (prime <= end) {
      primes = [...primes, prime];
    }
  }

  return primes.reduce((acc, n) => acc * n, 1);
};

const allPrimes = (end: number): number[] => {
  let prime = 2;
  let primes = [prime];

  while (prime < end) {
    prime = nextPrime(prime);
    if (prime <= end) {
      primes = [...primes, prime];
    }
  }

  return primes;
};

const nonPrimes = (end: number): number[] => {
  let result: number[] = [];
  for (let i = 4; i < end; i += 1) {
    if (!isPrime(i)) {
      result = [...result, i];
    }
  }

  return result;
};

const smallestDivisibleProduct = (end: number): number => {
  const base = productOfPrimes(end);

  const test = nonPrimes(end);
  let np: any = test.map(n => primeFactors(n));
  np = np.map((pf: number[]) => pf.reduce((acc: any, n: number) => ({
    ...acc,
    ...(!acc[n] ? { [n]: 1 } : { [n]: acc[n] + 1 }),
  }), {})).reduce((acc: any, factors: any) => {
    const keys = Object.keys(factors);
    const tmp: any = {};
    keys.forEach((k) => {
      if ((!acc[k] && factors[k] > 1) || (acc[k] && factors[k] > acc[k])) {
        tmp[k] = factors[k];
      }
    });
    return { ...acc, ...tmp };
  }, {});
  const multiplier = Object.keys(np).reduce((acc, k) => acc * (Number(k) ** (np[k] - 1)), 1);

  return multiplier * base;
};

describe('Euler 5', () => {
  it('Should return the product of prime numbers within a range', () => {
    expect(productOfPrimes(10)).toBe(210);
  });

  it('Should return prime factors of any number', () => {
    expect(primeFactors(6)).toEqual([2, 3]);
    expect(primeFactors(9)).toEqual([3, 3]);
    expect(primeFactors(10)).toEqual([2, 5]);
  });

  it('2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.', () => {
    expect(smallestDivisibleProduct(10)).toBe(2520);
  });

  it('232792560 is the smallest number that can be divided by each of the numbers from 1 to 20 without any remainder.', () => {
    expect(smallestDivisibleProduct(20)).toBe(232792560);
  });
});
