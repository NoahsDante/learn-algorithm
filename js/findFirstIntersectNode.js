/**
 * 单链表相交问题
 *
 * 怎样判断 链表是否有环
 *
 */
class Node {
  constructor(val) {
    this.value = val;
    this.next = null
  }
}

/**
 * 要区分有环相交与无环相交
 * @param head1
 * @param head2
 * @returns {null}
 */

function getIntersectNode(head1, head2) {
  if (head1 == null || head2 == null) {
    return null;
  }
  const loop1 = getLoopNode(head1);
  const loop2 = getLoopNode(head2);
  if (loop1 == null && loop2 == null) {
    return noLoop(head1, head2);
  }
  if (loop1 != null && loop2 != null) {
    return bothLoop(head1, loop1, head2, loop2);
  }
  return null;
}

// 找到链表第一个入环节点，如果无环，返回null
function getLoopNode(head) {
  if (head == null || head.next == null || head.next.next == null) {
    return null;
  }
  // n1 慢  n2 快
   let slow = head.next; // n1 -> slow
   let  fast = head.next.next; // n2 -> fast
  // 快追上慢，快慢相等
  while (slow != fast) {
    if (fast.next == null || fast.next.next == null) {
      return null;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
  // slow fast  相遇
  fast = head; // n2 -> walk again from head
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

// 如果两个链表都无环，返回第一个相交节点，如果不想交，返回null
function noLoop(head1, head2) {
  if (head1 == null || head2 == null) {
    return null;
  }
  let cur1 = head1;
  let cur2 = head2;
  let n = 0;
  //  找到两个单链表长度差值
  while (cur1.next != null) {
    n++;
    cur1 = cur1.next;
  }
  while (cur2.next != null) {
    n--;
    cur2 = cur2.next;
  }
  if (cur1 != cur2) {
    return null;
  }
  // n  :  链表1长度减去链表2长度的值
  cur1 = n > 0 ? head1 : head2; // 谁长，谁的头变成cur1
  cur2 = cur1 == head1 ? head2 : head1; // 谁短，谁的头变成cur2
  n = Math.abs(n);
  while (n != 0) {
    n--;
    cur1 = cur1.next;
  }
  while (cur1 != cur2) {
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
  return cur1;
}

// 两个有环链表，返回第一个相交节点，如果不想交返回null
function bothLoop( head1,  loop1,  head2,  loop2) {
  let cur1 = null;
  let cur2 = null;
  if (loop1 == loop2) {
    cur1 = head1;
    cur2 = head2;
    let n = 0;
    while (cur1 != loop1) {
      n++;
      cur1 = cur1.next;
    }
    while (cur2 != loop2) {
      n--;
      cur2 = cur2.next;
    }
    cur1 = n > 0 ? head1 : head2;
    cur2 = cur1 == head1 ? head2 : head1;
    n = Math.abs(n);
    while (n != 0) {
      n--;
      cur1 = cur1.next;
    }
    while (cur1 != cur2) {
      cur1 = cur1.next;
      cur2 = cur2.next;
    }
    return cur1;
  } else {
    // 公用一个环 相交
    cur1 = loop1.next;
    while (cur1 != loop1) {
      if (cur1 == loop2) {
        return loop1;
      }
      cur1 = cur1.next;
    }
    return null;
  }
}


let head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);
head1.next.next.next.next = new Node(5);
head1.next.next.next.next.next = new Node(6);
head1.next.next.next.next.next.next = new Node(7);

// 0->9->8->6->7->null
let head2 = new Node(0);
head2.next = new Node(9);
head2.next.next = new Node(8);
jsLog(getIntersectNode(head1, head2)?.value);

// 1->2->3->4->5->6->7->4...
head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);
head1.next.next.next.next = new Node(5);
head1.next.next.next.next.next = new Node(6);
head1.next.next.next.next.next.next = new Node(7);
head1.next.next.next.next.next.next = head1.next.next.next; // 7->4

// 0->9->8->2...
head2 = new Node(0);
head2.next = new Node(9);
head2.next.next = new Node(8);
head2.next.next.next = head1.next; // 8->2
jsLog(getIntersectNode(head1, head2).value);

// 0->9->8->6->4->5->6..
head2 = new Node(0);
head2.next = new Node(9);
head2.next.next = new Node(8);
head2.next.next.next = head1.next.next.next.next.next; // 8->6
jsLog(getIntersectNode(head1, head2).value);