// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next){
    this.data = data;
    this.next= next || null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size(){
    let count = 0;
    let node = this.head;
    while(node){
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    if(!this.head){
      return null;
    }
    let node = this.head;
    while(node){
      if(node.next == null){
        return node;
      }else{
        node = node.next
      }
    }
    return node;
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    this.head = this.head.next;
  }

  removeLast(){
    if(!this.head){
      return null;
    }
    if(!this.head.next){
      this.head = null;
      return;
    }

    let node = this.head;
    let nextNode = node.next
    if(nextNode.next){
      node = nextNode;
      nextNode = node.next;
    }
    node.next = null;
  }

  insertLast(data){
    let node = this.getLast();
    if(node){
      node.next = new Node(data);
    }else{
      this.head = new Node(data);
    }
  }

  getAt(index){
    let counter = 0;
    let node = this.head;
    while(node){
      if(index === counter){
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index){
    if(!this.head){return null}
    if(index === 0){
      this.head = this.head.next
      return
    }
    let prevNode = this.getAt(index-1);
    let nextNode = this.getAt(index+1);
    prevNode.next = nextNode;
  }

  insertAt(data, index){
    if(index === 0 || !this.head){this.insertFirst(data); return;}
    let node = this.getAt(index-1);
    if(node){
      node.next = new Node(data, node.next);
    }else{
      this.getLast().next = new Node(data)
    }
  }

  forEach(fn){
    let node = this.head;
    let counter = 0;
    while(node){
      fn(node, counter);
      counter++;
      node = node.next;
    }
  }
  
}

module.exports = { Node, LinkedList };
