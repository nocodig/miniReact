# 跟着适配学习简易React

## 一、createElement

createElement参数如下：
- type：标签名称或者React组件类型
- props：组件或者节点上的参数比如class等
- children：子节点

注意点：
- 直接是一个文本节点，那么此时需要将文本转化成一个对象
- 在编写过程中，一些节点是bool值或者是null，需要将这部分值去除

详情见```src/MiniReact/createElement.js```

