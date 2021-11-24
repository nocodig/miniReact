/*
 * @Author: lifang
 * @Date: 2021-11-24 22:25:45
 * @LastEditTime: 2021-11-24 22:37:25
 * @LastEditors: lifang
 * @Description: 为元素设置属性
 * @FilePath: /miniReact/src/MiniReact/updateNodeElement.js
 */
export default function updateNodeElement(newElement, virtualDOM) {
  const newProps = virtualDOM.props;

  Object.keys(newProps).forEach(propName => {
    const propValue = newProps[propName]

    if (propName.slice(0, 2) === 'on') {
      // 为元素添加事件，事件函数前面都是通on开头
      const eventName = propName.toLowerCase().slice(2)

      newElement.addEventListener(eventName, propValue)
    } else if (propName === 'value' || propValue === 'checked') {
      // 为元素添加value、checked属性，这两个属性不能setAttribute设置
      newElement[propName] = propValue
    } else if (propName !== 'children') {
      // children 不作为属性存在要进行过滤
      if (propName === 'className') {
        // className需要转换成class
        newElement.setAttribute('class', propValue)
      } else {
        newElement.setAttribute(propName, propValue)
      }
    }
  })
}
