/*
 * @Author: lifang
 * @Date: 2021-11-23 21:20:39
 * @LastEditTime: 2021-11-23 22:41:37
 * @LastEditors: lifang
 * @Description: 
 * @FilePath: /tiny-react/src/TinyReact/createElement.js
 */
function createElement(type, props, ...children) {
  const childrenItems = [].concat(children).reduce((result, item) => {
    if (item !== false && item!==null && item!==true) {
      if (item instanceof Object) {
        result.push(item)
      } else {
        result.push(createElement('text', { textContent: item }))
      }
    }

    return result
   
  },[])

  return {
    type,
    props: { ...props, children: childrenItems},
    children: childrenItems
  }
}

export default createElement