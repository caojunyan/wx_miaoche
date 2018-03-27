<template>
    <div class="add">
      <template>
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
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
          <el-tab-pane label="增加客户" name="second">
            <!--增加客户-->
            <div class="addcustomer">
              <el-form :model="customerForm" status-icon :rules="customerFormRules" ref="customerForm"  class="demo-ruleForm">
                <el-form-item  prop="name">
                  <el-input type="" v-model="customerForm.name" auto-complete="off" placeholder="客户姓名"></el-input>
                </el-form-item>
                <el-form-item  prop="salesman">
                  <el-select v-model="customerForm.group" placeholder="请选择组别" class="saleSelect">
                    <el-option v-for="(group,index) in groups" :label="group" :value="group" :key="index"></el-option>
                  </el-select>
                  <el-select v-model="customerForm.salesman" placeholder="请选择业务员" class="saleSelect">
                    <el-option v-for="(salesman,index) in staffs" :label="salesman" :value="salesman" :key="index"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item  prop="sex">
                  <el-select v-model="customerForm.sex" placeholder="性别">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item  prop="phone">
                  <el-input type="" v-model="customerForm.phone" auto-complete="off" placeholder="电话"></el-input>
                </el-form-item>
                <el-form-item  prop="idNumber">
                  <el-input type="" v-model="customerForm.idNumber" auto-complete="off" placeholder="身份证" @blur="computeAge"></el-input>
                </el-form-item>
                <el-form-item  prop="age">
                  <el-input type="" v-model="customerForm.age" auto-complete="off" placeholder="年龄"></el-input>
                </el-form-item>
                <el-form-item  prop="marital">
                  <el-select v-model="customerForm.marital" placeholder="请选择婚姻状况">
                    <el-option label="已婚" value="已婚"></el-option>
                    <el-option label="未婚" value="未婚"></el-option>
                    <el-option label="离异" value="离异"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item  prop="education">
                  <el-select v-model="customerForm.education" placeholder="学历">
                    <el-option label="中专（含一下）" value="中专（含一下）"></el-option>
                    <el-option label="大专" value="大专"></el-option>
                    <el-option label="本科" value="本科"></el-option>
                    <el-option label="硕士（及以上）" value="硕士（及以上）"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item  prop="registrationAdd">
                  <el-input type="" v-model="customerForm.registrationAdd" auto-complete="off" placeholder="户籍地址"></el-input>
                </el-form-item>
                <el-form-item  prop="address">
                  <el-input type="" v-model="customerForm.address" auto-complete="off" placeholder="现住地址"></el-input>
                </el-form-item>
                <el-form-item  prop="housingType">
                  <el-select v-model="customerForm.housingType" placeholder="住宅类型">
                    <el-option label="自有房产" value="自有房产"></el-option>
                    <el-option label="亲戚房" value="亲戚房"></el-option>
                    <el-option label="租房" value="租房"></el-option>
                    <el-option label="公司宿舍" value="公司宿舍"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item  prop="company">
                  <el-input type="" v-model="customerForm.company" auto-complete="off" placeholder="工作单位"></el-input>
                </el-form-item>
                <el-form-item  prop="industry">
                  <el-input type="" v-model="customerForm.industry" auto-complete="off" placeholder="所属行业"></el-input>
                </el-form-item>
                <el-form-item  prop="comType">
                  <el-select v-model="customerForm.comType" placeholder="单位性质">
                    <el-option label="政府职能部门" value="政府职能部门"></el-option>
                    <el-option label="事业单位" value="事业单位"></el-option>
                    <el-option label="国企" value="国企"></el-option>
                    <el-option label="有限责任公司" value="有限责任公司"></el-option>
                    <el-option label="个体工商户" value="个体工商户"></el-option>
                    <el-option label="自由职业" value="自由职业"></el-option>
                    <el-option label="世界五百强" value="世界五百强"></el-option>
                    <el-option label="私营" value="私营"></el-option>
                    <el-option label="社会团体" value="社会团体"></el-option>
                    <el-option label="民营" value="民营"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item  prop="position">
                  <el-select v-model="customerForm.position" placeholder="职位">
                    <el-option label="普通员工" value="普通员工"></el-option>
                    <el-option label="中层管理" value="中层管理"></el-option>
                    <el-option label="高层管理" value="高层管理"></el-option>
                    <el-option label="决策性管理" value="决策性管理"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item  prop="comAdd">
                  <el-input type="" v-model="customerForm.comAdd" auto-complete="off" placeholder="单位地址"></el-input>
                </el-form-item>
                <el-form-item  prop="monthly">
                  <el-input type="" v-model="customerForm.monthly" auto-complete="off" placeholder="收入情况"></el-input>
                </el-form-item>
                <el-form-item  prop="source">
                  <el-select v-model="customerForm.source" placeholder="客户来源">
                    <el-option label="渠道" value="渠道"></el-option>
                    <el-option label="一手客户" value="一手客户"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('customerForm')">添加</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
      </template>
    </div>
