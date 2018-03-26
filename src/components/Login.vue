<template>
  <div class="login">
    <div class="logo">
      <img src="../../static/logo.png" alt="">
    </div>
    <div class="login-form">
      <el-form :model="user" :rules="rules" ref="user" class="demo-ruleForm">
        <el-form-item  prop="email" >
          <el-input v-model="user.email" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="user.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {getAdmin,getUser} from "../api/api";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: '15072340338',
        password:'123456'
      },
      rules: {
        email: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 11, max: 11, message: '手机号格式不正确', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    // 登陆
    submitForm(formName) {
      // 获取用户信息
      getAdmin(this,this.user).then(data => {
        if (data) {
           getUser(this).then(res=>{
             console.log(res.data.data.depart)
             var depart=res.data.data.depart
             if(depart==="业务A组"){
               console.log(res.data.data.name)
               this.$router.push({path:'/add'})
             }else if(depart==="业务B组"){
               this.$router.push({path:'/add'})
             }else if(depart==="技术部"){
               this.$router.push({path:'/query'})
             }else if(depart==="资产管理部门"){
               this.$router.push({path:'/customerManager'})
             }else{
               this.$router.push({path:'/customer'})
             }
          })
        }
      })
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
      margin-bottom 20px
    .el-button
      width 100%
      margin-top 15%
    .el-button--primary
      background #FF6600
      border none
</style>
