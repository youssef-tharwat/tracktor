<template>
  <div class="flex items-center shadow-sm round bg-gray-100 p-3">
    <div class="flex items-center">
      <div class="has-text-dark text-lg mr-2 font-normal">Tracktor</div>
    </div>
    <div class="ml-auto flex items-center">
      <div class="flex items-center">
        <button-arrow
          left
          @click.native="back"
          v-if="getCanGoBack"
        ></button-arrow>
        <button-arrow
          right
          @click.native="next"
          v-if="getCanGoNext"
        ></button-arrow>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonArrow from "@/components/ui/button/ButtonArrow";
import { mapGetters } from "vuex";

export default {
  name: "NavigationHeader",
  components: { ButtonArrow },
  computed: {
    ...mapGetters(["getCanGoBack", "getCanGoNext"])
  },
  methods: {
    next() {
      this.$store.commit("SET_NEXT_STEP");
    },
    back() {
      this.$store.commit("SET_PREVIOUS_STEP");
    }
  }
};
</script>
