/*
 * @Author: lifang
 * @Date: 2021-12-11 17:02:34
 * @LastEditTime: 2021-12-11 17:11:31
 * @LastEditors: lifang
 * @Description: 判断是否是函数组件
 * @FilePath: /miniReact/src/MiniReact/isFunctionComponent.js
 */
import isFunction from "./isFunction"

export default function isFunctionComponent(virtualDOM) {
  const type = virtualDOM.type
  
  return (
    type && isFunction(virtualDOM) && !(type.prototype && type.prototype.render)
  )
}