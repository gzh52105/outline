<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="ruleForm.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="验证码" prop="vcode">
    <el-input v-model="ruleForm.vcode">
      <template v-slot:append>
        <div v-html="vcodeHtml"></div>
      </template>
    </el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
  </el-form-item>
</el-form>
    </div>
</template>
<script>

export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        vcode: ""
      },
      vcodeHtml: "",
      rules: {
        username: [
          { required: true, message: "请填写用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请填写密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    async submitForm() {
      const { username, password, vcode } = this.ruleForm;
      const data = await this.$request.post("/login", {
        username,
        password,
        vcode
      });

      if (data.code === 200) {
        // 保存用户信息
        this.$store.commit("user/login", data.data);

        // 用户登录成功后动态添加路由
        this.$store.commit('addRoute')

        let { targetUrl = "/manage" } = this.$route.query;
        this.$router.push(targetUrl);
      } else if (data.code === 401) {
        this.$message.error("验证码错误");
      } else {
        this.$message.error("用户名或验证码错误");
      }
    },
    async getVcode() {
      const data = await this.$request.get("/vcode/picture");
      this.vcodeHtml = data.data;
    }
  },
  created() {
    this.getVcode();
  }
};
</script>
