<template>
  <div class="back">
    <div class="sum">
      80 р
    </div>
    <CoffeeMenu/> 
  </div>
</template>

<script>
import CoffeeMenu from './CoffeMenu.vue'
export default {
  
  components: {
    CoffeeMenu
  }
}
</script>

<style lang="scss" scoped>
.back{
  .sum{
    font-size: 1.125em;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
  }
}
</style>