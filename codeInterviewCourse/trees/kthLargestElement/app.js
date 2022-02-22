/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
     this.k = k
     this.items = []
    nums.forEach(element => {
        this.add(element)
    });
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.items.push(val)
    this.heapfyUp()
    this.clean()
    return this.peek()
};

KthLargest.prototype.peek = function() {
    return this.items[0]
};

KthLargest.prototype.clean = function() {
    if (this.items.length > this.k) {
        var lastItem = this.items.pop()
        this.items[0] = lastItem
        this.heapfyDown()
    }
    return
};


KthLargest.prototype.heapfyUp = function() {
    var index = this.items.length - 1
    while(this.hasParent(index) && this.items[getParentIndex(index)] > this.items[index]) {
        this.swap(getParentIndex(index), index)
        index = getParentIndex(index)
    }
}

KthLargest.prototype.heapfyDown = function() {
    var index = 0
    while (this.hasLeftChild(index)) {
        var smallerChildIndex = getLeftChildIndex(index)
        if (this.hasLeftChild(index) && this.items[getRightChildIndex(index)] < this.items[getLeftChildIndex(index)]){
            smallerChildIndex = getRightChildIndex(index)
        }
        if (this.items[index] < this.items[smallerChildIndex]) {
            break
        } else {
            this.swap(index, smallerChildIndex)
        }
        index = smallerChildIndex
    } 
}

KthLargest.prototype.swap = function(indexOne, indexTwo) {
    var temp = this.items[indexOne]
    this.items[indexOne] = this.items[indexTwo]
    this.items[indexTwo] = temp
};

KthLargest.prototype.hasLeftChild = function(index) { return getLeftChildIndex(index) < this.items.length };
KthLargest.prototype.hasRightChild = function(index) { return getRightChildIndex(index) < this.items.length };
KthLargest.prototype.hasParent = function(index) { return getParentIndex(index) >= 0 };

function getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1}
function getRightChildIndex(parentIndex) { return 2 * parentIndex + 2}
function getParentIndex(childIndex) { 
    if ((childIndex - 1) < 2){
        return 0
    } 
    return (childIndex - 1) / 2
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

var obj = new KthLargest(3, [4,5,8,2])
console.log(obj.add(3))
console.log(obj.add(5))
console.log(obj.add(10))
console.log(obj.add(9))
console.log(obj.add(4))

