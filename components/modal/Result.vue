<template>
  <div class="modal">
    <div>Собрать ??? рублей</div>
    <div>Какой-то текст</div>
    <div>Результаты</div>
    <div class="buttons">
      <div class="cancel" @click="modalStatus('')">Позже</div>
      <div class="collect" @click="modalStatus('collect')">Собрать</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    modalStatus(status){
      this.$emit('changeModal', status)
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  height: 100vh;
  width: 100%;
  background-color: #312c29;
  // z-index: 200;
  // padding: 0 1.2em;
}
.buttons {
  position: fixed;
  width: 100%;
  bottom: 0;
  color: #fff;
  display: flex;
  padding: 0.5em 1em;
  justify-content: space-between;
  font-family: "Ubuntu Medium";
  div {
    width: 47%;
    text-align: center;
    padding: 0.7em;
    border-radius: 5px;
  }

  .cancel {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .collect {
    background-color: #e0afa0;
  }
}
</style>