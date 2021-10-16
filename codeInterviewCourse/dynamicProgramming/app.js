let calcs  = 0
function fibonacci() {
    let cache = {};
    return function calcFibo(n) {
        calcs++
        if (n in cache) {
            return cache[n]
        } else if (n < 2) {
            return n
        } else {
            cache[n] = calcFibo(n - 1) + calcFibo(n - 2);
            return cache[n]   
        }                 
    }
}
const closureFibonacci = fibonacci();
console.log('1', closureFibonacci(10))
console.log('2', calcs)