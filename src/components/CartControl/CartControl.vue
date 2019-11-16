<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont iconjianqu" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{ food.count }}</div>
    <div class="iconfont iconjiahao" @click.stop="updateFoodCount(true)"></div>
  </div>
</template>

<script>
export default {
  props: {
    food: Object
  },
  methods: {
    updateFoodCount(isAdd) {
      this.$store.dispatch('updateFoodCount', { isAdd, food: this.food })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl'
.cartcontrol
  display flex
  align-items center
  .iconfont
    color $green
    font-size 24px
    line-height 24px
    padding 6px
  .cart-count
    width: 12px
    line-height: 24px
    text-align: center
    font-size: 10px
    color: rgb(147, 153, 159)
  .iconjianqu
    &.move-enter-active, &.move-leave-active
      transition all .3s
    &.move-enter, &.move-leave-to
      opacity 0
      transform translateX(15px) rotate(180deg)
</style>
