// 接收消息并处理
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    window.postMessage({ type: "FROM_EXTENSION", data: message }, "*");
});
