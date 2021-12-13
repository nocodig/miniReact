/*
 * @Author: lifang
 * @Date: 2021-11-24 21:44:27
 * @LastEditTime: 2021-12-13 22:50:33
 * @LastEditors: lifang
 * @Description: render方法
 * @FilePath: /miniReact/src/MiniReact/render.js
 */
import diff from "./diff";

//  oldDOM是取的container的第一个子节点，每个组件外面有个根元素，即可获取到组件的virtualDOM
export default function render(virtualDOM, container, oldDOM = container.firstChild) {
  // 暴露出外部调用方法，需要考虑两种情况
  // 1. 没有旧的节点，直接调用，挂载新的节点
  // 2. 原来已经挂载节点，需要对新就节点进行比对，然后进行DOM更新
  diff(virtualDOM, container, oldDOM);
}
