// 监听标签页创建事件
chrome.tabs.onCreated.addListener(function (tab) {
    sendMessageToAllTabs(tab);
})

function sendMessageToAllTabs(message) {
    chrome.tabs.query({}, function (tabs) {
        let main_url = ''
        chrome.storage.local.get('entryName', function (res) {
            main_url = res.entryName
        })
        tabs.forEach(function (tab) {
            if (tab.url.includes(main_url) || tab.pendingUrl.includes(main_url)) {
                chrome.tabs.sendMessage(tab.id, tabs);
            }
        });
        setTimeout(function () {
            chrome.storage.local.get('entryName', function (res) {
                chrome.tabs.query({}, function (tabs) {
                    console.log(tabs)
                    let includes_url = res.entryName || ""
                    console.log(includes_url)
                    for (let i = 1; i < tabs.length; i++) {
                        if (tabs[i].url.includes(includes_url) || (tabs[i].pendingUrl && tabs[i].pendingUrl.includes(includes_url))) {
                            continue
                        }
                        chrome.tabs.remove(tabs[i].id)
                    }
                }) 
            })
        }, 3000)
    });
}
