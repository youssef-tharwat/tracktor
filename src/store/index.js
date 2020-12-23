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
        step: 0
      },
      {
        name: "step-value-tracking",
        component: () =>
          /* webpackChunkName: "step-value-tracking" */ import(
            "@/components/step/method/value-tracking/StepValueTracking"
          ),
        step: 1
      },
      {
        name: "step-setting",
        component: () =>
          /* webpackChunkName: "step-setting" */ import(
            "@/components/step/setting/StepSetting"
          ),
        step: 2
      }
    ],
    step: 0
  },
  mutations: {
    SET_NEXT_STEP(state) {
      ++state.step;
    },
    SET_PREVIOUS_STEP(state) {
      --state.step;
    }
  },
  actions: {},
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
    getProgressBarValue: state => `${state.step} / 2`
  }
});
