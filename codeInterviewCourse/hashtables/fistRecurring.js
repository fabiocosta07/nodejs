//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    var test = new Map()
    var result
    input.forEach(element => {
        if (!test.has(element)) {
            test.set(element,true)            
        } else {
            result = element
        }
    });
    return result
}
var arr = [2,5,1,2,3,5,1,2,4];
console.log(firstRecurringCharacter(arr));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2