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
              <el-button type="primary" round class="login-btn" @click="login" :disabled="cantLogin">登录</el-button>
              <div class="footer">
                <el-switch
                  v-model="rememberMe"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  active-text="记住我"
                >
                </el-switch>
                <router-link :to="{name: 'userCheck'}">
                  <el-link type="danger">忘记密码？</el-link>
                </router-link>
              </div>
            </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import { login } from '@/util/api';

  export default {
    name: 'login',
    created() {
      this.form.username = '' || localStorage.getItem('username');
      this.form.password = '' || localStorage.getItem('password');
    },
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
        },
        cantLogin: false,
        rememberMe: true
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
            this.cantLogin = true;
            login(this.form).then(({ flag, msg }) => {
              if (flag === 0) {
                if (this.rememberMe) {
                  localStorage.setItem('username', this.form.username);
                  localStorage.setItem('password', this.form.password);
                } else {
                  localStorage.setItem('username', this.form.username);
                  localStorage.removeItem('password');
                }
                this.$message({
                  message: msg,
                  type: 'success',
                  center: true
                });
                this.$router.push({
                  name: 'chatroom'
                });
              } else if (flag === 1) {
                this.$message({
                  message: msg,
                  type: 'error',
                  center: true
                });
              }
              this.cantLogin = false;
            });
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
          .footer
            display: flex
            justify-content: space-between
            padding: 15px 15px 0 15px
</style>
