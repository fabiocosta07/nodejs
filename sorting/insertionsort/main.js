const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0,4];

function insertionSort(array) {
    for (i=0; i < array.length; i++){
        let found = false
        for (j=i; j > 0 ; j--){
          if (array[i] < array[j-1]){
              min = j - 1
              found = true
          }
        }
        if (found) {
            temp = array[min]
            array[min] = array[i]
            let temp2
            let temp3
            for (j=min; (j+1) <= i; j++){
                if (!temp3) {
                    temp3 = temp
                }
                temp2 = array[j+1]
                array[j+1] = temp3
                temp3 = temp2
            }      
        }
    }    
}

function shift(array){
    let temp2
    let temp3
    for (j=0; (j+1)  < array.length; j++){
        if (!temp3) {
            temp3 = array[j]
        }
        temp2 = array[j+1]
        array[j+1] = temp3
        temp3 = temp2
    }  
}

function insertionSort2(array){
    for (i =0; i < array.length; i++){
        for (j=i; j < array.length; j--){
            if (array[j] < array [j-1]){
                temp = array[j-1]
                array[j -1 ] = array[j]
                array[j] = temp
            } else {
                break
            }
        }
    }
}

function insertionSort3(array) {
    const length = array.length;
      for (let i = 0; i < length; i++) {
          if (array[i] < array[0]) {
        //move number to the first position
        array.unshift(array.splice(i,1)[0]);
      } else {
        // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
        if (array[i] < array[i-1]) {
          //find where number should go
          for (var j = 1; j < i; j++) {
            if (array[i] >= array[j-1] && array[i] < array[j]) {
              //move number to the right spot
              array.splice(j,0,array.splice(i,1)[0]);
            }
          }
        }
      }
      }
  }

insertionSort2(numbers);
console.log(numbers);