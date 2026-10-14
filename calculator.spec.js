
const { addNumbers } = require('../script.js');

describe('Calculator Tests', () => {
  it('should correctly add two numbers', () => {
    expect(addNumbers(5, 3)).toBe(8);
  });

  it('should convert string inputs into numbers', () => {
    expect(addNumbers('10', '20')).toBe(30);
  });
});
