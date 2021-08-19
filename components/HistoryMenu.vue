<template>
  <div class="bg">
    <history-menu-item
      v-for="(item, index) in history"
      :key="index"
      :itemHistory="item"
    ></history-menu-item>
  </div>
</template>

<script>
import HistoryMenuItem from "./HistoryMenuItem.vue";

export default {
  computed: {
    history() {
      return this.$store.state.history;
    },
  },
  components: { HistoryMenuItem },
};
</script>

<style lang="scss" scoped>
.bg {
  padding-bottom: 50px;
}
</style>