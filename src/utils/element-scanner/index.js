import debounce from "lodash/debounce";
import pick from "lodash/pick";

const GET_MOUSE_LOCATION = e => {
  return {
    x: e.clientX,
    y: e.clientY
  };
};

const GET_ELEMENT_MOUSE_OVER = (x, y) => {
  return document.elementFromPoint(x, y);
};

const GET_ELEMENT_MOUSE_OVER_VALUES = element => {
  const ELEMENT_STYLES_REQUIRED = [
    "color",
    "backgroundColor",
    "textDecoration",
    "textAlign",
    "fontSize",
    "fontFamily",
    "fontStyle",
    "fontWeight",
    "fontVariant",
    "border",
    "borderColor"
  ];
  return {
    styleOptions: pick(
      window.getComputedStyle(element),
      ELEMENT_STYLES_REQUIRED
    ),
    styleSelected: "",
    value: element.innerText
  };
};

const SET_ELEMENT_STYLING = element => {
  element.classList.add("tracktor-element-highlighted");
  element.style["border"] = "1px solid red";
};

const REMOVE_ELEMENT_STYLING = element => {
  if (element.classList.contains("tracktor-element-highlighted"))
    element.style["border"] = "unset";
  element.classList.remove("tracktor-element-highlighted");
};

export const ELEMENT_SCAN_INIT = _callback => {
  let globalElement = {
    el: null,
    styleOptions: "",
    styleSelected: "",
    value: ""
  };

  const HANDLE_ELEMENT_CLICK = () => {
    ELEMENT_SCAN_STOP();
    globalElement.el.removeEventListener("click", HANDLE_ELEMENT_CLICK);
    _callback(globalElement);
  };

  document.onmousemove = debounce(e => {
    const COORDINATES = GET_MOUSE_LOCATION(e);

    let localElement = {
      el: GET_ELEMENT_MOUSE_OVER(COORDINATES.x, COORDINATES.y)
    };

    if (UTIL_ELEMENT_CHANGED_CHECKER(localElement, globalElement)) {
      // Remove styling & delete click listener from previously hovered element if it exists
      if (globalElement.el) {
        REMOVE_ELEMENT_STYLING(globalElement.el);
        globalElement.el.removeEventListener("click", HANDLE_ELEMENT_CLICK);
      }

      // New element is being hovered
      globalElement.el = localElement.el;
      globalElement.styleOptions = GET_ELEMENT_MOUSE_OVER_VALUES(
        localElement.el
      ).styleOptions;
      globalElement.value = GET_ELEMENT_MOUSE_OVER_VALUES(
        localElement.el
      ).value;

      SET_ELEMENT_STYLING(globalElement.el);

      globalElement.el.addEventListener("click", HANDLE_ELEMENT_CLICK);
    }
  }, 15);
};

export const ELEMENT_SCAN_STOP = () => {
  document.onmousemove = () => {};
  document
    .querySelectorAll(".tracktor-element-highlighted")
    .forEach(e => REMOVE_ELEMENT_STYLING(e));
};

const UTIL_ELEMENT_CHANGED_CHECKER = (element1, element2) =>
  element1.el !== element2.el;
