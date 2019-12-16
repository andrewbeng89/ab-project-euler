const vectorMultiply = (a: number[], b: number[]) => a.reduce((res, n, i) => res + (n * b[i]), 0);

const matrixTranspose = (m: number[][]) => {
  const res: any[] = [];
  m.forEach((v, col) => {
    v.forEach((n, row) => {
      if (!res[row]) {
        res[row] = [];
      }
      res[row][col] = n;
    });
  });
  return res;
};

const matrixMultiply = (a: number[][], b: number[][]) => (
  a.map(va => (matrixTranspose(b).map(vb => vectorMultiply(va, vb))))
);

const A = [
  [1, 2, 2],
  [-2, -1, -2],
  [2, 2, 3],
];

const B = [
  [1, 2, 2],
  [2, 1, 2],
  [2, 2, 3],
];

const C = [
  [-1, -2, -2],
  [2, 1, 2],
  [2, 2, 3],
];

const generatePrimitiveTriplets = (
  triplets: number[][][][] = [[[[3, 4, 5]]]],
) => {
  const currentTriplets = triplets[triplets.length - 1];
  const newTriplets = currentTriplets
    .map(t => [A, B, C].map(m => matrixMultiply(t, m)));
  return {
    triplets: [...triplets, ...newTriplets],
    newTriplets,
  };
};

const findTripletWithSum = (sum: number) => {
  let result = [3, 4, 5];
  let mats = [[[[...result]]]];
  let factor = sum % 12 === 0 ? sum / 12 : 0;
  while (factor === 0) {
    mats = generatePrimitiveTriplets(mats)
      .newTriplets;
    const triplets = mats.reduce((acc, t) => [...acc, ...t], []);
    const results = triplets.map(triplet => triplet[0]);
    result = results.find((res) => {
      const s = res.reduce((a, n) => (a + n), 0);
      return sum % s === 0;
    }) || [];
    if (result.length) {
      factor = sum / result.reduce((a, n) => (a + n), 0);
    }
  }
  result = result.map(n => (factor * n));
  return result;
};

const productVector = (v: number[]) => v.reduce((product, n) => product * n, 1);

describe('Problem 9', () => {
  it('Should return 11 when vector(1,2) is multiplied by vector(3,4)', () => {
    expect(vectorMultiply([1, 2], [3, 4])).toBe(11);
  });

  it('Should return 32 when vector(1,2,3) is multiplied by vector(4,5,6)', () => {
    expect(vectorMultiply([1, 2, 3], [4, 5, 6])).toBe(32);
  });

  it('Should return [[58,64],[139,154]] when matrix([[1,2,3],[4,5,6]]) is multiplied by matrix([[7,8], [9,10], [11,12]])',
    () => {
      expect(matrixMultiply([[1, 2, 3], [4, 5, 6]], [[7, 8], [9, 10], [11, 12]]))
        .toEqual([[58, 64], [139, 154]]);
    });

  it('Should return [[7, 9, 11], [8, 10, 12]] when matrix([[7, 8], [9, 10], [11, 12]]} is transposed',
    () => {
      expect(matrixTranspose([[7, 8], [9, 10], [11, 12]])).toEqual([[7, 9, 11], [8, 10, 12]]);
    });

  it('Should return the next set of primitive triplets', () => {
    const { triplets } = generatePrimitiveTriplets();
    expect(triplets[1]).toEqual([[[5, 12, 13]], [[21, 20, 29]], [[15, 8, 17]]]);
  });

  it('Should find the triplet which has the sum of 1000', () => {
    expect(productVector(findTripletWithSum(1000))).toEqual(31875000);
  });
});
