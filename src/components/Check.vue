<template>
    <div class="check">
      <template>
        <el-tabs v-model="activeName2" type="card" >
          <el-tab-pane label="客户查询" name="first">
            <!--客户查询-->
            <div class="query">
              <el-form  :model="formInline" class="demo-form-inline">
                <el-form-item class="input">
                  <el-input v-model="formInline.user" placeholder="用户名" style="width: 100%"></el-input>
                </el-form-item>
                <el-form-item class="button">
                  <el-button type="primary" @click="onsubmit">查询</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="车辆检查" name="second">
            <!--车辆检查-->
              <div class="checkbus">
                <router-link :to="{path:'/'}">
                  <div class="item" v-for="(item,index) in carList" :key="index">
                    <span class="name">{{item}}</span>&nbsp;&nbsp;
                    <span>业务员：{{item}}</span>
                    <i class="el-icon-arrow-right"></i>
                  </div>
                </router-link>
              </div>
          </el-tab-pane>
        </el-tabs>
      </template>
    </div>
</template>

<script>
import {checkCar} from "../api/api"
export default {
        name: "check",
        data() {
          return {
            activeName2: 'first',
            carList:"",
            formInline: {
              user: '',
              region: ''
            },
          };
        },
        methods: {
            onsubmit(){

            }
        },
        mounted(){
          checkCar(this).then(res=>{
            this.carList=res.data.data;
            console.log(this.carList)
          })
        },
        watch:{

        }
    }
</script>

<style scoped lang="stylus">
  .check
    .query
      margin-top 60px
      width 70%
      margin-left 15%
      .el-button
        width 100%
        background #FF6600
        border none

    .checkbus
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
