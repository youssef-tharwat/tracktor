<template>
  <div class="flex items-center">
    <div class="flex-1">
      <b-field label="Value" label-position="inside">
        <b-input
          size="is-small"
          type="is-dark"
          :value="element.value"
          disabled
        ></b-input>
      </b-field>
    </div>
    <div class="flex-1 ml-2">
      <b-field label="Attributes" label-position="inside">
        <b-select size="is-small" expanded>
          <option
            v-for="(option, index) in Object.keys(element.styleOptions)"
            :value="option"
            :key="index"
          >
            {{ option }}
          </option>
        </b-select>
      </b-field>
    </div>
    <div class="ml-2">
      <switch-tracking></switch-tracking>
    </div>
  </div>
</template>

<script>
import SwitchTracking from "@/components/ui/switch/SwitchTracking";
export default {
  name: "ValueTrackingRow",
  components: { SwitchTracking },
  props: {
    element: { type: Object, required: true }
  }
};
</script>
