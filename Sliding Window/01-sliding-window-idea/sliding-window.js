function find_averages_of_subarrays(K, arr) {
  const result = [];
  let windowSum = 0.0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= K - 1) {
      result.push(windowSum / K);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return result;
}

const result = find_averages_of_subarrays(5, [7, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);
