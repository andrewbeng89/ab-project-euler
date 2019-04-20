import { nextPrime, isPrime } from './problem3.spec';

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

const primeFactors = (n: number): number[] => {
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
  let run = true;

  const test = nonPrimes(end);
  let candidate: number = base;
  let multiplier = 1;
  while (run) {
    candidate = multiplier * base;
    // eslint-disable-next-line no-loop-func
    const testDivisible = test.map(i => candidate % i === 0);
    run = testDivisible.some(t => !t);
    if (run) multiplier += 1;
  }
  return candidate;
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
