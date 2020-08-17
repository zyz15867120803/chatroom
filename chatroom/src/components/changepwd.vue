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
        label-width="65px"
      >
        <el-form-item label="新密码" prop="password">
          <el-input type="password" v-model="form.password" prefix-icon="el-icon-s-grid" clearable show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="repassword">
          <el-input type="password" v-model="form.repassword" prefix-icon="el-icon-s-grid" clearable show-password></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" round class="change-btn" @click="usercheck" :disabled="cantCheck">确定</el-button>
    </el-card>
</template>

<script>
  export default {
    name: 'changepwd',
    data() {
      return {};
    },
    methods: {
      gotoLogin() {
        this.$router.push({
          name: 'login'
        });
      },
      usercheck() {
        this.$router.push({
          name: 'changePwd',
          params: {
            username: '15867120803'
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
