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
        <el-form-item label="验证码" prop="password">
          <el-input type="text" v-model="form.password" prefix-icon="el-icon-s-grid" clearable>
            <el-button slot="append">获取验证码</el-button>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" round class="check-btn" @click="usercheck" :disabled="cantCheck">下一步</el-button>
    </el-card>
</template>

<script>
  export default {
    name: 'usercheck',
    data() {
      return {
        form: {
          username: ''
        },
        rules: {
          username: [{
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
    .check-btn
      width: 100%
</style>
