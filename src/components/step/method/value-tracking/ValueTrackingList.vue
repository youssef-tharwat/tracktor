<template>
  <div>
    <div class="flex">
      <div class="ml-auto flex items-center">
        <button-remove
          class="mr-1"
          v-if="valueTrackingList.length > 1"
          @click.native="handleRemoveRow"
        ></button-remove>
        <button-add
          v-if="valueTrackingList.length <= 5"
          @click.native="handleAddRow"
        ></button-add>
      </div>
    </div>
    <div class="py-3">
      <div class="flex flex-col overflow-y-auto h-32">
        <value-tracking-row
          class="mb-2"
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
export default {
  name: "ValueTrackingList",
  components: { ButtonRemove, ValueTrackingRow, ButtonAdd },
  computed: {
    valueTrackingList() {
      return this.$store.getters["getValueTrackingList"];
    }
  },
  data() {
    return {};
  },
  methods: {
    handleAddRow() {
      this.$store.dispatch("ADD_VALUE_TRACKING_ROW");
    },
    handleRemoveRow() {
      this.$store.dispatch("REMOVE_VALUE_TRACKING_ROW");
    }
  }
};
</script>

<style scoped></style>
