<template>
  <el-card class="changepwd-card">
      <div slot="header" class="card-header">
        <span>Change Password</span>
        <el-button type="primary" round size="small" @click="gotoLogin">返回</el-button>
      </div>
      <el-form
        ref="changeForm"
        :model="form"
        :rules="rules"
        :hide-required-asterisk="true"
        label-width="70px"
      >
        <el-form-item label="新密码" prop="password">
          <el-input type="password" v-model="form.password" prefix-icon="el-icon-s-grid" clearable show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="repassword">
          <el-input type="password" v-model="form.repassword" prefix-icon="el-icon-s-grid" clearable show-password></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" round class="change-btn" @click="changepwd">确定</el-button>
    </el-card>
</template>

<script>
  import { changepwd } from '@/util/api';

  export default {
    name: 'changepwd',
    data() {
      const validatePassword = (rule, value, callback) => {
        clearTimeout(this.registerTimer);
        if (!value) {
          return callback(new Error('请输入密码'));
        }
        this.registerTimer = setTimeout(() => {
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
      return {
        form: {
          password: '',
          repassword: ''
        },
        rules: {
          password: [{
            validator: validatePassword,
            trigger: 'change'
          }],
          repassword: [{
            validator: validateRepassword,
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
      changepwd() {
        this.$refs.changeForm.validate(valid => {
          if (valid) {
            changepwd().then();
          }
        });
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .changepwd-card
    opacity: 0.7
    .card-header
      display: flex
      justify-content: space-between
      align-items: center
    .change-btn
      width: 100%
</style>
