import { ELEMENT_SCAN_INIT } from "@/utils/element-scanner";
import store from "@/store/index";

export const ADD_ROW = "ADD_ROW";
export const DELETE_ROW = "DELETE_ROW";

const scriptActions = {
  [ADD_ROW]: _callBack => {
    ELEMENT_SCAN_INIT(element => {
      return _callBack(element);
    });
  }
};

chrome.runtime.onMessage.addListener(function(message) {
  if (message.from !== "background") {
    return false;
  }

  if (message.action === ADD_ROW) {
    scriptActions.ADD_ROW(element => {
      store.commit("ADD_VALUE_TRACKING_ROW", element);
    });
  }
});
