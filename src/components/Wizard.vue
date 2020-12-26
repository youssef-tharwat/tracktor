<template>
  <div class="h-full flex flex-col justify-between">
    <navigation-header></navigation-header>
    <div class="wizard-content p-3">
      <component :is="getCurrentStep.component"></component>
    </div>
    <navigation-footer
      :text="getProgressBarValue"
      :value="getCurrentStep.percentage"
    ></navigation-footer>
  </div>
</template>

<script>
import NavigationHeader from "@/components/navigation/NavigationHeader";
import NavigationFooter from "@/components/navigation/NavigationFooter";
import { mapGetters } from "vuex";

export default {
  name: "Wizard",
  components: { NavigationFooter, NavigationHeader },
  computed: {
    ...mapGetters(["getCurrentStep", "getProgressBarValue"])
  }
};
</script>

<style scoped></style>
