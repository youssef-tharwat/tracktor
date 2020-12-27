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
          :payload="item.payload"
          :selectedValue="item.selectedValue"
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
  data() {
    return {
      valueTrackingList: [
        {
          payload: {
            cssSelector: {
              value: "",
              text: ""
            },
            cssAttribute: ""
          },
          selectedValue: {
            availableCssAttributes: []
          }
        }
      ],
      defaultValueTrackingRow: {
        payload: {
          cssSelector: {
            value: "",
            text: ""
          },
          cssAttribute: ""
        },
        selectedValue: {
          availableCssAttributes: []
        }
      }
    };
  },
  methods: {
    handleAddRow() {
      this.valueTrackingList.push(this.defaultValueTrackingRow);
    },
    handleRemoveRow() {
      this.valueTrackingList.pop();
    }
  }
};
</script>

<style scoped></style>
