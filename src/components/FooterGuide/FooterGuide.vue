<template>
  <div>
    <div class="footer_guide">
      <a href="javascript:;" class="guide_item" :class="{ on: '/msite' === $route.path }" @click="goTo('/msite')">
        <span class="item_icon">
          <i class="iconfont iconicon-waimai"></i>
        </span>
        <span>外卖</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{ on: '/search' === $route.path }" @click="goTo('/search')">
        <span class="item_icon">
          <i class="iconfont iconsoushuo"></i>
        </span>
        <span>搜索</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{ on: '/order' === $route.path }" @click="goTo('/order')">
        <span class="item_icon">
          <i class="iconfont icondingdan"></i>
        </span>
        <span>订单</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{ on: '/profile' === $route.path }" @click="goTo('/profile')">
        <span class="item_icon">
          <i class="iconfont icongerenzhongxin"></i>
        </span>
        <span>我的</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl'
.footer_guide
  top-border-1px(#e4e4e4)
  z-index 100
  position fixed
  left 0
  right 0
  bottom 0
  width 100%
  height 50px
  background-color #fff
  display flex
  .guide_item
    display flex
    flex 1
    flex-direction column
    align-items center
    text-decoration none
    color #999999
    margin 5px
    text-align center
    &.on
      color #02a774
    span
      font-size 12px
      margin 2 0
      .iconfont
        font-size 22px
</style>
