class Node {
    constructor(value) {
        this.value = value
        this.next = null        
    }
}

class LinkedList{
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }
    append(value){
        let newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
    prepend(value) {
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
    }
    insert(index,value) {
        let pointer = this.head
        for (let i =0; (i + 1) !== index; i++) {
            pointer = pointer.next
        }
        var newNode = new Node(value)
        newNode.next = pointer.next
        pointer.next = newNode
        this.length++        
    }
    remove(index){
        let pointer = this.head
        for (let i =0; (i + 1) !== index; i++) {
            pointer = pointer.next
        }
        pointer.next = pointer.next.next        
    }

    printList(){
        let pointer = this.head
        while(pointer){
            console.log(pointer.value)
            pointer = pointer.next
        }
    }
    reverseWithRecursion(){
        let pointer = this.head
        this.invert(null, pointer)

        const temptail = this.tail
        this.tail = this.head
        this.head = temptail
    }
    invert(previous, pointer){
        if (pointer.next) {
            this.invert(pointer, pointer.next)
        } 
        pointer.next = previous
        return        
    }
    reverse(){
        let previous = null
        let pointer  = this.head
        while(pointer){
            let next = pointer.next
            pointer.next = previous
            previous = pointer
            pointer = next
        }
        const temptail = this.tail
        this.tail = this.head        
        this.head = temptail
    }

}

var ll = new LinkedList(10)


ll.append(14)
ll.append(15)

ll.prepend(1)
ll.insert(1,2)
ll.remove(1)

ll.printList()
console.log("reverse")
ll.reverse()
ll.printList()
