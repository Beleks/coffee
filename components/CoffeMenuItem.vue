<template>
  <div class="item">
    <div class="name">{{ itemCofe.name }}</div>
    <div>
      <div class="price">{{ itemCofe.sum }}</div>
      <div class="buttons">
        <div @click="changeSum(itemCofe.sum - 1)">-</div>
        <div @click="changeSum(itemCofe.sum + 1)">+</div>
      </div>
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
  align-items: center;
  margin: 1.1em 1.5em;
  justify-content: space-between;
  font-family: "Ubuntu Medium";

  color: #fff;

  .name {
    font-size: 0.95em;
  }

  .price {
    margin-right: 1em;
    text-align: right;
    min-width: 40px;
  }
  .buttons {
    display: flex;
    div {
      cursor: pointer;
      background-color: rgb(70, 66, 63);
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 41px;
      height: 27px;
      border-radius: 3px;
      opacity: 0.8;
    }
    div:last-child {
      margin-left: 0.7em;
    }
  }
}
.item > div:last-child {
  display: flex;
  align-items: center;
}
</style>