<template>
  <div class="item">
    <div class="name">{{ itemCofe.name }}</div>
    <div>
      <div class="price">{{ itemCofe.price }}</div>
      <div class="button">Тык</div>
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
  .name {
    font-size: 1.125em;
    // font-weight: bold;
  }
  :last-child {
    display: flex;
    align-items: center;
  }
  .price {
    margin-right: 1em;
  }
  .button {
    background-color: #e0afa0;

    padding: 0.5em 1em;
    border-radius: 10px;
  }
}
</style>