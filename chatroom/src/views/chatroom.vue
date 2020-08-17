<template>
    <div class="chatroom">
      <el-container class="container">
        <el-aside width="60px" class="aside">
          <el-avatar
            :size="40"
            shape="square"
            src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
            fit="contain"
            class="avatar"
          >
            user
          </el-avatar>
        </el-aside>
        <el-main class="main">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </div>
</template>

<script>
  export default {
    name: 'chatroom',
    data() {
      return {};
    }
  };
</script>

<style lang="stylus" scoped>
  .chatroom
    width: 100%
    height: 100%
    .container
      width: 100%
      height: 100%
      .aside
        height: 100%
        background: rgba(0, 0, 0, 0.8)
        .avatar
          margin: 10px
      .main
        height: 100%
        padding: 0
        background: #0f0
</style>
