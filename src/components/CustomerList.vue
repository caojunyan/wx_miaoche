<template>
  <div class="customer" v-infinite-scroll="loadMore"
       infinite-scroll-disabled="rolling"
       infinite-scroll-distance="10">
    <div class="select">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item class="input">
          <el-input v-model="formInline.user" placeholder="用户名" style="width: 100%"></el-input>
        </el-form-item>
        <el-form-item class="button">
          <el-button type="primary" @click="submit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
     <div class="list" v-for="(item,index) in clientList" :key="index"   >
       <ul>
         <li class="item" @click="toDetail(item.id)">
           <span class="name">{{item.name}}</span>
           <span>业务员：{{item.salesman}}</span>
           <i class="el-icon-arrow-right"></i>
         </li>
       </ul>
     </div>
    <div class="loading">
      <span v-show="loading"  >加载更多。。。</span>
    </div>
  </div>
</template>

<script>
  import {clientList,getByName} from "../api/api"
  import axios from 'axios'
  export default {
    name: "test",
    data() {
      return {
        formInline: {
          user: '',
        },
        clientList: [],
        rolling:false,
        id: '',
        nextUrl: [],
        previousUrl: [],
        page:"",
        url:"",
        current_page:"",
        total_pages:"",
        loading:false,
        list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

      }
    },
    methods: {
      submit() {
        getByName(this,this.formInline.user).then(res=>{
          console.log(res)
          console.log(this.formInline.user)
        })
      },
      toDetail(index) {
        this.$router.push({
          name: "Detail",
          query: {
            cusmoter: index
          }
        })
      },
      loadMore() {
        this.current_page++;
        this.loading = true;
        if (this.current_page <= this.total_pages) {
          this.rolling=true;
          axios.get(this.url + this.current_page).then((res) => {
               this.clientList = this.clientList.concat(res.data.data);
               console.log(this.clientList)
               setTimeout(()=>{
               this.rolling=false;
               },1000)
             });
         }else{
          this.loading = false;
           return;
         }
      }
    },
    mounted() {
      clientList(this).then(res => {
        this.clientList = res.data.data;
        //      当前页码
        this.page=res.data.meta.pagination.current_page;
        this.url="https://oa.api.jiahaichuang.com/api/customers?page=";
        this.current_page=res.data.meta.pagination.current_page;
        //      总页码
        this.total_pages=res.data.meta.pagination.total_pages

      })
    },
    components: {

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
    .test
      height 50px
    .list
      width 94%
      margin-left 3%
      .item
        width 100%
        height 50px
        border-bottom 1px solid #DADADA
        line-height 50px
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

    .loading
      width 100%
      text-align: center
      span
        text-align: center
</style>
