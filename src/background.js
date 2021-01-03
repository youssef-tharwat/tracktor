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

// chrome.runtime.onMessage.addListener(function(message, sender) {
//   console.log(message, sender);
//   chrome.tabs.sendMessage(sender.tab.id, message);
//   console.log("yesssss");
//
//
// });

// var tracktorLoaded = false;
//
// chrome.browserAction.onClicked.addListener(function(tab) {
//   if (
//     tab.url.indexOf("https://chrome.google.com") === 0 ||
//     tab.url.indexOf("chrome://") === 0
//   ) {
//     alert("Tracktor doesn't work on Google Chrome webstore!");
//
//     return;
//   }
//
//   if (!tracktorLoaded) {
//     chrome.tabs.executeScript({
//       file: "content-script.js"
//     });
//     tracktorLoaded = true;
//   }
// });

// chrome.runtime.onInstalled.addListener(function() {

// });
