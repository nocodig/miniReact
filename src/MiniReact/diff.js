/*
 * @Author: lifang
 * @Date: 2021-11-24 21:45:55
 * @LastEditTime: 2021-11-24 21:53:54
 * @LastEditors: lifang
 * @Description: 
 * @FilePath: /miniReact/src/MiniReact/diff.js
 */
import mountElement from "./mountElement";

export default function diff(virtualDOM, container, oldDOM) {
  if (!oldDOM) {
    // 原来没有旧节点，直接挂载新的节点即可
    mountElement(virtualDOM, container,)
  }
  // 存在旧节点，需要对新旧节点进行比对更新
}
