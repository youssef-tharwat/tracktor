import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import store from "../store";
import "../assets/tailwind.css";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
