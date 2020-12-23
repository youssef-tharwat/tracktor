<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <wizard></wizard>
  </div>
</template>

<script>
// @ is an alias to /src
import Wizard from "@/components/Wizard";

export default {
  name: "Home",
  components: {
    Wizard
  }
};
</script>
