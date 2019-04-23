const DIGITS = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';

const getSubstring = (
  { string, index, length }: { string: string, index: number, length: number },
): string => string.substr(index, length);

const sumDigits = (digits: string): number => digits
  .split('')
  .map(d => Number(d))
  .reduce((acc, n) => acc + n);

const productDigits = (digits: string): number => digits
  .split('')
  .map(d => Number(d))
  .reduce((acc, n) => acc * n);

const getNonZeroSequences = ({ string, length }: { string: string, length: number }) => {
  let sequences: string[] = [];
  for (let i = 0; i < string.length - length; i += 1) {
    const substring = getSubstring({ string, index: i, length });
    if (!substring.includes('0')) {
      sequences = sequences.concat(substring);
    }
  }
  return sequences;
};

const largestProductInSeries = ({ string, length }: { string: string, length: number }) => {
  let result = 0;
  for (let i = 0; i < string.length - length; i += 1) {
    const substring = getSubstring({ string, index: i, length });
    if (!substring.includes('0')) {
      const product = productDigits(substring);
      result = product > result ? product : result;
    }
  }
  return result;
};

describe('Problem 8', () => {
  it('Should return 5832 as the largest 4-digit series product', () => {
    expect(largestProductInSeries({ string: DIGITS, length: 4 }))
      .toBe(5832);
  });

  it('Should return 23514624000 as the largest 13-digit series product', () => {
    expect(largestProductInSeries({ string: DIGITS, length: 13 }))
      .toBe(23514624000);
  });
});
