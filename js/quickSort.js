/**
 * 快速排序
 *  https://www.bilibili.com/video/BV13g41157hK?p=3 2：21：44
 *
 *
 * @param arr
 * @returns {*}
 */

function quickSort(arr, L, R) {
  if (L >= R) {
    return;
  }
  swap(arr, L + Math.floor((Math.random() * (R - L + 1))), R)
  // 划分区域的两个值 左边界、右边界
  console.log(L,R)
  let p = partition(arr, L, R);
  quickSort(arr, L, p[0] - 1); // 小于区域的边界
  quickSort(arr, p[1] + 1, R) // 大于区域的边界
  return arr
}

function partition(arr, L, R) {
  if (L > R) { // L...R L>R
    return [-1,-1];
  }
  if (L == R) {
    return [L,R];
  }
  let less = L - 1; // < 区 右边界
  let more = R; // > 区 左边界
  let index = L;
  while (index < more) { // 当前位置，不能和 >区的左边界撞上
    if (arr[index] == arr[R]) {
      index++;
    } else if (arr[index] < arr[R]) {
      swap(arr, index++, ++less);
    } else { // >
      swap(arr, index, --more);
    }
  }
  swap(arr, more, R); // <[R]   =[R]   >[R]
  return [ less + 1, more];
}

const test1 = generateRandomArray(10);
jsLog('原始',test1)
jsLog('转换',quickSort(test1,0,test1.length -1))