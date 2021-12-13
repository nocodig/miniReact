import diff from "./diff"

/*
 * @Author: lifang
 * @Date: 2021-12-13 23:39:01
 * @LastEditTime: 2021-12-13 23:45:03
 * @LastEditors: lifang
 * @Description: 跟新文本节点内容
 * @FilePath: /miniReact/src/MiniReact/updateTextNode.js
 */
export default function updateTextNode(virtualDOM, oldVirtualDOM, oldDOM) {
  if (virtualDOM.props.textContent !== oldVirtualDOM.props.textContent) {
    oldDOM.textContent = virtualDOM.props.textContent
    oldDOM._virtualDOM = virtualDOM
  }

  virtualDOM.children((child, i) => {
    // 挂载节点就是我们就得oldDOM，旧的节点是oldDOM的子节点
    diff(child, oldDOM, oldDOM.childNodes[i])
  })
}
