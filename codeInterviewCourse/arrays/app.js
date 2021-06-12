var test = 'qwert'
function reverse(str){
    var strReverse = '';
    for(i = str.length - 1 ; i >=0 ;i--){
        strReverse = strReverse.concat(str[i])    
    }
    console.log(strReverse)
}

reverse(test)

