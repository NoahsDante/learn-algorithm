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