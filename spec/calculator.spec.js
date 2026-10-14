const { calculateInterest, compute } = require('../src/script.js');

describe('Simple Interest Calculator', () => {
  it('calculates simple interest from numeric principal, rate, and time', () => {
    expect(calculateInterest(1000, 10, 2)).toBe(200);
    expect(calculateInterest(1000, 0, 2)).toBe(0);
  });

  it('converts input strings to numbers and safely handles absent DOM elements', () => {
    expect(calculateInterest('5000', '5', '3')).toBe(750);
    expect(() => calculateInterest('', '5', '3')).toThrowError(RangeError);
    const previousDocument = global.document;
    try {
      global.document = { getElementById: () => null };
      expect(() => compute()).not.toThrow();
    } finally {
      if (previousDocument === undefined) delete global.document;
      else global.document = previousDocument;
    }
  });
});
