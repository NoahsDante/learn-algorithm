function generateRandomArray(maxSize, maxValue) {
  const newArray = new Array(maxSize);

  for (let i = 0; i < newArray.length; i++) {
    newArray[i] =  parseInt(Math.random() * 10);
  }
  return newArray
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
  return arr;
}

function jsLog(...arg) {
  console.log(...arg)
}