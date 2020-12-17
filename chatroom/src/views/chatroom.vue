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
          <el-menu
            background-color="#2A2A2A"
            active-text-color="#00CC00"
            default-active="1-1"
            class="menu"
          >
            <el-menu-item-group>
              <el-menu-item index="1-1" class="menu-item" @click="gotoRoomList">
                <i class="el-icon-chat-round menu-icon"></i>
              </el-menu-item>
              <el-menu-item index="1-2" class="menu-item" @click="gotoUserList">
                <i class="el-icon-user-solid menu-icon"></i>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item index="2" class="menu-item" @click="logout">
              <i class="el-icon-switch-button menu-icon"></i>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="main">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
      <!-- <el-dialog
        :visible="true"
        width="400px"
        :show-close="false"
        center
        top="21vh"
      >
        <el-avatar
          slot="title"
          :size="60"
          src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
          shape="square"
          fit="contain"
        >
        </el-avatar>
        <ul class="list">
          <li class="item">
            <div class="item-name">
              <span>用</span>
              <span>户</span>
              <span>名</span>
            </div>
            <div class="item-value">15867120803</div>
          </li>
          <li class="item">
            <div class="item-name">
              <span>昵</span>
              <span>称</span>
            </div>
            <div class="item-value">男子高中生的日常</div>
          </li>
          <li class="item">
            <div class="item-name">
              <span>地</span>
              <span>区</span>
            </div>
            <div class="item-value">浙江 宁波</div>
          </li>
          <li class="item">
            <div class="item-name">
              <span>签</span>
              <span>名</span>
            </div>
            <div class="item-value">今天的风儿甚是喧嚣啊</div>
          </li>
        </ul>
        <el-button type="success" slot="footer" class="check">确定</el-button>
      </el-dialog> -->
    </div>
</template>

<script>
  export default {
    name: 'chatroom',
    data() {
      return {};
    },
    methods: {
      gotoRoomList() {
        this.$router.push({
          name: 'room'
        });
      },
      gotoUserList() {
        this.$router.push({
          name: 'user'
        });
      }
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
        background: #2A2A2A
        display: flex
        flex-direction: column
        justify-content: space-between
        .avatar
          margin: 20px 10px
        .el-menu::after
          display: none
        .el-menu::before
          display: none
        .menu
          height: calc(100% - 60px)
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
    .list
      padding-left: 15%
      padding-right: 15%
      list-style: none
      font-size: 15px
      .item + .item
        padding-top: 15px
      .item
        display: flex
        .item-name
          width: 45px
          display: flex
          justify-content: space-between
          color: rgba(120, 120, 120, 0.8)
        .item-value
          flex: 1
          padding-left: 45px
    .check
      padding-left: 55px
      padding-right: 55px
</style>
