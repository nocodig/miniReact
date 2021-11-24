/*
 * @Author: lifang
 * @Date: 2021-11-24 21:47:10
 * @LastEditTime: 2021-11-24 21:55:00
 * @LastEditors: lifang
 * @Description:
 * @FilePath: /miniReact/src/MiniReact/mountElement.js
 */
import mountNativeElement from "./mountNativeElement";

export default function mountElement(virtualDOM, container) {
  // 存在两种情况，考虑是nativeDOM，还是ComponentDOM
  mountNativeElement(virtualDOM, container);
}
