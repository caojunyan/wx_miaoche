<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  @import "common/base.css"
  html
    font-size 10px
    .el-input__inner,.el-button
      border-radius 12px
      outline  none
      &:focus
        border 1px solid #cc
    .el-card__body
      padding-right 0
      padding-left 0
    .el-card__header
      border none
    .el-form-item__content
      width 100%
    .el-tabs__nav
      width 100%
      display flex
      justify-content space-around
      div
        width 50%
        text-align: center
        color #9A9A9A
      .el-tabs__item.is-active
        color:#666666


    .el-select .el-input.is-focus .el-input__inner
      border-color #DCDFE6
    .el-select .el-input__inner:focus
      border-color #DCDFE6
    .el-tabs__item:hover
      color #FF6600
    .el-tabs__item.is-active
      color #ff6600

</style>
