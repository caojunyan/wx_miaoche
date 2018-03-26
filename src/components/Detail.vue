<template>
  <div class="detail">
    <template>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="客户资料" name="first">
          <!--客户资料-->
          <div class="customerdata">
            <div class="item">
              <span class="name">客户姓名：</span>&nbsp;&nbsp;
              <span>刘承旭</span>
            </div>
            <div class="item">
              <span class="name">业务员：</span>&nbsp;&nbsp;
              <span>芒果</span>
            </div>
            <div class="item">
              <span class="name">性别：</span>&nbsp;&nbsp;
              <span>男</span>
            </div>
            <div class="item">
              <span class="name">电话：</span>&nbsp;&nbsp;
              <span>XXXXXXXXXXX</span>
            </div>
            <div class="item">
              <span class="name">身份证号码：</span>&nbsp;&nbsp;
              <span>xxxxxxxxxxxxxx</span>
            </div>
            <div class="item">
              <span class="name">年龄：</span>&nbsp;&nbsp;
              <span>33岁</span>
            </div>
            <div class="item">
              <span class="name">婚姻状况：</span>&nbsp;&nbsp;
              <span>已婚</span>
            </div>
            <div class="item">
              <span class="name">学历：</span>&nbsp;&nbsp;
              <span>大专</span>
            </div>
            <div class="item">
              <span class="name">户籍地址：</span>&nbsp;&nbsp;
              <span>xxxxxxxxxxxxxxxxxxxxxxx</span>
            </div>
            <div class="item">
              <span class="name">现住地址：</span>&nbsp;&nbsp;
              <span>xxxxxxxxxxxxxxxxxxxxxxxxx</span>
            </div>
            <div class="item">
              <span class="name">住宅类型：</span>&nbsp;&nbsp;
              <span>公寓</span>
            </div>
            <div class="item">
              <span class="name">工作单位：</span>&nbsp;&nbsp;
              <span>xxxxxxxxxxxxxxxxxxx</span>
            </div>
            <div class="item">
              <span class="name">所属行业：</span>&nbsp;&nbsp;
              <span>xxxxxxxxxxx</span>
            </div>
            <div class="item">
              <span class="name">职位：</span>&nbsp;&nbsp;
              <span>业务员</span>
            </div>
            <div class="item">
              <span class="name">收入情况：</span>&nbsp;&nbsp;
              <span>8000元</span>
            </div>
            <div class="item">
              <span class="name">客户来源：</span>&nbsp;&nbsp;
              <span>渠道</span>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="车辆信息" name="second">
          <!--车辆资料-->
          <div class="car">
            <div class="item">
              <span class="name">评估价（元）：</span>&nbsp;&nbsp;
              <span>12万元</span>
            </div>
            <div class="item">
              <span class="name">公里数（km）：</span>&nbsp;&nbsp;
              <span>30万</span>
            </div>
            <div class="item">
              <span class="name">车牌号：</span>&nbsp;&nbsp;
              <span>鄂AB1234</span>
            </div>
            <div class="item">
              <span class="name">发动机号：</span>&nbsp;&nbsp;
              <span>XXXXXXXXXXX</span>
            </div>
            <div class="item">
              <span class="name">车外表情况：</span>&nbsp;&nbsp;
              <span>有少许刮蹭</span>
            </div>
            <div class="item">
              <span class="name">车内情况：</span>&nbsp;&nbsp;
              <span>良好</span>
            </div>
            <div class="item">
              <span class="name">年检：</span>&nbsp;&nbsp;
              <span>2018已年检</span>
            </div>
            <div class="item">
              <span class="name">前后车牌一致：</span>&nbsp;&nbsp;
              <span>鄂AB1234</span>
            </div>
            <div class="item">
              <span class="name">违章：</span>&nbsp;&nbsp;
              <span>5次</span>
            </div>
            <div class="item">
              <span class="name">扣分：</span>&nbsp;&nbsp;
              <span>8分</span>
            </div>
            <div class="item">
              <span class="name">违章罚分（元）：</span>&nbsp;&nbsp;
              <span>2000</span>
            </div>
            <div class="item">
              <span class="name">单次扣分12分（次）：</span>&nbsp;&nbsp;
              <span>0</span>
            </div>
            <div class="item">
              <span class="name">车架号：</span>&nbsp;&nbsp;
              <span>xxxxxxxxxxx</span>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="证件有效期" name="third">
          <!--证件有效期-->
          <div class="certificate">
            <div class="item">
              <span class="name">客户姓名：</span>&nbsp;&nbsp;
              <span>刘程序</span>
            </div>
            <div class="item">
              <span class="name">证件号码：</span>&nbsp;&nbsp;
              <span>xxxxxxxxxxxxxxxxxxxxxxxxxx</span>
            </div>
            <div class="item">
              <span class="name">证件有效期：</span>&nbsp;&nbsp;
              <span>2023年</span>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
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

      }
    }
  };
</script>

<style scoped lang="stylus">
  .detail
    width 100%
    .el-tabs__nav-scroll
      width 100%
      .el-tabs__nav
        width 100%
        display flex
        justify-content space-around
    .el-tabs__content
      width 100%
      .customerdata
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
            min-width  80px
            display inline-block
          i
            float right
            display inline-block
            height 100%
            line-height 40px

      .car
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
            min-width  80px
            display inline-block
          i
            float right
            display inline-block
            height 100%
            line-height 40px

      .certificate
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
            min-width  80px
            display inline-block
          i
            float right
            display inline-block
            height 100%
            line-height 40px

</style>
