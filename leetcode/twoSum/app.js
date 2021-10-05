var twoSum = function(nums, target) {
    var numsMap = new Map(nums.map((val, i) => [val, i]));
    var result = []
    for (var i = 0; i < nums.length; i++){
        let otherNum = target - nums[i] 
        let otherNumIndex = numsMap.get(otherNum)
        if (otherNumIndex && otherNumIndex !== i) {
            result.push(i,otherNumIndex)
            return result
        }    
    }
};

var input = [1,3,4,2]
var target = 6

var result = twoSum(input,target)

console.log(result)