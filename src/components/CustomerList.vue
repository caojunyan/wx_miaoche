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
      <div class="list" v-for="(item,index) in clientList" :key="index">
        <div class="item" @click="toDetail(item.id)">
            <span class="name">{{item.name}}  </span>&nbsp;&nbsp;
            <span>业务员：{{item.salesman}}</span>
            <i class="el-icon-arrow-right"></i>
          </div>
      </div>
    </div>
</template>

<script>
import {clientList} from "../api/api"
export default {
    name: "Customer",
    data() {
      return {
        formInline: {
        user: '',
        region: ''
      },
        clientList:[],
        id:''
    }
    },
    methods: {
    onSubmit() {
      console.log('submit!');
    },
    toDetail(index){
      this.$router.push({
        name: "Detail",
        query: {
          cusmoter: index
        }
      })
    }
  },
    mounted(){
      clientList(this).then(res=>{
        this.clientList=res.data.data;
        console.log(res)
      })
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
    .item
      width 100%
      height 40px
      border-bottom 1px solid #DADADA
      line-height 40px
      span
        font-size 1.4rem
      .name
        width 75px
        display inline-block
      i
        float right
        display inline-block
        height 100%
        line-height 40px

</style>
