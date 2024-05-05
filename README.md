## 仅供学习参考
### 这是一个浏览器扩展
在扩展选项填写要发送的网页url，扩展会在浏览器创建标签页的时候，向该url发送当前的所有标签url

在对应的url项目页面下
``` // 监听来自扩展的消息
window.addEventListener("message", (event) => {
  // 检查消息来源是否是扩展
  if (event.source === window && event.data && event.data.type === "FROM_EXTENSION") {
    // 处理来自扩展的消息
    console.log('computed:   ', tabs.getTabs)
    console.log("收到来自扩展的消息：", event.data.data);
  }
});
```
