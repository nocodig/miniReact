/*
 * @Author: lifang
 * @Date: 2021-12-11 16:20:10
 * @LastEditTime: 2021-12-11 17:16:51
 * @LastEditors: lifang
 * @Description: 渲染Component
 * @FilePath: /miniReact/src/MiniReact/mountComponent.js
 */
import isFunctionComponent from "./isFunctionComponent";

export default function mountComponent(virtualDOM, container) {
  if (isFunctionComponent(virtualDOM)) {
    // 函数组件
    console.log('函数组件')
  } else {
    // 类组件
  }
}
