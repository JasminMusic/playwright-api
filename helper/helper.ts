export function calculateFactorial(n) {
  if (typeof n !== "number" || n < 10 || n > 100) {
    throw new Error("Input must be a number between 10 and 100.");
  }

  let result = BigInt(1);
  for (let i = BigInt(2); i <= BigInt(n); i++) {
    result *= i;
  }

  if (n >= 22) {
    // Note: Converting very large BigInts to Number can lose precision, but it's necessary for scientific notation
    return Number(result).toExponential();
  } else {
    return result.toString();
  }
}
