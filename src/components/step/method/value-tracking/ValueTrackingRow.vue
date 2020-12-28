<template>
  <div class="flex items-center">
    <div class="flex-1">
      <b-field label="Value" label-position="on-border">
        <b-input
          size="is-small"
          type="is-dark"
          :value="element.value"
          disabled
        ></b-input>
      </b-field>
    </div>
    <div class="flex-1 ml-2">
      <b-field label="Attributes" label-position="on-border">
        <b-select size="is-small" expanded>
          <option
            v-for="(option, index) in Object.keys(element.styleOptions)"
            :value="option"
            :key="index"
          >
            {{ startCaseFilter(option) }}
          </option>
        </b-select>
      </b-field>
    </div>
  </div>
</template>

<script>
import startCase from "lodash/startCase";
export default {
  name: "ValueTrackingRow",
  props: {
    element: { type: Object, required: true }
  },
  methods: {
    startCaseFilter(text) {
      return startCase(text);
    }
  }
};
</script>
