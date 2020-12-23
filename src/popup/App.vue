<template>
  <div id="app" class="font-sans h-60 w-full flex flex-col container">
    <wizard></wizard>
  </div>
</template>

<script>
import Wizard from "@/components/Wizard";

export default {
  name: "App",
  components: { Wizard }
};
</script>
