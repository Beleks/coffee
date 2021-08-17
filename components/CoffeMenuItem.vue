<template>
  <div class="item">
    <div class="name">
      {{ itemCofe.name }}
    </div>
    <div class="counter">
      <div @click="changeSum(itemCofe.sum - 1)" class="button">-</div>
      <div>{{ itemCofe.sum }}</div>
      <div @click="changeSum(itemCofe.sum + 1)" class="button">+</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      newSum: 0,
    };
  },
  props: {
    itemCofe: Object,
    index: Number,
  },
  methods: {
    changeSum(sum) {
      // console.log(sum);
      // Вызвает action во vuex которое меняет newValues
      this.newSum = sum;
      this.$store.commit("changeSum", {
        newSum: this.newSum,
        index: this.index,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.1em 1.5em;
  justify-content: center;
  font-family: "Ubuntu Medium";

  color: #fff;

  .name {
    // font-size: 0.95em;
    background-color: #46413e;
    text-align: center;
    padding: 0.4em;
    border-radius: 3px;
    width: 100%;
  }
  .counter {
    min-width: 180px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    background-color: #373331;
    border-radius: 0 0 5px 5px;
    overflow: hidden;
  }
  .button {
    display: flex;
    cursor: pointer;
    background-color: #e0afa0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 41px;
    padding: 0.3em 0.4em;
    opacity: 0.8;
  }
}
.item > div:last-child {
  display: flex;
  align-items: center;
}
</style>