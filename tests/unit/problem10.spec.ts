import { nextPrimeOpt } from "./problem3.spec";
import { arraySum } from "./utils";

const primesBelowN = (n: number) => {
  const primes: number[] = [];
  let nextPrime = 2;
  while (nextPrime < n) {
    primes.push(nextPrime);
    nextPrime = nextPrimeOpt(nextPrime, primes);
  }
  return primes;
};

const sumPrimesBelowN = (n: number) => arraySum(primesBelowN(n));

describe('Sum of primes below N', () => {
  it('Should return the sum of primes below "N"', () => {
    expect(sumPrimesBelowN(5)).toBe(5);
    expect(sumPrimesBelowN(10)).toBe(17);
  });
});
