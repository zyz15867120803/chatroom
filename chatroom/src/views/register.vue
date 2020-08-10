<template>
    <div class="register">
      <el-row type="flex" justify="center" align="middle" class="row-box">
        <el-col :xs="16" :sm="12" :md="10" :lg="8" :xl="6">
            <el-card class="card-box">
              <div slot="header" class="card-header">
                <span>Sign up</span>
                <el-button type="primary" round size="small" @click="gotoLogin">返回</el-button>
              </div>
              <el-form
                ref="registerForm"
                :model="form"
                :rules="rules"
                label-width="70px"
              >
                <el-form-item label="用户名" prop="username">
                  <el-input type="text" v-model="form.username" prefix-icon="el-icon-user-solid" clearable></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="form.password" prefix-icon="el-icon-s-grid" show-password clearable></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="repassword">
                  <el-input type="password" v-model="form.repassword" prefix-icon="el-icon-s-grid" show-password clearable></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                  <el-input type="text" v-model="form.email" prefix-icon="el-icon-message" clearable></el-input>
                </el-form-item>
              </el-form>
              <el-button
                type="primary"
                round class="register-btn"
                @click="register"
              >
                注册
              </el-button>
            </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'register',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入用户名'));
        }
        this.timer = setTimeout(() => {
          clearTimeout(this.timer);
          if (value.length < 8) {
            callback(new Error('用户名不能少于8位'));
          } else if (value.length > 15) {
            callback(new Error('用户名不能超过15位'));
          } else if (!/^\d+$/.test(value)) {
            callback(new Error('用户名只能包含数字'));
          } else {
            callback();
          }
        }, 800);
      };
      const validatePassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入密码'));
        }
        this.timer = setTimeout(() => {
          clearTimeout(this.timer);
          if (value.length < 6) {
            callback(new Error('密码长度不能少于6位'));
          } else if (value.length > 15) {
            callback(new Error('密码长度不能超过15位'));
          } else if (!/^[a-zA-z0-9]+$/.test(value)) {
            callback(new Error('密码只能包含数字和字母'));
          } else {
            callback();
          }
        }, 800);
      };
      const validateRepassword = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请确认密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入的密码不一致'));
        } else {
          callback();
        }
      };
      const validateEmail = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入邮箱'));
        } else if (!/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(value)) {
          callback(new Error('邮箱格式错误'));
        } else {
          callback();
        }
      };
      return {
        form: {
          username: '',
          password: '',
          repassword: '',
          email: ''
        },
        rules: {
          username: [{
            validator: validateUsername,
            trigger: 'change'
          }],
          password: [{
            validator: validatePassword,
            trigger: 'change'
          }],
          repassword: [{
            validator: validateRepassword,
            trigger: 'blur'
          }],
          email: [{
            validator: validateEmail,
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      gotoLogin() {
        this.$router.push({
          name: 'login'
        });
      },
      register() {
        this.$refs.registerForm.validate(valid => {
          if (valid) {

          }
        });
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .register
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
          .register-btn
            width: 100%
</style>
