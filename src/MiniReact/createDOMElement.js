import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";

export default function createDOMElement(virtualDOM) {
  let newElement = null;
  if (virtualDOM.type === "text") {
    newElement = document.createTextNode(virtualDOM.props.textContent);
  } else {
    newElement = document.createElement(virtualDOM.type);
    // 为元素设置属性
    updateNodeElement(newElement, virtualDOM)
  }

  // 用户后面做比较
  newElement._virtualDOM = virtualDOM

  virtualDOM.children.forEach((child) => {
    // 此时调用mountElement由于不知子几点是否存在reactDOM
    mountElement(child, newElement);
  });

  return newElement;
}
