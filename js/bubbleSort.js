/**
 * 冒泡排序
 * 从左往右找最大
 * @param arr
 * @returns {*}
 */
function bubbleSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if(arr[j] > arr[j+1]) { // 找到最大排序
        swap(arr,j,j+1)
      }
    }
  }
  return arr;
}
const test1 = generateRandomArray(10);
jsLog('原始',test1)
jsLog('转换',bubbleSort(test1))