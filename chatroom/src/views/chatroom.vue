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
          <el-menu class="menu">
            <el-menu-item-group>
              <el-menu-item index="1-1" class="menu-item">
                <i class="el-icon-chat-round menu-icon"></i>
              </el-menu-item>
              <el-menu-item index="1-2" class="menu-item">
                <i class="el-icon-user-solid menu-icon"></i>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item index="2" class="menu-item">
              <i class="el-icon-s-operation menu-icon"></i>
            </el-menu-item>
          </el-menu>
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
          margin: 15px 10px
        .menu
          height: calc(100% - 200px)
          border: 0
          display: flex
          flex-direction: column
          justify-content: space-between
          .menu-item
            padding: 0 !important
            text-align: center
            .menu-icon
              margin: 0
      .main
        height: 100%
        padding: 0
        background: #0f0
</style>
