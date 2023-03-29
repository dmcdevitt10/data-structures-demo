class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    size(){
        let count = 0
        let node = this.head
        while(node){
            count++
            node = node.next
        }
        return count
    }

    getLast(){
        let lastNode = this.head
        if(lastNode){
            while(lastNode.next){
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    isEmpty(){
        return this.size() === 0
    }
}

let nodeA = new Node('A')
let nodeB = new Node('B')
let nodeC = new Node('C')

nodeA.next = nodeB
nodeB.next = nodeC

let list = new LinkedList()

list.head = nodeA

console.log(nodeA)
console.log(nodeB)

console.log(JSON.stringify(list))
console.log(list.head.next.next)

console.log(list.size())
console.log(list.getLast())
console.log(list.isEmpty())
