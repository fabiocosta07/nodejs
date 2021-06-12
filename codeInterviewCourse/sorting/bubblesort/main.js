const numbers = [ 87, 283, 4, 0];

function bubbleSort(array) {
    for(j=0; j < array.length; j++) {
        for(i=0;(i+1)< array.length; i++){
            if (array[i] > array[i+1]) {
                let v = array[i+1];
                array[i+1] = array[i]
                array[i] = v
            }
        }    
    }
    
}

bubbleSort(numbers);
console.log(numbers);