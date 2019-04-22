import { nextPrimeOpt } from './problem3.spec';

const getNthPrime = (n: number) => {
  let primes = [2, 3, 5, 7, 11, 13];
  if (n < 7) {
    return primes[n - 1];
  }
  let prime = primes[5];
  while (primes.length < n) {
    prime = nextPrimeOpt(prime, primes);
    primes = [...primes, prime];
  }
  return prime;
};

describe('Problem 7', () => {
  it('Should return 17 as the 7th prime number', () => {
    expect(getNthPrime(7)).toBe(17);
  });

  it('Should return 104743 as the 10001th prime number', () => {
    expect(getNthPrime(10001)).toBe(104743);
  });
});
