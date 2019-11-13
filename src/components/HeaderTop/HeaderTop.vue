<template>
  <header class="header">
    <slot name="left"> </slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{ title }}</span>
    </span>
    <slot name="right"> </slot>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="stylus" scoped>
.header
  background-color #02a774
  position fixed
  z-index 100
  left 0
  top 0
  width 100%
  height 45px
  display flex
  justify-content space-between
  align-items center
  .header_search
    display flex
    align-items center
    margin-left 15px
    width 10%
    height 50%
    .iconsousuo
      font-size 20px
      color #fff
  .header_title
    width 50%
    color #fff
    text-align center
    margin auto
    .header_title_text
      font-size 20px
      color #fff
      display block
  .header_login
    font-size 14px
    color #fff
    margin-right 15px
    .header_login_text
      color #fff
</style>
