<template>
  <div class="shadow-sm round bg-gray-100 p-3">
    <b-progress :value="value" size="is-small" show-value>
      {{ text }}
    </b-progress>
  </div>
</template>

<script>
export default {
  name: "NavigationFooter",
  props: {
    value: { type: Number, require: true },
    text: { type: String, require: true }
  }
};
</script>

<style scoped></style>
