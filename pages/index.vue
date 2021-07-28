<template>
  <div>
    <!-- <Test /> -->

    <MoneyCounter></MoneyCounter>
    <!-- coffee menu / history menu -->
    <CoffeMenu v-if="selected === 'coffe'"></CoffeMenu>
    <BottomMenu></BottomMenu>
  </div>
</template>

<script>
export default {
  data: ()=>{
    return {
      selected: 'coffe'
    }
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
