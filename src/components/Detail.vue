<template>
  <div class="detail">
    <template>
      <el-tabs v-model="activeName" type="card" >
        <el-tab-pane label="客户资料" name="first">
          <!--客户资料-->
          <div class="customerdata" v-for="(customer,index) in detailInfo" :key="index">
            <div class="item">
              <span class="name">客户姓名：</span>&nbsp;&nbsp;
              <span>{{customer.name}}</span>
            </div>
            <div class="item">
              <span class="name">业务员：</span>&nbsp;&nbsp;
              <span>{{customer.salesman}}</span>
            </div>
            <div class="item">
              <span class="name">性别：</span>&nbsp;&nbsp;
              <span>{{customer.sex}}</span>
            </div>
            <div class="item">
              <span class="name">电话：</span>&nbsp;&nbsp;
              <span>{{customer.phone}}</span>
            </div>
            <div class="item">
              <span class="name">身份证号码：</span>&nbsp;&nbsp;
              <span>{{customer.idNumber}}</span>
            </div>
            <div class="item">
              <span class="name">年龄：</span>&nbsp;&nbsp;
              <span>{{customer.age}}</span>
            </div>
            <div class="item">
              <span class="name">婚姻状况：</span>&nbsp;&nbsp;
              <span>{{customer.marital}}</span>
            </div>
            <div class="item">
              <span class="name">学历：</span>&nbsp;&nbsp;
              <span>{{customer.education}}</span>
            </div>
            <div class="item">
              <span class="name">户籍地址：</span>&nbsp;&nbsp;
              <span>{{customer.registrationAdd}}</span>
            </div>
            <div class="item">
              <span class="name">现住地址：</span>&nbsp;&nbsp;
              <span>{{customer.address}}</span>
            </div>
            <div class="item">
              <span class="name">住宅类型：</span>&nbsp;&nbsp;
              <span>{{customer.housingType}}</span>
            </div>
            <div class="item">
              <span class="name">工作单位：</span>&nbsp;&nbsp;
              <span>{{customer.company}}</span>
            </div>
            <div class="item">
              <span class="name">所属行业：</span>&nbsp;&nbsp;
              <span>{{customer.comType}}</span>
            </div>
            <div class="item">
              <span class="name">职位：</span>&nbsp;&nbsp;
              <span>{{customer.position}}</span>
            </div>
            <div class="item">
              <span class="name">收入情况：</span>&nbsp;&nbsp;
              <span>{{customer.monthly}}</span>
            </div>
            <div class="item">
              <span class="name">客户来源：</span>&nbsp;&nbsp;
              <span>{{customer.source}}</span>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="车辆信息" name="second" >
          <el-tabs type="border-card" class="car-detail" v-show="showFlag">
            <el-tab-pane v-bind:label="'车辆'+(carIndex+1)" v-for="(car,carIndex) in carInfo" :key="carIndex">
              <div class="car" >
                <div class="item">
                  <span class="name">评估价（元）：</span>&nbsp;&nbsp;
                  <span>{{carInfo[carIndex].price}}</span>
                </div>
                <div class="item">
                  <span class="name">公里数（km）：</span>&nbsp;&nbsp;
                  <span>{{carInfo[carIndex].mileage}}</span>
                </div>
                <div class="item">
                  <span class="name">车牌号：</span>&nbsp;&nbsp;
                  <span>{{carInfo[carIndex].plate}}</span>
                </div>
                <div class="item">
                  <span class="name">发动机号：</span>&nbsp;&nbsp;
                  <span>{{carInfo[carIndex].engineNum}}</span>
                </div>
                <div class="item">
                  <span class="name">车外表情况：</span>&nbsp;&nbsp;
                  <span>{{carInfo[carIndex].carStatu}}</span>
                </div>
                <div class="item">
                  <span class="name">车内情况：</span>&nbsp;&nbsp;
                  <span>{{carInfo[carIndex].appearance}}</span>
                </div>
                <div class="item">
                  <span class="name">年检：</span>&nbsp;&nbsp;
                  <span>{{carInfo[carIndex].annualInspection}}</span>
                </div>
                <div class="item">
                  <span class="name">前后车牌一致：</span>&nbsp;&nbsp;
                  <span>{{carInfo[carIndex].brand}}</span>
                </div>
                <div class="item">
                  <span class="name">违章：</span>&nbsp;&nbsp;
                  <span>{{carInfo[carIndex].illegalNum}}</span>
                </div>
                <div class="item">
                  <span class="name">扣分：</span>&nbsp;&nbsp;
                  <span>{{carInfo[carIndex].illegalSore}}</span>
                </div>
                <div class="item">
                  <span class="name">违章罚分（元）：</span>&nbsp;&nbsp;
                  <span>{{carInfo[carIndex].illegalPrice}}</span>
                </div>
                <div class="item">
                  <span class="name">单次扣分12分（次）：</span>&nbsp;&nbsp;
                  <span>{{carInfo[carIndex].illegal}}</span>
                </div>
                <div class="item">
                  <span class="name">车架号：</span>&nbsp;&nbsp;
                  <span>{{carInfo[carIndex].frameNum}}</span>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="证件有效期" name="third">
          <!--证件有效期-->
          <div class="certificate">
            <div class="item">
              <span class="name">身份证有效期：</span>&nbsp;&nbsp;
              <span>{{idEffTime}}</span>
            </div>
            <div class="item">
              <span class="name">驾驶证有效期：</span>&nbsp;&nbsp;
              <span>{{drivingEffTime}}</span>
            </div>
            <div class="item">
              <span class="name">行驶证有效期：</span>&nbsp;&nbsp;
              <span>{{insuranceEffTime}}</span>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
  import {selectCustomer,selectCar,getCredit} from "../api/api"
  export default {
    data() {
      return {
        detailInfo:[],
        carInfo:[],
        drivingEffTime:'',
        idEffTime:'',
        insuranceEffTime:'',
        showFlag:true,
        activeName: 'first',
        formInline: {
          user: '',
          region: '',
        }
      };
    },
    methods: {
      onSubmit() {

      }
    },
    mounted(){
      selectCustomer(this,this.$route.query.cusmoter).then(data=>{
        for(var item in data){
          if(data[item].id==this.$route.query.cusmoter){
              this.detailInfo.push(data[item])
          }
        }
      })
      selectCar(this,this.$route.query.cusmoter).then(data=>{
          this.carInfo=data.data.data
          if(this.carInfo==0){
            this.showFlag=false
          }
      })
      getCredit(this,this.$route.query.cusmoter).then(data=>{
        this.drivingEffTime=data.data.data[0].drivingEffTime
        this.idEffTime=data.data.data[0].idEffTime
        this.insuranceEffTime=data.data.data[0].insuranceEffTime
      })

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

      .car-detail
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
