<template>
  <div>
    <navigation-header></navigation-header>
    <navigation-footer :value="20"></navigation-footer>
  </div>
</template>

<script>
import NavigationHeader from "@/components/navigation/NavigationHeader";
import NavigationFooter from "@/components/navigation/NavigationFooter";
export default {
  name: "Wizard",
  components: { NavigationFooter, NavigationHeader }
};
</script>

<style scoped></style>
