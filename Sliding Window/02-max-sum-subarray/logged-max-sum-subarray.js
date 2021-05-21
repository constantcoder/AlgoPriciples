function max_sub_array_of_size_k(K, arr) {
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    console.log();
    console.log('windowStart Index:', windowStart);
    console.log('windowStart Value:', arr[windowStart]);
    console.log('windowEnd Index:', windowEnd);
    console.log('windowEnd Value:', arr[windowEnd]);
    console.log();
    console.log('windowSum Value:', windowSum);
    console.log('maxSum Value:', maxSum);
    console.log();

    if (windowEnd >= K - 1) {
      // make maxSum equal the bigger (maxSum or windowSum)
      maxSum = Math.max(maxSum, windowSum);
      // subtract the element going out
      windowSum -= arr[windowStart];
      // slide the window ahead

      windowStart += 1;
      console.log(
        'Current maxSum after window\nstart number subtracted:',
        maxSum
      );
      console.log('______________');
      console.log();
    }
  }
  return maxSum;
}

console.log(
  `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(
    3,
    [2, 1, 5, 1, 3, 2]
  )}`
);
