<template>
  <div>
    <!-- Два компонента modal -->
    <MoneyCounter></MoneyCounter>
    <CoffeMenu v-if="selected === 'coffe'"></CoffeMenu>
    <HistoryMenu v-if="selected === 'history'"></HistoryMenu>
    <BottomMenu @changeTab="changeTab"></BottomMenu>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      selected: "coffe",
    };
  },
  methods: {
    changeTab(data){
      this.selected = data
    }
  },
  beforeMount(){
    this.$store.dispatch('getLocalData')
  }
  
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
body {
  margin: 0;
  padding: 0;
  background-color: #312c29;
}
</style>
