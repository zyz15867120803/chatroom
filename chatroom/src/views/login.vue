<template>
    <div class="login">
      <el-row type="flex" justify="center" align="middle" class="row-box">
        <el-col :xs="16" :sm="12" :md="10" :lg="8" :xl="6">
            <el-card class="card-box">
              <div slot="header" class="card-header">
                <span>Welcome</span>
                <el-button type="primary" round size="small" @click="gotoRegister">注册</el-button>
              </div>
              <el-form
                ref="loginForm"
                :model="form"
                :rules="rules"
                :hide-required-asterisk="true"
                label-width="65px"
              >
                <el-form-item label="用户名" prop="username">
                  <el-input type="text" v-model="form.username" prefix-icon="el-icon-user-solid" clearable></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="form.password" prefix-icon="el-icon-s-grid" show-password clearable></el-input>
                </el-form-item>
              </el-form>
              <el-button type="primary" round class="login-btn" @click="login">登录</el-button>
            </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      gotoRegister() {
        this.$router.push({
          name: 'register'
        });
      },
      login() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {

          }
        });
      }
    }
  };
</script>

<style lang="stylus" scoped>
    .login
      width: 100%
      height: 100%
      background-image: url("../assets/timg.jpg")
      background-repeat: no-repeat
      background-position: center
      background-size: cover
      .row-box
        height: 100%
        .card-box
          opacity: 0.7
          .card-header
            display: flex
            justify-content: space-between
            align-items: center
          .login-btn
            width: 100%
</style>
