<template>
  <b-button
    :native-type="nativeType"
    :type="type"
    :loading="loading"
    :expanded="expanded"
    :outlined="outlined"
    :inverted="inverted"
    :size="size"
    v-on="$listeners"
    :rounded="rounded"
  >
    <slot />
  </b-button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: undefined
    },
    nativeType: {
      type: String,
      default: undefined
    },
    loading: {
      type: Boolean
    },
    expanded: {
      type: Boolean
    },
    outlined: {
      type: Boolean
    },
    inverted: {
      type: Boolean
    },
    size: {
      type: String,
      default: undefined
    },
    rounded: {
      type: Boolean
    }
  }
};
</script>
