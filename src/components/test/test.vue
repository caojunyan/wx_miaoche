<template>
  <div class="customer">
      <div class="select">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item class="input">
            <el-input v-model="formInline.user" placeholder="用户名" style="width: 100%"></el-input>
          </el-form-item>
          <el-form-item class="button">
            <el-button type="primary" @click="">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="list" v-for="(item,index) in clientList" :key="index"   v-infinite-scroll="loadMore"
           infinite-scroll-disabled="loading"
           infinite-scroll-distance="100">
        <div class="item" @click="toDetail(item.id)">
          <span class="name">{{item.name}}  </span>&nbsp;&nbsp;
          <span>业务员：{{item.salesman}}</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="loading">
        <span v-show="loading"  >加载更多。。。</span>
      </div>
  </div>
</template>

<script>
  import {clientList} from "../../api/api"
  import axios from 'axios'

  export default {
    name: "test",
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        clientList: [],
        id: '',
        nextUrl: [],
        previousUrl: [],
        page:"",
        url:"",
        current_page:"",
        total_pages:"",
        loading:false,
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      toDetail(index) {
        this.$router.push({
          name: "Detail",
          query: {
            cusmoter: index
          }
        })
      },
   /*   onInfinite() {
        axios.get(this.url+this.page).then((res) => {
          this.clientList = this.clientList.concat(res.data.data);
          this.page++;
        });
      },*/
      loadMore() {
          for (var i = 0; i < this.total_pages; i++) {
              this.current_page++;
          /*  setTimeout(() => {*/
              axios.get(this.url + this.current_page).then((res) => {
                  this.loading = true;
                  this.clientList = this.clientList.concat(res.data.data);
                  this.loading = false;
              });

            /*  if (this.current_page >= this.total_pages) {
                this.loading = false;
              }*/
            /*},1000)*/
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

    .loading
      width 100%
      text-align: center
      span
        text-align: center
</style>
