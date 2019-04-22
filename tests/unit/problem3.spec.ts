export const isPrime = (n: number): boolean => {
  for (let i = 2; i < n - 1; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

export const isFactor = (x: number) => (n: number) => n % x === 0;

// eslint-disable-next-line max-len
export const isPrimeOpt = (n: number, primes: number[]) => {
  for (let i = 0; i < primes.length; i += 1) {
    const prime = primes[i];
    if (isFactor(prime)(n)) {
      return false;
    }
  }
  return true;
};

export const nextPrimeOpt = (n: number, primes: number[]) => {
  let result = n + 1;
  while (!isPrimeOpt(result, primes)) {
    result += 1;
  }
  return result;
};

export const nextPrime = (n: number): number => {
  let result = n + 1;
  while (!isPrime(result)) {
    result += 1;
  }
  return result;
};

export const primeFactors = (n: number): number[] => {
  let result: number[] = [];

  let prime = 2;
  let test = n;
  let primes = [prime];
  while (test !== 1) {
    if (test % prime === 0) {
      result = [...result, prime];
      test /= prime;
    } else {
      // prime = nextPrime(prime);
      prime = nextPrimeOpt(prime, primes);
      primes = [...primes, prime];
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
