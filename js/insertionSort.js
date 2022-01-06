/**
 * 插入排序
 * @param arr
 * @returns {*}
 */

function insertionSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  // 不只1个数
  for (let i = 1; i < arr.length; i++) { // 0 ~ i 做到有序
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1);
    }
  }
  return arr;
}
const test3 = generateRandomArray(5);
jsLog('原始',test3)
jsLog('转换',insertionSort(test3))