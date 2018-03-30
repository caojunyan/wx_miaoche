<template>
    <div class="config">
      <div class="query-form">
        <el-form :model="queryForm" status-icon :rules="rulesquery" ref="queryForm"  class="demo-ruleForm">
          <el-form-item label="" prop="name">
            <el-input type="text" v-model="queryForm.name" auto-complete="off" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label="" prop="price">
            <el-input type="text" v-model="queryForm.price" auto-complete="off" placeholder="评估价（元）"></el-input>
          </el-form-item>
          <el-form-item label="" prop="mileage">
            <el-input type="text" v-model="queryForm.mileage" auto-complete="off" placeholder="车里数（km）"></el-input>
          </el-form-item>
          <el-form-item label="" prop="plate">
            <el-input type="text" v-model="queryForm.plate" auto-complete="off" placeholder="车牌号"></el-input>
          </el-form-item>
          <el-form-item label="" prop="engineNum">
            <el-input type="text" v-model="queryForm.engineNum" auto-complete="off" placeholder="发动机号"></el-input>
          </el-form-item>
          <el-form-item label="" prop="appearance">
            <el-input type="text" v-model="queryForm.appearance" auto-complete="off" placeholder="车外表情况"></el-input>
          </el-form-item>
          <el-form-item label="" prop="carStatu">
            <el-input type="text" v-model="queryForm.carStatu" auto-complete="off" placeholder="车内情况"></el-input>
          </el-form-item>
          <el-form-item label="" prop="annualInspection">
            <el-input type="text" v-model="queryForm.annualInspection" auto-complete="off" placeholder="年检"></el-input>
          </el-form-item>
          <el-form-item label="" prop="samePlate">
            <el-input type="text" v-model="queryForm.samePlate" auto-complete="off" placeholder="前后车牌一致" ></el-input>
          </el-form-item>
          <el-form-item label="" prop="illegalNum">
            <el-input type="text" v-model="queryForm.illegalNum" auto-complete="off" placeholder="违章(单)"></el-input>
          </el-form-item>
          <el-form-item label="" prop="illegalSore">
            <el-input type="text" v-model="queryForm.illegalSore" auto-complete="off" placeholder="扣分(分)" ></el-input>
          </el-form-item>
          <el-form-item  prop="illegalPrice">
            <el-input v-model.number="queryForm.illegalPrice" placeholder="违章罚款(元)"></el-input>
          </el-form-item>
          <el-form-item  prop="illegal">
            <el-input v-model.number="queryForm.illegal" placeholder="单次扣12分(次)"></el-input>
          </el-form-item>
          <div class="result" v-show="resultFlag">
            <el-card class="box-card">
              <div slot="header" class="" style="border: none">
                <span>卡片名称卡片名称卡片名称卡片名称卡片名称卡片名称卡片名称卡片名称</span>
              </div>
              <div class="item">
                <span class="itemName">品牌</span>
                <span class="itemValue">大众</span>
              </div>
              <div class="item">
                <span class="itemName">车型</span>
                <span class="itemValue">CTM</span>
              </div>
              <div class="item">
                <span class="itemName">生产年份</span>
                <span class="itemValue">6缸250kw</span>
              </div>
              <div class="item">
                <span class="itemName">车辆配置名称</span>
                <span class="itemValue">双离合变速器（PDK）</span>
              </div>
              <div class="item">
                <span class="itemName">换挡类型</span>
                <span class="itemValue">自动</span>
              </div>
              <div class="item">
                <span class="itemName">上市年月</span>
                <span class="itemValue">6挡</span>
              </div>
              <div class="item">
                <span class="itemName">档位数</span>
                <span class="itemValue">2.0L</span>
              </div>
              <div class="item">
                <span class="itemName">车系</span>
                <span class="itemValue">2016生产</span>
              </div>
              <div class="item">
                <span class="itemName">燃油标号</span>
                <span class="itemValue">2016年7月</span>
              </div>
              <div class="item">
                <span class="itemName">年款</span>
                <span class="itemValue">WP1AB2959GL065973</span>
              </div>
              <div class="item">
                <span class="itemName">车辆级别</span>
                <span class="itemValue">2.0T 双离合(改款)2.0T 双离合(改款)2.0T 双离合(改款)2.0T 双离合(改款)2.0T 双离合(改款)</span>
              </div>
              <div class="item">
                <span class="itemName">发动机型号</span>
                <span class="itemValue"> 途观</span>
              </div>
              <div class="item">
                <span class="itemName">变速箱</span>
                <span class="itemValue">  92#汽油</span>
              </div>
              <div class="item">
                <span class="itemName">车门车座 </span>
                <span class="itemValue">  中型SUV</span>
              </div>
              <div class="item">
                <span class="itemName">发动机参数  </span>
                <span class="itemValue">  五门5座</span>
              </div>
              <div class="item">
                <span class="itemName">车身形式  </span>
                <span class="itemValue"> 两厢</span>
              </div>
              <div class="item">
                <span class="itemName">排量   </span>
                <span class="itemValue">   全时四驱</span>
              </div>
              <div class="item">
                <span class="itemName">驱动方式    </span>
                <span class="itemValue">  中型</span>
              </div>
              <div class="item">
                <span class="itemName">排放标准    </span>
                <span class="itemValue">    一汽大众</span>
              </div>
              <div class="item">
                <span class="itemName">厂家名称    </span>
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
      let checkPlate = (rule, value, callback) => {
        let regPlane = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/;
        if (value === "") {
          callback(new Error("请输入车牌号"));
        } else if (!regPlane.test(value)) {
          callback(new Error("请输入正确的车牌号"));
        } else {
          callback();
        }
      };
    return {
      resultFlag:false,
      queryForm: {
        id: this.$route.query.id,
        name: "",
        plate: "",
        examination: "", //验车人
        engineNum: "",
        frameNum: "",
        price: "",
        mileage: "",
        appearance: "",
        annualInspection: "",
        samePlate: "",
        illegalNum: "",
        illegalSore: "",
        illegalPrice: "",
        illegal: "",
        carStatu: "",
      },
      rulesquery: {
        examination: [
          { required: true, message: "请选择对应信息", trigger: "change" }
        ],
        name: [
          { required: true, message: "请填入信息", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        engineNum: [
          { required: true, message: "请填入信息", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ],
        frameNum: [
          { required: true, message: "请填入信息", trigger: "blur" },
          { min: 17, max: 17, message: "长度为17个字符", trigger: "blur" }
        ],
        price: [{ required: true, message: "请输入正确信息", type: "number" }],
        mileage: [
          { required: true, message: "请输入正确信息", type: "number" }
        ],
        appearance: [
          { required: true, message: "请选择对应信息", trigger: "change" }
        ],
        annualInspection: [
          { required: true, message: "请选择对应信息", trigger: "change" }
        ],
        carStatu: [
          { required: true, message: "请选择对应信息", trigger: "change" }
        ],
        samePlate: [
          { required: true, message: "请选择对应信息", trigger: "change" }
        ],
        illegalNum: [
          { required: true, message: "请输入正确信息", type: "number" }
        ],
        illegalSore: [
          { required: true, message: "请输入正确信息", type: "number" }
        ],
        illegalPrice: [
          { required: true, message: "请输入正确信息", type: "number" }
        ],
        illegal: [
          { required: true, message: "请输入正确信息", type: "number" }
        ],
        plate: [{ validator: checkPlate, trigger: "blur" }],
        "frameQueryResult.PRICE": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.MANUFACTUREDATE": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.NAME": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.TRANSMISSIONTYPE": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.LISTINGDATE": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.GEAR": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.SERIES": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.FUEL": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.YEAR": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.CARLEVEL": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.ENGINE": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.BODYTYPE": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.TRANSMISSION": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.ENGINETYPE": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.BODY": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.DRIVEMODE": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.DISPLACEMENT": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.MODELS": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.MANUFACTURER": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.BRAND": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ],
        "frameQueryResult.DISCHARGE": [
          { required: true, message: "请填入信息", trigger: "blur" }
        ]
      }
    };
  },
    methods: {
      submitForm(queryForm) {
      this.$refs[queryForm].validate((valid) => {
        if (valid) {
          this.resultFlag=true;
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
      margin-top 25px
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
