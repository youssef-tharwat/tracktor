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
          values: [
            { cssSelector: "", cssAttribute: "" },
            { cssSelector: "", cssAttribute: "" }
          ]
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
        step: 1,
        percentage: 33
      },
      {
        name: "step-value-tracking",
        component: () =>
          /* webpackChunkName: "step-value-tracking" */ import(
            "@/components/step/method/value-tracking/StepValueTracking"
          ),
        step: 2,
        percentage: 66
      },
      {
        name: "step-setting",
        component: () =>
          /* webpackChunkName: "step-setting" */ import(
            "@/components/step/setting/StepSetting"
          ),
        step: 3,
        percentage: 100
      }
    ],
    step: 1
  },
  mutations: {
    SET_NEXT_STEP(state) {
      ++state.step;
    },
    SET_PREVIOUS_STEP(state) {
      --state.step;
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
    }
  },
  actions: {},
  getters: {
    getCurrentStep: state => state.steps[state.step - 1],
    getCanGoNext: state => {
      const URL = !!state.payload.url;
      const METHOD =
        state.payload.method.screenshot.active ||
        state.payload.method.valueTracking.active;

      const VALUE_TRACKING = !!state.payload.method.valueTracking.values.length;

      switch (state.step) {
        case 1:
          return URL && METHOD;
        case 2:
          return VALUE_TRACKING;
        case 3:
          return false;
      }
    },
    getCanGoBack: state => state.step > 1,
    getCanSend: state => {
      const USER_CONFIGURATION =
        state.payload.userConfiguration.email &&
        state.payload.userConfiguration.duration &&
        state.payload.userConfiguration.frequency;
      return state.step === 3 && USER_CONFIGURATION;
    },
    getProgressBarValue: state => `${state.step} / ${state.steps.length}`
  }
});
