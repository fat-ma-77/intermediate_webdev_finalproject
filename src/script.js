'use strict';

function readNumber(value, label) {
  if ((typeof value !== 'string' && typeof value !== 'number') ||
      (typeof value === 'string' && value.trim() === '')) {
    throw new RangeError(`Enter a valid ${label}.`);
  }
  const number = Number(value);
  if (!Number.isFinite(number)) {
    throw new RangeError(`Enter a valid ${label}.`);
  }
  return number;
}

/** Simple interest = principal * annual percentage rate * years / 100. */
function calculateInterest(principalInput, rateInput, timeInput) {
  const principal = readNumber(principalInput, 'principal amount');
  const rate = readNumber(rateInput, 'interest rate');
  const time = readNumber(timeInput, 'time in years');
  if (principal <= 0 || rate < 0 || time < 0) {
    throw new RangeError('Principal must be positive; rate and time must be non-negative.');
  }
  const interest = principal * (rate / 100) * time;
  if (!Number.isFinite(interest)) {
    throw new RangeError('The calculated interest is too large.');
  }
  return interest;
}

// Guard DOM access so missing elements and Node/Jasmine do not cause TypeErrors.
function compute() {
  if (typeof document === 'undefined') return;
  const principal = document.getElementById('principal');
  const rate = document.getElementById('rate');
  const time = document.getElementById('time');
  const result = document.getElementById('result');
  if (!principal || !rate || !time || !result) return;

  try {
    const interest = calculateInterest(principal.value, rate.value, time.value);
    result.textContent = `Simple interest: ${interest.toFixed(2)}`;
  } catch (error) {
    result.textContent = error.message;
  }
}

function initializeCalculator() {
  const form = document.getElementById('calculator-form');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    compute();
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCalculator, { once: true });
  } else {
    initializeCalculator();
  }
}
if (typeof window !== 'undefined') window.compute = compute;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculateInterest, compute };
}
