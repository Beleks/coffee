<template>
  <div class="item">
    <div class="top">
      <div class="date">{{ formatDate }}</div>
      <div class="time">{{ itemHistory.time }}</div>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="column"></div>
        <div class="cups">
          <coffe-cup></coffe-cup>
          <div class="sumCups">x {{ itemHistory.sumCups }}</div>
        </div>
      </div>
      <div class="sum">+ {{ itemHistory.money }}</div>
    </div>
  </div>
</template>

<script>
import CoffeCup from "./svg/CoffeCup.vue";
export default {
  data: () => {
    return {
      months: [
        {
          title: "январья",
          number: "01",
        },
        {
          title: "февраля",
          number: "02",
        },
        {
          title: "марта",
          number: "03",
        },
        {
          title: "апреля",
          number: "04",
        },
        {
          title: "мая",
          number: "05",
        },
        {
          title: "июня",
          number: "06",
        },
        {
          title: "июля",
          number: "07",
        },
        {
          title: "августа",
          number: "08",
        },
        {
          title: "сентября",
          number: "09",
        },
        {
          title: "октября",
          number: "10",
        },
        {
          title: "ноября",
          number: "11",
        },
        {
          title: "декабря",
          number: "12",
        },
      ],
    };
  },
  props: {
    itemHistory: Object,
  },
  computed: {
    formatDate() {
      let newFormat = this.itemHistory.date.slice(0, -5);
      let month = "";
      for (let index = 0; index < this.months.length; index++) {
        if (newFormat.slice(3) == this.months[index].number) {
          month = this.months[index].title;
        }
      }
      return newFormat.slice(0, -3) + " " + month;
    },
  },

  components: { CoffeCup },
};
</script>

<style lang="scss" scoped>
.item {
  font-family: "Ubuntu Medium";
  margin: 5px 0.5em;
  .top {
    display: flex;
    align-items: center;

    .date {
      color: #ffffff;
      font-size: 1.125rem;
    }
    .time {
      margin-left: 0.4em;
      color: rgba(255, 255, 255, 0.2);
      font-size: 0.875rem;
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.6em;
    margin: 5px 0;
    .left {
      display: flex;
      .column {
        width: 3px;
        height: 38px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.2);
      }
      .cups {
        display: flex;
        align-items: center;
        color: rgba(255, 255, 255, 0.8);
        margin-left: 0.5em;
        .sumCups {
          margin-top: 1px;
          margin-left: 0.5em;
        }
      }
    }
    .sum {
      color: #e0afa0;
    }
  }
}
</style>