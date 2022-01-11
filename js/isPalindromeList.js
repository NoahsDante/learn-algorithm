/**
 *  怎样判断链表回文
 *  1 => 2 => 3 =>2 =>1
 *  从左往右或者从右往左，都一样
 *
 *
 */

class Node {
  constructor(val) {
    this.value = val;
    this.next = null
  }
}


function isPalindrome1(node) {
  let cur = node, stack = [];
  while (cur) {
    stack.push(cur);
    cur = cur.next;
  }
  ;
  let head = node;
  while (head) {
    if (head.value !== stack.pop().value) {
      return false;
    }
    head = head.next;
  }
  return true;
}


function isPalindrome2(node) {
  let cur = node, stack = [], right = node.next;
  while (cur && cur.next) {
    // 以中间某个节点，找到右边所有节点
    right = right.next;
    cur = cur.next.next;
  };
  while (right) {
    stack.push(right);
    right = right.next;
  };
  let head = right;
  while (head) {
    if (head.value !== stack.pop().value) {
      return false;
    }
    head = head.next;
  }
  return true;
}
function isPalindrome3(node) {
  let n1 = head;
  let n2 = head;
  while (n2.next != null && n2.next.next != null) { // find mid node
    n1 = n1.next; // n1 -> mid
    n2 = n2.next.next; // n2 -> end
  }
  // n1 中点


  n2 = n1.next; // n2 -> right part first node
  n1.next = null; // mid.next -> null
  let n3 = null;
  while (n2 != null) { // right part convert
    n3 = n2.next; // n3 -> save next node
    n2.next = n1; // next of right node convert
    n1 = n2; // n1 move 保存上一次 n2 的数据
    n2 = n3; // n2 move
  }
  n3 = n1; // n3 -> save last node
  n2 = head;// n2 -> left first node
  let res = true;
  while (n1 != null && n2 != null) { // check palindrome
    if (n1.value != n2.value) {
      res = false;
      break;
    }
    n1 = n1.next; // left to mid
    n2 = n2.next; // right to mid
  }
  n1 = n3.next;
  n3.next = null;
  while (n1 != null) { // recover list
    n2 = n1.next;
    n1.next = n3;
    n3 = n1;
    n1 = n2;
  }
  return res;
}



let head = cur = new Node(1);
[2,3,4,3,2,1].forEach((val)=> {
  cur.next = new Node(val);
  cur = cur.next;
})

console.log(isPalindrome1(head),isPalindrome2(head),isPalindrome3(head));