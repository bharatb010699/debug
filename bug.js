function numberToString(n, base = 10) {
    let result = "", sign = "";
    // try {
      if (n < 0) {
        sign = "-";
        n = -n;
      }
      do {
        result = String(n % base) + result;
        n /= base;
        // n = Math.floor(n / base);
    } while (n > 0);
  // } catch(result) {
    return sign + result;
  }
// }
  console.log(numberToString(13, 10));
  // → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3…
  