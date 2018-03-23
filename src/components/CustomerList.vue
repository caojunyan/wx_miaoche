<template>
    <div class="customer">
      <div class="select">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item class="input">
            <el-input v-model="formInline.user" placeholder="用户名" style="width: 100%"></el-input>
          </el-form-item>
          <el-form-item class="button">
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="list">
        <router-link :to="{path:'/'}">
          <div class="item">
            <span class="name">张珊珊珊</span>&nbsp;&nbsp;
            <span>业务员：芒果</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </router-link>
        <router-link :to="{path:'/'}">
          <div class="item">
            <span class="name">张珊珊珊</span>&nbsp;&nbsp;
            <span>业务员：芒果</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </router-link>
        <router-link :to="{path:'/'}">
          <div class="item">
            <span class="name">张珊珊珊</span>&nbsp;&nbsp;
            <span>业务员：芒果</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </router-link>
        <router-link :to="{path:'/'}">
          <div class="item">
            <span class="name">张珊珊珊</span>&nbsp;&nbsp;
            <span>业务员：芒果</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </router-link>
        <router-link :to="{path:'/'}">
          <div class="item">
            <span class="name">张珊珊珊</span>&nbsp;&nbsp;
            <span>业务员：芒果</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
    name: "Customer",
    data() {
      return {
      formInline: {
        user: '',
        region: ''
      }
    }
    },
    methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
    }
</script>

<style scoped lang="stylus">
.customer
  width 100%
  .select
      width 94%
      margin-left 3%
      margin-top 30px
      .el-form--inline
        display flex
        justify-content space-around
        .input
          flex 1
          .el-input__inner
            width 100%
        .button
          width 80px
          margin-right 0
          button
            background #FF6600
            border:none
            width 100%
  .list
    width 94%
    margin-left 3%
    .router-link-active
      color #666666
      .item
        width 100%
        height 40px
        border-bottom 1px solid #DADADA
        line-height 40px
        span
          font-size 1.4rem
        .name
          width 60px
          display inline-block
        i
          float right
          display inline-block
          height 100%
          line-height 40px

</style>
