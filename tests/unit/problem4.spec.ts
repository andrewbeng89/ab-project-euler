const isPalindrome = (test: String): boolean => {
  const stringLength = test.length;
  const isEven = stringLength % 2 === 0;

  let firstHalf;
  let secondHalf;
  if (!isEven) {
    firstHalf = test.substr(0, Math.floor(stringLength / 2));
    secondHalf = test.substr(1 + Math.floor(stringLength / 2));
  } else {
    firstHalf = test.substr(0, stringLength / 2);
    secondHalf = test.substr(stringLength / 2);
  }

  return secondHalf.split('').reverse().join('') === firstHalf;
};

const largest3DigitFactorPalindrome = () => {
  for (let i = 999; i > 900; i--) { // eslint-disable-line for-direction,no-plusplus
    for (let n = 999; n > 900; n--) { // eslint-disable-line for-direction,no-plusplus
      const candidate: number = i * n;
      if (isPalindrome(`${candidate}`)) {
        return candidate;
      }
    }
  }
  return undefined;
};

describe('Euler 4', () => {
  it('Should detect palindromes', () => {
    expect(isPalindrome('noon')).toBe(true);
    expect(isPalindrome('noob')).toBe(false);
    expect(isPalindrome('noon')).toBe(true);
    expect(isPalindrome('9009')).toBe(true);
  });

  it('Should determine 906609 is the largest palindromic number', () => {
    expect(largest3DigitFactorPalindrome()).toBe(906609);
  });
});
