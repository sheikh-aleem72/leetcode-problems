function Node(val) {
  this.data = val;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let i = 0;
  let temp = this.head;
  while (i < index && temp != null) {
    i++;
    temp = temp.next;
  }
  if (temp == null) return -1;
  return temp.data;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  if (this.head == null) {
    this.head = new Node(val);
  } else {
    let n = new Node(val);
    n.next = this.head;
    this.head = n;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.head == null) {
    this.head = new Node(val);
  } else {
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    let n = new Node(val);
    temp.next = n;
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (this.head == null && index != 0) return;
  if (this.head == null) head = new Node(val);
  if (index == 0) {
    this.addAtHead(val);
    return;
  }
  let i = 0;
  let current = this.head;
  let prev = null;
  while (i < index && current != null) {
    prev = current;
    current = current.next;
    i++;
  }

  if (index != i) return;

  let n = new Node(val);
  n.next = current;
  prev.next = n;
  return;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (this.head == null) return null;
  if (index == 0) {
    this.deleteAtHead();
    return;
  }

  let i = 0;
  let prev = null;
  let NodeToBeDel = this.head;

  while (i < index && NodeToBeDel.next != null) {
    prev = NodeToBeDel;
    NodeToBeDel = NodeToBeDel.next;
    i++;
  }
  if (i != index) return;
  if (NodeToBeDel == null) return;

  let newNext = NodeToBeDel.next;
  prev.next = newNext;
  NodeToBeDel.next = null;
  return;
};

MyLinkedList.prototype.deleteAtHead = function () {
  if (this.head == null) return;
  let nextHead = this.head.next;
  let nodeToBeDelete = this.head;
  this.head = nextHead;
  nodeToBeDelete.next = null;
};

// Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList();
var param_1 = obj.get(1);
obj.addAtHead(4);
obj.addAtTail(2);
obj.addAtIndex(2, 5);
obj.deleteAtIndex(0);
