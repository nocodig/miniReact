/*
 * @Author: lifang
 * @Date: 2021-11-24 21:45:55
 * @LastEditTime: 2021-12-13 23:40:15
 * @LastEditors: lifang
 * @Description: 
 * @FilePath: /miniReact/src/MiniReact/diff.js
 */
import mountElement from "./mountElement";
import updateTextNode from "./updateTextNode";

export default function diff(virtualDOM, container, oldDOM) {
  const oldVirtualDOM = oldDOM?._virtualDOM
  if (!oldDOM) {
    // 原来没有旧节点，直接挂载新的节点即可
    mountElement(virtualDOM, container,)
  } else if (oldVirtualDOM?.type === virtualDOM.type) {
    if (virtualDOM.type === 'text') {
      // 跟新节点内容
      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
    } else {
      // 更新元素节点属性
    }
    console.log('123');
  }
  // 存在旧节点，需要对新旧节点进行比对更新
}
