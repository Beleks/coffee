<template>
  <div class="item">
    <div class="name">{{ itemCofe.name }}</div>
    <div>
      <div class="price">{{ itemCofe.sum }}</div>
      <div class="buttons">
        <div>-</div>
        <div>+</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  props: {
    itemCofe: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  margin: 0.9em 2em;
  justify-content: space-between;
  font-family: "Ubuntu Medium";

  color: #fff;

  .name {
    font-size: 1em;
    // font-weight: bold;
  }

  .price {
    margin-right: 1em;
  }
  .buttons {
    display: flex;
    div {
      cursor: pointer;
      background-color: rgb(70, 66, 63);
      // padding: 0.5em 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 41px;
      height: 27px;
      border-radius: 3px;
      // font-weight: bold;
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