</template>

<script>
  import {addCustomer,getDepartmentInfos} from "../api/api"
    export default {
      name: "Add",
      data() {
        let checkPhone = (rule, value, callback) => {
          let regPhone = /^1[3|4|5|7}8][0-9]\d{4,8}$/;
          if (value === "") {
            callback(new Error("请输入手机号"));
          } else if (!regPhone.test(value) || value.length != 11) {
            callback(new Error("请输入正确的手机号"));
          } else {
            callback();
          }
        };
        let checkID = (rule, value, callback) => {
          if (value === "") {
            callback(new Error("请输入身份证号"));
          }
          let idCardNoUtil = {
            provinceAndCitys: {
              11: "北京",
              12: "天津",
              13: "河北",
              14: "山西",
              15: "内蒙古",
              21: "辽宁",
              22: "吉林",
              23: "黑龙江",
              31: "上海",
              32: "江苏",
              33: "浙江",
              34: "安徽",
              35: "福建",
              36: "江西",
              37: "山东",
              41: "河南",
              42: "湖北",
              43: "湖南",
              44: "广东",
              45: "广西",
              46: "海南",
              50: "重庆",
              51: "四川",
              52: "贵州",
              53: "云南",
              54: "西藏",
              61: "陕西",
              62: "甘肃",
              63: "青海",
              64: "宁夏",
              65: "新疆",
              71: "台湾",
              81: "香港",
              82: "澳门",
              91: "国外"
            },
            powers: [
              "7",
              "9",
              "10",
              "5",
              "8",
              "4",
              "2",
              "1",
              "6",
              "3",
              "7",
              "9",
              "10",
              "5",
              "8",
              "4",
              "2"
            ],
            parityBit: ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"],
            genders: { male: "男", female: "女" },
            checkAddressCode: function(addressCode) {
              var check = /^[1-9]\d{5}$/.test(addressCode);
              if (!check) return false;
              if (
                idCardNoUtil.provinceAndCitys[parseInt(addressCode.substring(0, 2))]
              ) {
                return true;
              } else {
                return false;
              }
            },
            checkBirthDayCode: function(birDayCode) {
              var check = /^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(
                birDayCode
              );
              if (!check) return false;
              var yyyy = parseInt(birDayCode.substring(0, 4), 10);
              var mm = parseInt(birDayCode.substring(4, 6), 10);
              var dd = parseInt(birDayCode.substring(6), 10);
              var xdata = new Date(yyyy, mm - 1, dd);
              if (xdata > new Date()) {
                return false; //生日不能大于当前日期
              } else if (
                xdata.getFullYear() == yyyy &&
                xdata.getMonth() == mm - 1 &&
                xdata.getDate() == dd
              ) {
                return true;
              } else {
                return false;
              }
            },
            getParityBit: function(idCardNo) {
              var id17 = idCardNo.substring(0, 17);

              var power = 0;
              for (var i = 0; i < 17; i++) {
                power +=
                  parseInt(id17.charAt(i), 10) * parseInt(idCardNoUtil.powers[i]);
              }

              var mod = power % 11;
              return idCardNoUtil.parityBit[mod];
            },
            checkParityBit: function(idCardNo) {
              var parityBit = idCardNo.charAt(17).toUpperCase();
              if (idCardNoUtil.getParityBit(idCardNo) == parityBit) {
                return true;
              } else {
                return false;
              }
            },
            checkIdCardNo: function(idCardNo) {
              //15位和18位身份证号码的基本校验
              var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
              if (!check) return false;
              //判断长度为15位或18位
              if (idCardNo.length == 15) {
                return idCardNoUtil.check15IdCardNo(idCardNo);
              } else if (idCardNo.length == 18) {
                return idCardNoUtil.check18IdCardNo(idCardNo);
              } else {
                return false;
              }
            },

            //校验15位的身份证号码
            check15IdCardNo: function(idCardNo) {
              //15位身份证号码的基本校验
              var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(
                idCardNo
              );
              if (!check) return false;
              //校验地址码
              var addressCode = idCardNo.substring(0, 6);
              check = idCardNoUtil.checkAddressCode(addressCode);
              if (!check) return false;
              var birDayCode = "19" + idCardNo.substring(6, 12);
              //校验日期码
              return idCardNoUtil.checkBirthDayCode(birDayCode);
            },

            //校验18位的身份证号码
            check18IdCardNo: function(idCardNo) {
              //18位身份证号码的基本格式校验
              var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(
                idCardNo
              );
              if (!check) return false;
              //校验地址码
              var addressCode = idCardNo.substring(0, 6);
              check = idCardNoUtil.checkAddressCode(addressCode);
              if (!check) return false;
              //校验日期码
              var birDayCode = idCardNo.substring(6, 14);
              check = idCardNoUtil.checkBirthDayCode(birDayCode);
              if (!check) return false;
              //验证校检码
              return idCardNoUtil.checkParityBit(idCardNo);
            },

            formateDateCN: function(day) {
              var yyyy = day.substring(0, 4);
              var mm = day.substring(4, 6);
              var dd = day.substring(6);
              return yyyy + "-" + mm + "-" + dd;
            },

            //获取信息
            getIdCardInfo: function(idCardNo) {
              var idCardInfo = {
                gender: "", //性别
                birthday: "" // 出生日期(yyyy-mm-dd)
              };
              if (idCardNo.length == 15) {
                var aday = "19" + idCardNo.substring(6, 12);
                idCardInfo.birthday = idCardNoUtil.formateDateCN(aday);
                if (parseInt(idCardNo.charAt(14)) % 2 == 0) {
                  idCardInfo.gender = idCardNoUtil.genders.female;
                } else {
                  idCardInfo.gender = idCardNoUtil.genders.male;
                }
              } else if (idCardNo.length == 18) {
                var aday = idCardNo.substring(6, 14);
                idCardInfo.birthday = idCardNoUtil.formateDateCN(aday);
                if (parseInt(idCardNo.charAt(16)) % 2 == 0) {
                  idCardInfo.gender = idCardNoUtil.genders.female;
                } else {
                  idCardInfo.gender = idCardNoUtil.genders.male;
                }
              }
              return idCardInfo;
            },
            getId15: function(idCardNo) {
              if (idCardNo.length == 15) {
                return idCardNo;
              } else if (idCardNo.length == 18) {
                return idCardNo.substring(0, 6) + idCardNo.substring(8, 17);
              } else {
                return null;
              }
            },
            getId18: function(idCardNo) {
              if (idCardNo.length == 15) {
                var id17 = idCardNo.substring(0, 6) + "19" + idCardNo.substring(6);
                var parityBit = idCardNoUtil.getParityBit(id17);
                return id17 + parityBit;
              } else if (idCardNo.length == 18) {
                return idCardNo;
              } else {
                return null;
              }
            }
          };
          if (idCardNoUtil.checkIdCardNo(value)) {
            callback();
          } else {
            callback(new Error("请输入正确的身份证号"));
          }
        };
        return {
          customerForm: {
            name: "",
            salesman: "",
            sex: "男",
            phone: "",
            idNumber: "",
            age: "",
            marital: "",
            education: "",
            registrationAdd: "", // 户籍地址
            address: "", //现住地址
            housingType: "", //住宅类型
            company: "", //工作单位
            comType: "", //单位性质
            industry: "", //所属行业
            position: "", //职位
            comAdd: "", //单位地址
            monthly: "", //收入情况
            source: "" //客户来源
          },
          customerFormRules: {
           /* salesman: [{ required: true, message: "请选择业务员", trigger: "change" }],*/
            name: [
              { required: true, message: "请输入客户姓名", trigger: "blur" },
              { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
            ],
            sex: [{ required: true, message: "请选择性别", trigger: "change" }],
            phone: [{ validator: checkPhone, trigger: "blur" }],
            idNumber: [{ validator: checkID, trigger: "blur" }],
            age: [
              {
                type: "number",
                required: true,
                message: "请输入年龄",
                trigger: "blur"
              }
            ],
            marital: [
              { required: true, message: "请选择婚姻状况", trigger: "change" }
            ],
            education: [
              { required: true, message: "请选择学历", trigger: "change" }
            ],
            registrationAdd: [
              { required: true, message: "请填入信息", trigger: "blur" }
            ],
            address: [{ required: true, message: "请填入信息", trigger: "blur" }],
            housingType: [
              { required: true, message: "请选择房屋类型", trigger: "change" }
            ],
            company: [{ required: true, message: "请填入信息", trigger: "blur" }],
            comType: [{ required: true, message: "请填入信息", trigger: "blur" }],
            industry: [{ required: true, message: "请填入信息", trigger: "blur" }],
            position: [
              { required: true, message: "请选择职位", trigger: "change" }
            ],
            comAdd: [{ required: true, message: "请填入信息", trigger: "blur" }],
            source: [{ required: true, message: "请填入信息", trigger: "blur" }],
            monthly: [
              { required: true, message: "收入必须为数字值"}
            ]
          },
          activeName2: 'first',
          formInline: {
            user: '',
            region: ''
          },

          //业务员
          departmentInfos: "",
          groups: [],
          staffs: []
        };
      },
      methods: {
        computeAge: function() {
          let yyyy = this.customerForm.idNumber.substr(6, 4);
          this.customerForm.age = new Date().getFullYear() - yyyy;
        },
        handleClick(tab, event) {

        },
        onSubmit() {

        },
        // 添加客户
          /*var input=document.querySelectorAll('input');*/
         /*       for(var i=0;i<input.length;i++){
            if(input[i].value!==""){
              addCustomer(this,this.customerForm).then(res=>{
                console.log(res)
              })
            }else{
              alert("用户信息不能为空")
              return;
            }
          }*/
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                addCustomer(this,this.customerForm).then(res=>{
                 alert('提交成功')
                })
              } else {
                console.log('error submit!!');
                return false;
              }
            });
        }
      },
      mounted(){
        getDepartmentInfos(this).then(res=>{
          this.departmentInfos=res.data;
          let groups=[];
          for(let item in res.data){
            groups.push(item)
          }
          this.groups=groups;
        })
      },
      watch:{
        "customerForm.group":function(val){
          this.customerForm.salesman = "";
          this.staffs = this.departmentInfos[val];
        }
      }
    }
</script>

<style scoped lang="stylus">
.add
  .query
    margin-top 60px
    width 70%
    margin-left 15%
    .el-button
      width 100%
      background #FF6600
      border none

  .addcustomer
    padding-left 20px
    padding-right 20px
    .el-button
      width 100%
      background #FF6600
      border none
    .el-form-item__content
      width 100%
      .el-select
        width 100%
        outline none
        &.saleSelect
          width 47%
</style>
