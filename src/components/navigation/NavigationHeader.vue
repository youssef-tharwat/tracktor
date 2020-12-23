<template>
  <div class="flex items-center shadow-sm round bg-gray-50 p-3">
    <div class="flex items-center">
      <div class="has-text-dark text-lg mr-2 font-normal">Tracktor</div>
    </div>
    <div class="ml-auto flex items-center">
      <div class="flex items-center mr-3">
        <button-arrow left @click="back"></button-arrow>
        <button-arrow right @click="next"></button-arrow>
      </div>
      <button-settings></button-settings>
    </div>
  </div>
</template>

<script>
import ButtonArrow from "@/components/ui/button/ButtonArrow";
import ButtonSettings from "@/components/ui/button/ButtonSettings";
export default {
  name: "NavigationHeader",
  components: { ButtonSettings, ButtonArrow },
  computed: {
    currentStep() {
      return true;
    }
  },
  methods: {
    next() {},
    back() {}
  }
};
</script>
