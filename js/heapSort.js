/**
 *  堆排序
 * 数组中，连续从0 到n ，可以变换成完全二叉树结构
 *  数组下标变换
 *  i左 = 2*i +1
 *  i右 = 2 *i + 2
 *  i父级 = Math.floor((i- 1) /2)
 *
 *  大根堆
 *  完全二叉树中每颗树的父级是最大
 *  小根堆
 *  完全二叉树中每颗树的父级是最小
 *
 *
 */


function heapSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  // O(N*logN)
//		for (int i = 0; i < arr.length; i++) { // O(N)
//			heapInsert(arr, i); // O(logN)
//		}
  // O(N)
  for (let i = arr.length - 1; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }
  let heapSize = arr.length;
  swap(arr, 0, --heapSize);
  // O(N*logN)
  while (heapSize > 0) { // O(N)
    // 找到最大值
    heapify(arr, 0, heapSize); // O(logN)
    // 在最后值交换
    swap(arr, 0, --heapSize); // O(1)
  }
  return arr;
}
// arr[index]刚来的数，往上
function heapInsert(arr,index) {
  while (arr[index] > arr[(index - 1) / 2]) {
    swap(arr, index, (index - 1) / 2);
    index = (index - 1) / 2;
  }
}

// arr[index]位置的数，能否往下移动
function heapify(arr,index,heapSize) {
  let left = index * 2 + 1; // 左孩子的下标
  while (left < heapSize) { // 下方还有孩子的时候
    // 两个孩子中，谁的值大，把下标给largest
    // 1）只有左孩子，left -> largest
    // 2) 同时有左孩子和右孩子，右孩子的值<= 左孩子的值，left -> largest
    // 3) 同时有左孩子和右孩子并且右孩子的值> 左孩子的值， right -> largest
    let largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
    // 父和较大的孩子之间，谁的值大，把下标给largest
    largest = arr[largest] > arr[index] ? largest : index;
    if (largest == index) {
      break;
    }
    swap(arr, largest, index);
    index = largest;
    left = index * 2 + 1;
  }
}

const test1 = generateRandomArray(10);
jsLog('原始',test1)
jsLog('转换',heapSort(test1,))
