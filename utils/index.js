function generateRandomArray(maxSize, maxValue) {
  const newArray = new Array(maxSize);

  for (let i = 0; i < newArray.length; i++) {
    newArray[i] =  parseInt(Math.random() * 100);
  }
  return newArray
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
  return arr;
}

function isInter(n) {
return parseInt(n) === parseFloat(n)
}

function paddingNum(num, length) {
  let len = (num + "").length;
  let diff = length - len;
  if (diff > 0) {
    return Array(diff).fill(0).join("0") + num;
  }
  return  num;
}

function jsLog(...arg) {
  console.log(...arg)
}

class Stack {
  constructor() {
    this.items = []
  }
  // 新增元素
  push(el) {
    this.items.push(el)
  }
  add(el) {
    this.items.push(el)
  }
  // 删除栈顶的元素并返回其值
  pop() {
    return this.items.pop()
  }
  // 返回栈顶的元素
  peek() {
    return this.items[this.items.length - 1]
  }
  // 清空栈
  clear() {
    this.items = []
  }
  // 栈的大小
  size() {
    return this.items.length
  }
  // 栈是否为空
  isEmpty() {
    return this.items.length === 0
  }
}
