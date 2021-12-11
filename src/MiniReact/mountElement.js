/*
 * @Author: lifang
 * @Date: 2021-11-24 21:47:10
 * @LastEditTime: 2021-12-11 16:36:32
 * @LastEditors: lifang
 * @Description:
 * @FilePath: /miniReact/src/MiniReact/mountElement.js
 */
import isFunction from "./isFunction";
import mountNativeElement from "./mountNativeElement";
import mountComponent from "./mountComponent";

export default function mountElement(virtualDOM, container) {
  if (isFunction(virtualDOM)) {
    // 渲染Component
    mountComponent(virtualDOM, container)
  } else {
    // 渲染NativeElement
    mountNativeElement(virtualDOM, container);
  }
}
