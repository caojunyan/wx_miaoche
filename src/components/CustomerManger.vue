<template>
    <div class="manager">
        <template>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="客户查询" name="first">
              <!--客户查询-->
              <div class="query">
                <el-form  :model="formInline" class="demo-form-inline">
                  <el-form-item class="input">
                    <el-input v-model="formInline.user" placeholder="用户名" style="width: 100%"></el-input>
                  </el-form-item>
                  <el-form-item class="button">
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </el-tab-pane>
            <el-tab-pane label="逾期客户" name="second">
              <!--逾期客户-->
              <div class="overduce" v-for="(client,index) in overduceClient" :key="index">
                  <div class="item" @click="toDetail(client.id)">
                   <!-- <span class="name">张珊珊珊</span>&nbsp;&nbsp;-->
                    <span>业务员：{{client.salesman}}</span>
                    <span class="amount">逾期金额：{{client.amount}}</span>
                    <i class="el-icon-arrow-right"></i>
                  </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="缺件客户" name="third">
              <!--缺件客户-->
              <div class="lack" v-for="(client,index) in laceClient">
                  <div class="item" @click="toDetail(client.id)">
                    <!-- <span class="name">张珊珊珊</span>&nbsp;&nbsp;-->
                    <span>业务员：{{client.salesman}}</span>
                    <span class="amount">缺件金额：{{client.amount}}</span>
                    <i class="el-icon-arrow-right"></i>
                  </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </template>
    </div>
</template>

<script>
  import {timeOut,lack} from "../api/api"
  export default {
    data() {
      return {
        activeName: 'first',
        overduceClient:[],
        laceClient:[],
        formInline: {
          user: '',
          region: ''
        }
      };
    },
    methods: {
      handleClick(tab, event) {

      },
      onSubmit() {

      },
      toDetail(index) {
        this.$router.push({
          name: "Detail",
          query: {
            cusmoter: index
          }
        })
      },
    },
    mounted(){
      // 逾期客户
      timeOut(this).then(res=>{
        this.overduceClient=res.data.data
        console.log('逾期的',res)
      })
      // 缺件客户
      lack(this).then(res=>{
        this.laceClient=res.data.data
        console.log('缺件的',res)
      })
    }
  };
</script>

<style scoped lang="stylus">
.manager
  width 100%
  .el-tabs__nav-scroll
    width 100%
    .el-tabs__nav
      width 100%
      display flex
      justify-content space-around
  .el-tabs__content
    width 100%
    .query
      margin-top 60px
      width 70%
      margin-left 15%
      .el-button
        width 100%
        background #FF6600
        border none
    .overduce
      width 94%
      margin-left 3%
      .item
        width 100%
        height 40px
        border-bottom 1px solid #DADADA
        line-height 40px
        span
          font-size 1.4rem
          min-width 130px
          display inline-block
        .name
          width 60px
          display inline-block
        i
          float right
          display inline-block
          height 100%
          line-height 40px

    .lack
      width 94%
      margin-left 3%
      .item
        width 100%
        height 40px
        border-bottom 1px solid #DADADA
        line-height 40px
        span
          font-size 1.4rem
          min-width 130px
          display inline-block
        .name
          width 60px
          display inline-block
        i
          float right
          display inline-block
          height 100%
          line-height 40px

</style>
