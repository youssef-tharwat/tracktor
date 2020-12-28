import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    payload: {
      url: "",
      method: {
        screenshot: {
          active: false
        },
        valueTracking: {
          active: false,
          values: [{ value: "", styleOptions: "", styleSelected: "" }]
        }
      },
      userConfiguration: {
        email: "test@test.com",
        duration: 10,
        frequency: 5
      }
    },
    steps: [
      {
        name: "step-selection",
        component: () =>
          /* webpackChunkName: "step-selection" */ import(
            "@/components/step/selection/StepSelection"
          ),
        step: 0,
        percentage: 0
      },
      {
        name: "step-value-tracking",
        component: () =>
          /* webpackChunkName: "step-value-tracking" */ import(
            "@/components/step/method/value-tracking/StepValueTracking"
          ),
        step: 1,
        percentage: 55
      },
      {
        name: "step-setting",
        component: () =>
          /* webpackChunkName: "step-setting" */ import(
            "@/components/step/setting/StepSetting"
          ),
        step: 2,
        percentage: 90
      },
      {
        name: "step-done",
        component: () =>
          /* webpackChunkName: "step-done" */ import(
            "@/components/step/done/StepDone"
          ),
        step: 3,
        percentage: 100
      }
    ],
    step: 1,
    defaultValueTrackingRow: {
      value: "",
      styleOptions: "",
      styleSelected: ""
    }
  },
  mutations: {
    SET_NEXT_STEP(state) {
      state.payload.method.screenshot.active ? (state.step = 2) : ++state.step;
    },
    SET_PREVIOUS_STEP(state) {
      state.payload.method.screenshot.active ? (state.step = 0) : --state.step;
    },
    SET_URL(state, data) {
      state.payload.url = data;
    },
    SET_METHOD_SCREENSHOT(state) {
      state.payload.method.screenshot.active = true;
      state.payload.method.valueTracking.active = false;
    },
    SET_METHOD_VALUE_TRACKING(state) {
      state.payload.method.valueTracking.active = true;
      state.payload.method.screenshot.active = false;
    },
    ADD_VALUE_TRACKING_ROW(state, data) {
      state.payload.method.valueTracking.values.push(data);
    },
    REMOVE_VALUE_TRACKING_ROW(state) {
      state.payload.method.valueTracking.values.pop();
    }
  },
  actions: {
    ADD_VALUE_TRACKING_ROW({ state, commit }) {
      commit("ADD_VALUE_TRACKING_ROW", state.defaultValueTrackingRow);
    },
    REMOVE_VALUE_TRACKING_ROW({ commit }) {
      commit("REMOVE_VALUE_TRACKING_ROW");
    }
  },
  getters: {
    getCurrentStep: state => state.steps[state.step],
    getCanGoNext: state => {
      const URL = !!state.payload.url;
      const METHOD =
        state.payload.method.screenshot.active ||
        state.payload.method.valueTracking.active;

      const VALUE_TRACKING = !!state.payload.method.valueTracking.values.length;

      switch (state.step) {
        case 0:
          return URL && METHOD;
        case 1:
          return VALUE_TRACKING;
        case 2:
          return false;
      }
    },
    getCanGoBack: state => state.step > 0,
    getCanSend: state => {
      const USER_CONFIGURATION =
        state.payload.userConfiguration.email &&
        state.payload.userConfiguration.duration &&
        state.payload.userConfiguration.frequency;
      return state.step === 2 && USER_CONFIGURATION;
    },
    getValueTrackingList: state => state.payload.method.valueTracking.values
  }
});
