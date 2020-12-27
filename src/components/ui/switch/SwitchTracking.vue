<template>
  <div class="field">
    <b-switch v-model="isSwitched" type="is-success" size="is-small"></b-switch>
  </div>
</template>

<script>
import { ELEMENT_SCAN_INIT, ELEMENT_SCAN_STOP } from "@/utils/element-scanner";

export default {
  name: "SwitchTracking",
  data() {
    return {
      isSwitched: false,
      payload: {}
    };
  },
  watch: {
    async isSwitched(value) {
      if (value) {
        await ELEMENT_SCAN_INIT(async element => {
          this.payload = await element;
          console.log(this.payload);
        });
      } else {
        ELEMENT_SCAN_STOP();
      }
    }
  }
};
</script>
