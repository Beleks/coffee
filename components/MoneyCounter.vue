<template>
  <div class="top" @click="checkProfit()">
    <Coins></Coins>
    <div class="sum">{{ moneyCalculating }} р</div>
  </div>
</template>

<script>
import Coins from "./svg/Coins.vue";

export default {
  data: () => {
    return {
      money: 0,
    };
  },
  computed: {
    moneyCalculating() {
      let newMas = this.$store.state.newValues;
      let oldMas = this.$store.state.oldValues;
      let result;
      this.money = 0;
      for (let index = 0; index < newMas.length; index++) {
        result = 0;
        result = (newMas[index].sum - oldMas[index].sum) * newMas[index].price;
        this.money = this.money + result;
      }
      
      return this.money;
    },
  },
  methods: {

  },
  components: {
    Coins,
  },
};
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.9em;
  margin-bottom: 1.5em;
  .sum {
    font-family: "Ubuntu Medium";
    margin-left: 0.5em;
    color: #fff;
    font-size: 1.125em;
  }
}
</style>