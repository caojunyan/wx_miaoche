<template>
    <div class="config">
      <div class="query-form">
        <el-form :model="queryForm" status-icon :rules="rulesquery" ref="queryForm"  class="demo-ruleForm">
          <el-form-item label="" prop="userName">
            <el-input type="text" v-model="queryForm.userName" auto-complete="off" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label="" prop="pass">
            <el-input type="text" v-model="queryForm.pass" auto-complete="off" placeholder="车牌号" ></el-input>
          </el-form-item>
          <el-form-item label="" prop="userName">
            <el-input type="text" v-model="queryForm.userName" auto-complete="off" placeholder="发动机号"></el-input>
          </el-form-item>
          <el-form-item label="" prop="pass">
            <el-input type="text" v-model="queryForm.pass" auto-complete="off" placeholder="车架号" ></el-input>
          </el-form-item>
          <div class="result">
            <el-card class="box-card">
              <div slot="header" class="" style="border: none">
                <span>卡片名称卡片名称卡片名称卡片名称卡片名称卡片名称卡片名称卡片名称</span>
              </div>
              <div class="item">
                <span class="itemName">品牌</span>
                <span class="itemValue">大众</span>
              </div>
              <div class="item">
                <span class="itemName">发动机</span>
                <span class="itemValue">CTM</span>
              </div>
              <div class="item">
                <span class="itemName">发动机参数</span>
                <span class="itemValue">6缸250kw</span>
              </div>
              <div class="item">
                <span class="itemName">变速箱</span>
                <span class="itemValue">双离合变速器（PDK）</span>
              </div>
              <div class="item">
                <span class="itemName">换挡类型</span>
                <span class="itemValue">自动</span>
              </div>
              <div class="item">
                <span class="itemName">档位数</span>
                <span class="itemValue">6挡</span>
              </div>
              <div class="item">
                <span class="itemName">排量</span>
                <span class="itemValue">2.0L</span>
              </div>
              <div class="item">
                <span class="itemName">生产年份</span>
                <span class="itemValue">2016生产</span>
              </div>
              <div class="item">
                <span class="itemName">上市年份</span>
                <span class="itemValue">2016年7月</span>
              </div>
              <div class="item">
                <span class="itemName">车架号</span>
                <span class="itemValue">WP1AB2959GL065973</span>
              </div>
              <div class="item">
                <span class="itemName">车辆配置名称</span>
                <span class="itemValue">2.0T 双离合(改款)2.0T 双离合(改款)2.0T 双离合(改款)2.0T 双离合(改款)2.0T 双离合(改款)</span>
              </div>
              <div class="item">
                <span class="itemName">车系</span>
                <span class="itemValue"> 途观</span>
              </div>
              <div class="item">
                <span class="itemName">燃油标号</span>
                <span class="itemValue">  92#汽油</span>
              </div>
              <div class="item">
                <span class="itemName">车辆级别 </span>
                <span class="itemValue">  中型SUV</span>
              </div>
              <div class="item">
                <span class="itemName">车门车座  </span>
                <span class="itemValue">  五门5座</span>
              </div>
              <div class="item">
                <span class="itemName">车身形式  </span>
                <span class="itemValue"> 两厢</span>
              </div>
              <div class="item">
                <span class="itemName">驱动方式   </span>
                <span class="itemValue">   全时四驱</span>
              </div>
              <div class="item">
                <span class="itemName">车型    </span>
                <span class="itemValue">  中型</span>
              </div>
              <div class="item">
                <span class="itemName">厂家名称    </span>
                <span class="itemValue">    一汽大众</span>
              </div>
              <div class="item">
                <span class="itemName">厂商指导    </span>
                <span class="itemValue"> 19.8万元</span>
              </div>
            </el-card>
          </div>
          <el-form-item>
            <el-button type="primary" @click="submitForm('queryForm')">查询配置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
    name: "Query",
    data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      queryForm: {
        userName: '',
        pass: '',
      },
      rulesquery: {
        /*   userName: [
             { validator: validatePass, trigger: 'blur' }
           ],
           pass: [
             { validator: validatePass2, trigger: 'blur' }
           ],*/
      }
    };
  },
    methods: {
      submitForm(queryForm) {
      this.$refs[queryForm].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
    }
</script>

<style scoped lang="stylus">
.config
  width: 100%
  height 100%
  margin-top 10%
  .query-form
    .el-form-item
      width 86%
      margin-left 7%
    .result
      width 100%
      margin-top 5%
      .el-card
        box-shadow none
        border none
        .el-card__header
          border-bottom none
          div
            span
              font-size 1.5rem
              color:#666666
              text-align: center
              display inline-block
              width 100%
              overflow hidden;
              text-overflow ellipsis;
              white-space nowrap;
        .el-card__body
          width 100%
          padding-left 0
          padding-right 0
          .text
            font-size: 1.2rem
          .item
            height 32px
            line-height 32px
            display flex
            flex-wrap wrap
            justify-content space-around
            border-top 1px solid #DCDCDC
            .itemName
              width 120px
              display inline-block
              padding-left 1rem
            .itemValue
              flex 1
              display inline-block
              text-align right
              padding-right 1rem
              overflow hidden;
              text-overflow ellipsis;
              white-space nowrap;
    .el-form-item
      margin-bottom 10px
    .el-button
      width 100%
      margin-top 15%
    .el-button--primary
      background #FF6600
      border none
</style>
