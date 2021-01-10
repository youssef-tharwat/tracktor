let contentTabId;

chrome.runtime.onMessage.addListener(function(msg, sender) {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    contentTabId = tabs[0].id;

    if (msg.from === "content") {
      //get message from content
      contentTabId = sender.id;
    }
    if (msg.from === "popup") {
      //get message from popup
      chrome.tabs.sendMessage(contentTabId, {
        //send it to content script
        from: "background",
        action: msg.action
      });
    }
  });
});
