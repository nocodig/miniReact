/*
 * @Author: lifang
 * @Date: 2021-12-11 16:17:53
 * @LastEditTime: 2021-12-11 16:19:36
 * @LastEditors: lifang
 * @Description: 判断是否是方法
 * @FilePath: /miniReact/src/MiniReact/isFunction.js
 */
export default function isFunction(virtualDOM) {
  return virtualDOM && typeof virtualDOM.type === 'function'
}
