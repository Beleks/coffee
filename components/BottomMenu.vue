<template>
  <div class="bottom_menu">
    <div @click="changeTab('coffe')">
      <CoffeList :check="chose === 'coffe'"></CoffeList>
    </div>
    <div @click="changeTab('history')">
      <CoffeHistory :check="chose === 'history'"></CoffeHistory>
    </div>
  </div>
</template>

<script>
import CoffeList from "./svg/CoffeList.vue";
import CoffeHistory from "./svg/CoffeHistory.vue";

export default {
  data: () => {
    return {
      chose: "coffe",
    };
  },
  computed: {},
  methods: {
    changeTab(tab) {
      this.chose = tab;
      this.$emit("changeTab", this.chose);
    },
  },

  components: {
    CoffeList,
    CoffeHistory,
  },
};
</script>

<style lang="scss" scoped>
.bottom_menu {
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  padding: 0.8em 0;
  background-color: rgb(70, 66, 63);
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.15);
  bottom: 0;
  width: 100%;
  z-index: 100;
  div {
    display: flex;
    align-items: center;
  }
}
.bottom_menu > div {
  width: 50%;
  display: flex;
  justify-content: center;
}
</style>