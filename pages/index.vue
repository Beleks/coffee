<template>
  <div>
    <!-- Два компонента modal -->
    <Result v-if="modal == 'result'" @changeModal="changeModal"></Result>
    <CoffeCheck v-else></CoffeCheck>
    <!--  -->
    <div v-if="!modal">
      <MoneyCounter @preResult="changeModal"></MoneyCounter>
      <CoffeMenu v-if="selected === 'coffe'"></CoffeMenu>
      <HistoryMenu v-if="selected === 'history'"></HistoryMenu>
      <BottomMenu @changeTab="changeTab"></BottomMenu>
    </div>
  </div>
</template>

<script>
import Result from "~/components/modal/Result.vue";
import CoffeCheck from "~/components/modal/CoffeCheck.vue";

export default {
  components: {
    Result,
    CoffeCheck,
  },

  data: () => {
    return {
      selected: "coffe",
      modal: "result",
    };
  },
  methods: {
    changeTab(data) {
      this.selected = data;
    },
    changeModal(status) {
      this.modal = status;
    },
  },
  beforeMount() {
    this.$store.dispatch("getLocalData");
  },
};
</script>

<style lang="scss" >
@font-face {
  font-family: "Ubuntu Bold";
  src: url("~assets/fonts/Ubuntu-Bold.ttf") format("truetype");
}
@font-face {
  font-family: "Ubuntu Medium";
  src: url("~assets/fonts/Ubuntu-Medium.ttf") format("truetype");
}
@font-face {
  font-family: "Ubuntu Regular";
  // font-style: normal;
  // font-weight: 400;
  // font-display: swap;
  src: url("~assets/fonts/Ubuntu-Regular.ttf") format("truetype");
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  background-color: #312c29;
}
</style>
