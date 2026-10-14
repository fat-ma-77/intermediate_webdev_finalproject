'use strict';

/** Convert input values to numbers before performing arithmetic. */
function addNumbers(firstInput, secondInput) {
  if (firstInput === '' || secondInput === '' || firstInput == null || secondInput == null) {
    throw new TypeError('Both numbers are required.');
  }

  const first = Number(firstInput);
  const second = Number(secondInput);

  if (!Number.isFinite(first) || !Number.isFinite(second)) {
    throw new TypeError('Please enter valid numbers.');
  }

  return first + second;
}

// Only access browser elements when the DOM is available (not in Node/Jasmine).
if (typeof document !== 'undefined') {
  const form = document.getElementById('calculator-form');
  const result = document.getElementById('result');

  if (form && result) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const first = document.getElementById('first-number');
      const second = document.getElementById('second-number');
      if (!first || !second) return;

      try {
        result.textContent = `Result: ${addNumbers(first.value, second.value)}`;
      } catch (error) {
        result.textContent = error.message;
      }
    });
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { addNumbers };
}
