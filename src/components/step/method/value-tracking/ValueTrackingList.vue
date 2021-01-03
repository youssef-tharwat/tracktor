<template>
  <div>
    <div class="flex">
      <div class="ml-auto flex items-center">
        <button-remove
          class="mr-1"
          v-if="valueTrackingList.length > 0"
          @click.native="handleRemoveRow"
        ></button-remove>
        <div v-if="valueTrackingList.length === 0" class="mr-2">
          <div class="text-sm font-medium">Start tracking</div>
        </div>
        <button-add
          v-if="valueTrackingList.length <= 5"
          @click.native="handleAddRow"
        ></button-add>
      </div>
    </div>
    <div class="py-3">
      <div
        class="flex flex-col overflow-y-auto h-32 pt-3"
        v-if="valueTrackingList"
      >
        <value-tracking-row
          class="mb-4"
          v-for="(item, index) in valueTrackingList"
          :key="index"
          :element="item"
        ></value-tracking-row>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonAdd from "@/components/ui/button/ButtonAdd";
import ValueTrackingRow from "@/components/step/method/value-tracking/ValueTrackingRow";
import ButtonRemove from "@/components/ui/button/ButtonRemove";
import { ADD_ROW } from "@/content-scripts/content-script";

export default {
  name: "ValueTrackingList",
  components: { ButtonRemove, ValueTrackingRow, ButtonAdd },
  computed: {
    valueTrackingList() {
      return this.$store.getters["getValueTrackingList"];
    }
  },
  methods: {
    handleAddRow() {
      chrome.runtime.sendMessage({
        //send a message to the background script
        from: "popup",
        action: ADD_ROW
      });
    },
    handleRemoveRow() {
      this.$store.commit("REMOVE_VALUE_TRACKING_ROW");
    }
  }
};
</script>

<style scoped></style>
