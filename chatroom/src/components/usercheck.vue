<template>
    <el-card class="usercheck-card">
      <div slot="header" class="card-header">
        <span>User Check</span>
        <el-button type="primary" round size="small" @click="gotoLogin">返回</el-button>
      </div>
      <el-form
        ref="checkForm"
        :model="form"
        :rules="rules"
        :hide-required-asterisk="true"
        label-width="65px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="form.username" prefix-icon="el-icon-user-solid" clearable></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="verification">
          <el-input type="text" v-model="form.verification" prefix-icon="el-icon-s-grid" clearable>
            <el-button slot="append" @click="getVerification" class="verification-text">获取验证码</el-button>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" round class="check-btn" @click="usercheck" :disabled="cantCheck">下一步</el-button>
    </el-card>
</template>

<script>
  import { getVerification, usercheck } from '@/util/api';

  export default {
    name: 'usercheck',
    data() {
      return {
        form: {
          username: '',
          verification: ''
        },
        rules: {
          username: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          verification: [{
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          }]
        },
        cantCheck: false
      };
    },
    methods: {
      gotoLogin() {
        this.$router.push({
          name: 'login'
        });
      },
      getVerification() {
        this.$refs.checkForm.validateField('username', e => {
          if (e === null || e === '') {
            getVerification().then();
          }
        });
      },
      usercheck() {
        this.$refs.checkForm.validate(valid => {
          if (valid) {
            this.cantCheck = true;
            usercheck();
          }
        });
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .usercheck-card
    opacity: 0.7
    .card-header
      display: flex
      justify-content: space-between
      align-items: center
    .verification-text
      color: rgba(0, 180, 0, 0.8)
    .check-btn
      width: 100%
</style>
