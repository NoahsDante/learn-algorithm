/**
 * 二叉树
 * 使用迭代实现
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
function pre(head) {
  jsLog("pre-order: ");
  if (head != null) {
    const stack = new Stack();
    stack.add(head);
    while (!stack.isEmpty()) {
      head = stack.pop();
      jsLog(head.value + " ");
      if (head.right != null) {
        stack.push(head.right);
      }
      if (head.left != null) {
        stack.push(head.left);
      }
    }
  }
}

function inner(cur) {
  jsLog("in-order: ");
  if (cur != null) {
    const stack = new Stack();
    while (!stack.isEmpty() || cur != null) {
      if (cur != null) {
        stack.push(cur);
        cur = cur.left;
      } else {
        cur = stack.pop();
        jsLog(cur.value + " ");
        cur = cur.right;
      }
    }
  }
}

function pos1(head) {
  jsLog("pos-order: ");
  if (head != null) {
    const s1 = new Stack();
    const s2 = new Stack();
    s1.push(head);
    while (!s1.isEmpty()) {
      head = s1.pop(); // 头 右 左
      s2.push(head);
      if (head.left != null) {
        s1.push(head.left);
      }
      if (head.right != null) {
        s1.push(head.right);
      }
    }
    // 左 右 头
    while (!s2.isEmpty()) {
      jsLog(s2.pop().value + " ");
    }
  }
  jsLog();
}

function pos2(h) {
  jsLog("pos-order: ");
  if (h != null) {
    const stack = new Stack();
    stack.push(h);
    let c = null;
    while (!stack.isEmpty()) {
      c = stack.peek();
      if (c.left != null && h != c.left && h != c.right) {
        stack.push(c.left);
      } else if (c.right != null && h != c.right) {
        stack.push(c.right);
      } else {
        jsLog(stack.pop().value + " ");
        h = c;
      }
    }
  }
  jsLog();
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
pos1(head);
jsLog("========");
pos2(head);
jsLog("========");
