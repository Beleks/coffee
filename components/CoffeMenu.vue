<template>
  <div class="bg" >
    <CoffeMenuItem v-for="(item, index) in coffeMenu" :key="index" :itemCofe="item" />
    <!-- 
      item
      item
      item
      item
     -->
  </div>
</template>

<script>
import CoffeMenuItem from './CoffeMenuItem.vue'

export default {
  data: ()=>{
    return {
      

    }
  },
  computed: {
    coffeMenu(){
      return this.$store.state.items
    }
  },
  components: { CoffeMenuItem },

}
</script>

<style lang="scss" scoped>
.bg{
}
</style>