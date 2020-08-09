<template>
  <div class="form_container">
    <div class="manage_tip">
      <div class="title">Pongoshare管理后台</div>
      <el-form ref="loginForm" :rules="rules" :model="loginForm" label-width="100px">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="loginForm.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit_btn" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的用户名邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(loginForm) {
      this.$refs[loginForm].validate(valid => {
        if (valid) {
          console.log(this.loginForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.form_container {
  position: relative;
  width: 100%;
  height: 100%;
  // background: url(../../assets/bg.jpg) no-repeat center center;
  // background-size: 100% 100%;
  // ---
  .manage_tip {
    width: 370px;
    height: auto;
    position: absolute;
    top: 20%;
    left: 46%;
    padding: 25px 100px 25px 25px;
    border-radius: 5px;
    text-align: center;
    margin-left: -185px;
    border: 1px solid #ccc;
    .title {
      font-family: "Microsoft YaHei";
      font-weight: bold;
      font-size: 26px;
      color: #ccc;
      text-align: right;
      padding: 10px 10px 50px;
    }
  }
}
.loginForm {
  margin-top: 20px;
  background-color: white;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccccc;
}
.submit_btn {
  width: 100%;
}
.info {
  float: right;
  font-size: 14px;
  color: #606266;
}
a {
  text-decoration: none;
}
</style>
