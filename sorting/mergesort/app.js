const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0,4];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  var half = Math.floor(array.length / 2)

  return merge(
    mergeSort(array.slice(0, half)),
    mergeSort(array.slice(half))
  )
}

function merge(left, right) {
  var r = []
  var i =0
  var j =0
  while (i < left.length &&
      j < right.length) {
      if (left[i] < right[j]) {
        r.push(left[i])
        i++      
      } else {
        r.push(right[j])
        j++      
      }
  } 
  if (i < left.length){
    r = r.concat(left.slice(i))
  }  
  if (j < right.length){
    r = r.concat(right.slice(j))
  }  
  return r;
}

const test = [3,4,4,7]
const test2 = [5,6]

var res = merge(test, test2)
console.log(res);

const answer = mergeSort(numbers);
console.log(answer);