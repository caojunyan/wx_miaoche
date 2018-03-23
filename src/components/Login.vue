<template>
  <div class="login">
    <div class="logo">
      <img src="../../static/logo.png" alt="">
    </div>
    <div class="login-form">
      <el-form :model="loginForm" status-icon :rules="rulesLogin" ref="loginForm"  class="demo-ruleForm">
        <el-form-item label="" prop="userName">
          <el-input type="text" v-model="loginForm.userName" auto-complete="off" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="" prop="pass">
          <el-input type="password" v-model="loginForm.pass" auto-complete="off" placeholder="密码" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登&nbsp;&nbsp;陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
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
      loginForm: {
        userName: '',
        pass: '',
      },
      rulesLogin: {
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
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

<style scoped  lang="stylus">
.login
  width 100%
  height 100%
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background #F0E072
  .logo
    margin 0 auto
    width 54%
    margin-left 23%
    margin-top 20%
    img
      width 100%
  .login-form
    margin-top 20%
    width 70%
    margin-left 15%
    .el-form-item
      margin-bottom 10px
    .el-button
      width 100%
      margin-top 15%
    .el-button--primary
      background #FF6600
      border none
</style>
