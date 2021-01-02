export function sendAddRowMessage() {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const ACTIVE_TAB_ID = tabs[0].id;
    console.log(ACTIVE_TAB_ID);
    if (tabs.length) chrome.tabs.sendMessage(ACTIVE_TAB_ID, true);
  });
}

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
