<template>
  <div class="forget">
    <el-row type="flex" justify="center" align="middle" class="row-box">
        <el-col :xs="16" :sm="12" :md="10" :lg="8" :xl="6">
            <router-view></router-view>
        </el-col>
      </el-row>
  </div>
</template>

<script>
  export default {
    name: 'forget'
  };
</script>

<style lang="stylus" scoped>
  .forget
    width: 100%
    height: 100%
    .row-box
      height: 100%
</style>
