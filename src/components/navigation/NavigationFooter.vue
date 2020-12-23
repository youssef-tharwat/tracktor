<template>
  <div class="shadow-sm round bg-gray-50 p-3">
    <b-progress :value="currentStep" size="is-small" show-value>
      {{ currentStepText }}
    </b-progress>
  </div>
</template>

<script>
export default {
  name: "NavigationFooter",
  computed: {
    currentStep() {
      return 20;
    },
    currentStepText() {
      return "1 / 4";
    }
  }
};
</script>

<style scoped></style>
