<template>
  <b-progress :value="value"></b-progress>
</template>

<script>
export default {
  name: "NavigationFooter",
  props: {
    value: { type: Number, default: 0, required: true }
  }
};
</script>

<style scoped></style>
