function find_averages_of_subarrays(K, arr) {
  const result = [];
  let windowSum = 0.0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // add the next element
    windowSum += arr[windowEnd];

    console.log('windowStart Index:', windowStart);
    console.log('windowStart Value:', arr[windowStart]);
    console.log('windowEnd Index:', windowEnd);
    console.log('windowEnd Value:', arr[windowEnd]);
    console.log('windowSum:', windowSum);
    console.log();

    // slide the window
    // no need to slide if we've haven't hit the required window size of 'k'
    if (windowEnd >= K - 1) {
      // calculate the average and add it to the result array
      result.push(windowSum / K);

      // subtract the value leaving the window
      windowSum -= arr[windowStart];

      // slide the window ahead
      windowStart += 1;
      console.log(
        'Current windowSum after window\nstart number subtracted:',
        windowSum
      );
      console.log();
      console.log('Current results:', result);
      console.log('______________');
      console.log();
    }
  }
  return result;
}

const result = find_averages_of_subarrays(5, [7, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log('\n');
console.log(`Averages of subarrays of size K: ${result}`);
console.log('\n');
