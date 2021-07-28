<template>
  <div class="back">
    <div class="sum">{{ money }}</div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      money: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.back {
  .sum {
    // font-family: "Ubuntu Regular";
    // font-size: 1.125em;
    // color: white;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // width: 100%;
    // height: 45px;
  }
}
</style>