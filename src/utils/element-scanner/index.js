import debounce from "lodash/debounce";

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
  return {
    style: window.getComputedStyle(element),
    value: element.value
  };
};

const SET_ELEMENT_STYLING = element => {
  element.classList.add("tracktor-element-highlighted");
};

const REMOVE_ELEMENT_STYLING = element => {
  element.classList.remove("tracktor-element-highlighted");
};

const HANDLE_ELEMENT_CLICK = element => {
  ELEMENT_SCAN_STOP();
  element.removeEventListener("click", () => {});
  console.log(element);
  return element;
};

export const ELEMENT_SCAN_INIT = async () => {
  let globalElement = {
    el: null,
    style: "",
    value: ""
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
        globalElement.el.removeEventListener("click", () => {});
      }

      // New element is being hovered
      globalElement.el = localElement.el;
      globalElement.style = GET_ELEMENT_MOUSE_OVER_VALUES(
        localElement.el
      ).style;
      globalElement.value = GET_ELEMENT_MOUSE_OVER_VALUES(
        localElement.el
      ).value;

      SET_ELEMENT_STYLING(globalElement.el);

      globalElement.el.addEventListener("click", () => {
        HANDLE_ELEMENT_CLICK(globalElement.el);
        return globalElement.el;
      });
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
