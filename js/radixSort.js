/**
 * 桶排序
 */
// only for no-negative value
function radixSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  radixSort(arr, 0, arr.length - 1, maxbits(arr));
}

function maxbits(arr) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  let res = 0;
  while (max != 0) {
    res++;
    max /= 10;
  }
  return res;
}

// arr[L..R]排序  ,  最大值的十进制位数digit
function radixSort( arr, L,  R, digit) {
  let radix = 10;
  let i = 0, j = 0;
  // 有多少个数准备多少个辅助空间
  let help = new Array(R - L + 1);
  for (let d = 1; d <= digit; d++) { // 有多少位就进出几次
    // 10个空间
    // count[0] 当前位(d位)是0的数字有多少个
    // count[1] 当前位(d位)是(0和1)的数字有多少个
    // count[2] 当前位(d位)是(0、1和2)的数字有多少个
    // count[i] 当前位(d位)是(0~i)的数字有多少个
   let count = new Array(radix); // count[0..9]
    for (i = L; i <= R; i++) {
      // 103  1   3
      // 209  1   9
      j = getDigit(arr[i], d);
      count[j]++;
    }
    for (i = 1; i < radix; i++) {
      count[i] = count[i] + count[i - 1];
    }
    for (i = R; i >= L; i--) {
      j = getDigit(arr[i], d);
      help[count[j] - 1] = arr[i];
      count[j]--;
    }
    for (i = L, j = 0; i <= R; i++, j++) {
      arr[i] = help[j];
    }
  }
}

function getDigit(x, d) {
  return ((x / (Math.pow(10, d - 1))) % 10);
}

const test1 = generateRandomArray(10);
jsLog('原始',test1)
jsLog('转换',radixSort(test1))