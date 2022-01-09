/**
 * 并归排序
 *  https://www.bilibili.com/video/BV13g41157hK?p=3 40:39
 *  把数据分割左右，
 *  左边排好序、右边排好序
 *  最后在整体排好序
 *
 * @param arr
 * @returns {*}
 */


// l...r N
// T(N) = 2 * T(N / 2) + O(N)
// O(N * logN)
function process(arr, L, R) {
  if (L == R) { // base case
    return;
  }
  let mid = L + ((R - L) >> 1);
  process(arr, L, mid);
  process(arr, mid + 1, R);
  merge(arr, L, mid, R);
}

function merge(arr, L, M, R) {
  let help = new Array(R - L + 1);
  let i = 0;
  let p1 = L;
  let p2 = M + 1;
  while (p1 <= M && p2 <= R) {
    help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
  }
  // 要么p1越界了，要么p2越界了
  while (p1 <= M) {
    help[i++] = arr[p1++];
  }
  while (p2 <= R) {
    help[i++] = arr[p2++];
  }
  for (i = 0; i < help.length; i++) {
    arr[L + i] = help[i];
  }
}


function mergeSort(arr) {
  process(arr,0, arr.length - 1);
  return arr;
}
const test1 = generateRandomArray(10);
jsLog('原始',test1)
jsLog('转换',mergeSort(test1,0,test1.length-1))