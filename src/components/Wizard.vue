<template>
  <div class="h-full flex flex-col justify-between">
    <navigation-header></navigation-header>
    <component is=""></component>
    <navigation-footer :value="20"></navigation-footer>
  </div>
</template>

<script>
import NavigationHeader from "@/components/navigation/NavigationHeader";
import NavigationFooter from "@/components/navigation/NavigationFooter";
export default {
  name: "Wizard",
  components: { NavigationFooter, NavigationHeader },
  computed: {
    currentStep() {
      return 1;
    }
  }
};
</script>

<style scoped></style>
