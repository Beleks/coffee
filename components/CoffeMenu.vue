<template>
  <div class="bg" >
    <MenuItem v-for="(item, index) in items" :key="index" :itemCofe="item" />
    <!-- 
      item
      item
      item
      item
     -->
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  data: ()=>{
    return {
      items: [
        {name: 'Какочино', price: 20},
        {name: 'Какочино', price: 30},
        {name: 'Какочино', price: 60},
        {name: 'Какочино', price: 15},
      ],

    }
  },
  components: { MenuItem },

}
</script>

<style lang="scss" scoped>
.bg{
  position: absolute;
  top: 45px;
  background-color: #463F3A;
  width: 100%;
  min-height: calc(100vh - 45px);
  border-radius: 20px 20px 0 0;
  text-align: center;
}
</style>