<template>
  <div class="modal">
    <div>
      Собрать <span class="attention">{{ sum }}</span> рублей
    </div>
    <div class="text">
      Убедитесь, что указанные ниже значения
      <span class="attention">совпадают</span> с данными в кофемашине
    </div>
    <div class="resultItem" v-for="(item, index) in resultItems" :key="index">
      <div>{{ item.name }}</div>
      <div>{{ item.sum }}</div>
    </div>
    <div class="buttons">
      <div class="cancel" @click="modalStatus('')">Позже</div>
      <div class="collect" @click="collect()">Собрать</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    sum() {
      return this.$store.state.sum;
    },
    resultItems() {
      return this.$store.state.newValues;
    },
  },
  methods: {
    modalStatus(status) {
      this.$emit("changeModal", status);
    },
    collect() {
      // this.modalStatus('collect')
      // date
      // time
      // sum
      let newMas = this.$store.state.newValues;
      let oldMas = this.$store.state.oldValues;

      let result;
      // this.money = 0;
      let record = {
        date: "",
        time: "",
        money: this.sum,
        sumCups: 0,
        cups: [],
      };
      let sumCups = 0;
      for (let index = 0; index < newMas.length; index++) {
        let itemCups = {
          name: "",
          count: 0,
        };
        sumCups = sumCups + (newMas[index].sum - oldMas[index].sum);

        itemCups.name = newMas[index].name;
        itemCups.count = newMas[index].sum - oldMas[index].sum;

        record.cups.push(itemCups);
      }

      let today = new Date();
      let day = String(today.getDate()).padStart(2, "0");
      let month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      let year = today.getFullYear();

      today = day + "." + month + "." + year;

      let dateWithouthSecond = new Date();
      let mytime = dateWithouthSecond.toLocaleTimeString({
        hour: "2-digit",
        minute: "2-digit",
      });
      record.sumCups = sumCups;
      record.date = today;
      record.time = mytime.slice(0, -3);

      this.$store.commit("saveAfterResult", record);
      // console.log(record);

      // this.modalStatus('collect')
      this.modalStatus('')

    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  height: 100vh;
  width: 100%;
  background-color: #312c29;
  // z-index: 200;
  // padding: 0 1.2em;
  text-align: center;
  font-family: "Ubuntu Medium";
  color: #fff;
  padding-top: 0.8em;
  .attention {
    color: #e0afa0;
  }
  .text {
    margin: 0.8em 1em;
    font-size: 0.9rem;
  }
  .resultItem {
    display: flex;
    justify-content: space-between;
    margin: 0.8em 1em;
  }
  .buttons {
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
    padding: 0.5em 1em;
    justify-content: space-between;
    // font-family: "Ubuntu Medium";
    div {
      width: 47%;
      // text-align: center;
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
}
</style>