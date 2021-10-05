 /**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
  var currentNode = head   
  var count = 0
  while(currentNode) {
    currentNode = currentNode.next
    count++
  }
  var half = 0
  if (count % 2 === 0) {
    half = (count / 2) + 1 
  } else {
    half = ((count - 1) / 2) + 1  
  }
  currentNode = head
  count = 0
  while(currentNode) {
    count++
    if (count === half) {
        break
    }
    currentNode = currentNode.next
  }
  return currentNode
};


function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

class LinkedList {
    constructor(head){
        this.head = head
        this.tail = head
    }
    append(val) {
      var node = new ListNode(val,null)
      if (!this.head) {
        this.head = node
        this.tail = node
        return this
      }
       this.tail.next = node
       this.tail = node 
       return this
    }
}

var input = [1,2,3,4,5]

var list = new LinkedList(null)
for (var i = 0; i < input.length; i++) {
    list.append(input[i]);
}

var foundMiddleNode = middleNode(list.head)
console.log(foundMiddleNode)