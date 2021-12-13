/*
 * @Author: lifang
 * @Date: 2021-12-11 16:20:10
 * @LastEditTime: 2021-12-13 22:02:05
 * @LastEditors: lifang
 * @Description: 渲染Component
 * @FilePath: /miniReact/src/MiniReact/mountComponent.js
 */
import isFunction from "./isFunction";
import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";

export default function mountComponent(virtualDOM, container) {
  let nextVirtualDOM = null;
  if (isFunctionComponent(virtualDOM)) {
    // 函数组件
    nextVirtualDOM = buildFunctionComponent(virtualDOM)
  } else {
    // 类组件
    nextVirtualDOM = buildClassComponent(virtualDOM)
  }

  if (isFunction(nextVirtualDOM)) {
    mountComponent(nextVirtualDOM, container)
  } else {
    mountNativeElement(nextVirtualDOM, container)
  }
}

function buildFunctionComponent(virtualDom) {
  return virtualDom.type()
}

function buildClassComponent(virtualDom) {
  // 由于virtualDom的type是一个类，我们需要先对其进行实例化，然后调用render方法
  const component = new virtualDom.type()
  return component.render(virtualDom.props)
}
