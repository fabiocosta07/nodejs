class Node {
    constructor(value) {
        this.value = value
        this.previous = null
        this.next = null        
    }
}

class DoubledLinkedList{
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }
    append(value){
        let newNode = new Node(value)
        newNode.previous = this.tail
        this.tail.next = newNode        
        this.tail = newNode
        this.length++
    }
    prepend(value) {
        let newNode = new Node(value)
        newNode.next = this.head
        this.head.previous = newNode
        this.head = newNode
        this.length++
    }
    insert(index,value) {
        let pointer = this.head
        for (let i =0; i !== index; i++) {
            pointer = pointer.next
        }
        var newNode = new Node(value)
        newNode.previous = pointer.previous
        newNode.next = pointer
        pointer.previous.next = newNode
        pointer.previous = newNode
        this.length++        
    }
    remove(index) {
        let pointer = this.head
        for (let i =0; i !== index; i++) {
            pointer = pointer.next
        }
        pointer.previous.next = pointer.next
        pointer.next.previous = pointer.previous
        this.length--        
    }
    printList(){
        let pointer = this.head
        while(pointer){
            console.log(pointer.value)
            pointer = pointer.next
        }
    }
}

var ll = new DoubledLinkedList(10)

ll.append(14)
ll.append(15)
ll.prepend(1)

ll.insert(1,2)
ll.remove(1)

ll.printList()