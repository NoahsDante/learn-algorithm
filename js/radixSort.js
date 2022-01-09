/**
 * 基数排序
 */
// only for no-negative value
function radixSort(arr) {
  let mod = 10;
  let dev = 1;
  let counter = [];
  for (let i = 0; i < maxbits(arr); i++, dev *= 10, mod *= 10) {
    for(let j = 0; j < arr.length; j++) {
      let bucket = parseInt((arr[j] % mod) / dev);
      if(counter[bucket]==null) {
        counter[bucket] = [];
      }
      counter[bucket].push(arr[j]);
    }
    let pos = 0;
    for(let j = 0; j < counter.length; j++) {
      let value = null;
      if(counter[j]!=null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }
  return arr;
}

function maxbits(arr) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  const maxDigit = (max + '').length;
  return maxDigit;
}

// function generateRandomArray(maxSize, maxValue) {
//   let arr = new Array(maxSize);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.floor((maxValue + 1) * Math.random());
//   }
//   return arr;
// }

const test1 = generateRandomArray(10,);
jsLog('原始',test1)
jsLog('转换',radixSort(test1))