import { ELEMENT_SCAN_INIT } from "@/utils/element-scanner";
import store from "@/store/index";

// chrome.runtime.onMessage.addListener(handleAddRow);

async function handleAddRow() {
  // console.log(message, sender, sendResponse);
  await ELEMENT_SCAN_INIT(async element => {
    const response = await element;
    store.commit("ADD_VALUE_TRACKING_ROW", response);
    console.log(response);
  });
}

handleAddRow().then(res => console.log(res));
