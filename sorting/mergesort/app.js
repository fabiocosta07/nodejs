const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

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

function merge(left, right){
  var ar = []
  var j = 0
  for(i=0; i < left.length; i++)  {
    for (;j < right.length; j++) {
      if (right[j] <= left[i]) {        
        ar.push(right[j])
      } else {
        break;
      }                         
    }
    ar.push(left[i])
  }
  for (;j < right.length; j++) {
    ar.push(right[j])
  }  
  return ar
}


const answer = mergeSort(numbers);
console.log(answer);