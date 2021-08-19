<template>
  <div class="modal">
    <div class="period">{{ period }}</div>
    <transition-group name="listcoffe" @after-enter="afterEnter">
      <div
        class="itemCoffe"
        v-for="(itemCoffe, index) in cups"
        :key="itemCoffe.key"
        v-show="el"
        :style="{ transitionDelay: `${0.4 * index}s` }"
      >
        <div>{{ itemCoffe.name }}</div>
        <div>x {{ itemCoffe.count }}</div>
      </div>
    </transition-group>
    <div class="line"></div>
    <div
      class="result"
      :class="{show_result: resultShow}"
      :style="{ transitionDelay: `${resultDelay}s` }"
    >
      <div>Итого</div>
      <div>{{ lastNote.money }} рублей</div>
    </div>
    <div class="button" @click="modalStatus('')">Отлично!</div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      el: false,
      resultShow: false,
      lenghtMas: 0,
      resultDelay: 0,
    };
  },
  computed: {
    period() {
      if (this.$store.state.history.length > 1) {
        let start = this.$store.state.history[1].date.slice(0, -5);
        let end = this.$store.state.history[0].date.slice(0, -5);

        return "c " + start + " до " + end;
      } else {
        let end = this.$store.state.history[0].date.slice(0, -5);
        return "до " + end;
      }
    },
    cups() {
      // Сделать сортировку: только по кофе которе заказали.
      let masCups = this.$store.state.history[0].cups;
      let sortCups = [];
      for (let index = 0; index < masCups.length; index++) {
        if (masCups[index].count > 0) {
          masCups[index].key = index + 1;
          sortCups.push(masCups[index]);
        }
      }
      console.log(sortCups, "sortCups");
      this.lenghtMas = sortCups.length;
      return sortCups;
    },
    lastNote() {
      return this.$store.state.history[0];
    },
  },
  methods: {
    modalStatus(status) {
      this.$emit("changeModal", status);
    },
    afterEnter: function () {
      console.log("end");
      this.resultDelay = (this.lenghtMas) * 0.4;
      // несколько раз объявляется 
      this.resultShow = true;
    },
  },

  mounted() {
    this.el = true;
  },
};
</script>

<style lang="scss" scoped>
// .list-enter-active,
// .list-leave-active {
//   transition: all 0.3s ease-in-out;
// }
// .list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
//   opacity: 0;
//   transform: translateY(30px);
// }
//
.listcoffe-enter-active,
.listcoffe-leave-active {
  // transition: opacity 0.4s, transform 0.4s;
  transition: all 0.4s;
}

.listcoffe-enter,
.listcoffe-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.modal {
  height: 100%;
  width: 100%;
  background-color: #312c29;
  color: #fff;
  font-family: "Ubuntu Medium";

  .period {
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
    margin: 1em 0;
  }
  .itemCoffe {
    display: flex;
    justify-content: space-between;
    margin: 0.7em 1em;
  }
  .line {
    background-color: rgba(255, 255, 255, 0.1);
    height: 3px;
    width: calc(100% - 2em);
    margin: 1em 1em;
    border-radius: 5px;
  }
  .result {
    display: flex;
    justify-content: space-between;
    margin: 0.5em 1em;
    margin-bottom: 70px;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
  }
  .show_result{
    opacity: 1;
  }
  .button {
    position: fixed;
    width: calc(100% - 2em);
    text-align: center;
    padding: 0.7em;
    bottom: 0;
    // display: block;

    margin: 0.5em 1em;
    border-radius: 5px;
    background-color: #e0afa0;
  }
}
</style>