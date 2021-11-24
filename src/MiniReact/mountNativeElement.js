/*
 * @Author: lifang
 * @Date: 2021-11-24 21:49:23
 * @LastEditTime: 2021-11-24 22:08:20
 * @LastEditors: lifang
 * @Description:
 * @FilePath: /miniReact/src/MiniReact/mountNativeElement.js
 */
import createDOMElement from "./createDOMelement";

export default function mountNativeElement(virtualDOM, container) {
  // 考虑此时节点存在文本节点和普通节点
  let newElement = createDOMElement(virtualDOM);

  container.appendChild(newElement);
}
