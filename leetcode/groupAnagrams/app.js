var groupAnagrams = function(strs) {
    var mapResult = new Map()
    var strsSorted = strs.sort((a,b) => {
        aSorted = Array.from(a).sort().join('')
        bSorted = Array.from(b).sort().join('')
        if (aSorted === bSorted){
            return 0
        } else if (aSorted < bSorted){
            return 1
        } else {
            return -1
        }        
    })

    var result = []
    var group = []
    for(let i = 0; i < strsSorted.length; i++){
        if (group.length === 0) {
            group.push(strsSorted[i])
        } else {
            var a = group[0]
            var b = strsSorted[i]
            if (Array.from(a).sort().join('') !== Array.from(b).sort().join('')) {
                result.push(group)
                group = []
            }
            group.push(b) 
        }
    }
    result.push(group)
    return result
};

strs = ["eat","tea","tan","ate","nat","bat"]

strs2 = [""]

strs3 = ["","b"]

console.log(groupAnagrams(strs))
console.log(groupAnagrams(strs2))
console.log(groupAnagrams(strs3))