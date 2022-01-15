/**
 * 二叉树
 *
 * 前序/中/后序遍历
 *
 */
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.left = null;
    this.right = null;
  }
}

function f(head) {
  if (head == null) {
    return;
  }
  // 1
  f(head.left);
  // 2
  f(head.right);
  // 3
}

// 先序打印所有节点
function pre(head) {
  if (head == null) {
    return;
  }
  jsLog(head.value);
  pre(head.left);
  pre(head.right);
}

function inner(head) {
  if (head == null) {
    return;
  }
  inner(head.left);
  jsLog(head.value);
  inner(head.right);
}

function pos(head) {
  if (head == null) {
    return;
  }
  pos(head.left);
  pos(head.right);
  jsLog(head.value);
}


let head = new Node(1);
head.left = new Node(2);
head.right = new Node(3);
head.left.left = new Node(4);
head.left.right = new Node(5);
head.right.left = new Node(6);
head.right.right = new Node(7);

pre(head);
jsLog("========");
inner(head);
jsLog("========");
pos(head);
jsLog("========");
