<template>
  <div class="userlist">
    <el-container class="container">
      <el-aside width="250px" class="aside">
        <div class="inner">
          <ul class="list">
            <li class="item">
              <div class="wrapper">
                <el-avatar
                  :size="36"
                  src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
                  shape="square"
                  fit="contain"
                >
                </el-avatar>
                <div class="username">bleach-zhu</div>
              </div>
            </li>
          </ul>
        </div>
      </el-aside>
      <el-main class="main">
       <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'userlist',
    data() {
      return {};
    }
  };
</script>

<style lang="stylus" scoped>
  .userlist
    width: 100%
    height: 100%
    .container
      width: 100%
      height: 100%
      .aside
        height: 100%;
        background: #e7e7e7
        position: relative
        overflow: hidden
        .inner
          position: absolute
          top: 0
          left: 0
          right: -17px
          bottom: 0
          overflow-x: hidden
          overflow-y: scroll
        .list
          width: 250px
          list-style: none
          .item:hover
            background: rgba(200, 200, 200, 0.3)
          .item
            width: 100%
            height: 60px
            padding: 10px
            border-bottom: 1px solid rgba(180, 180, 180, 0.2)
            box-sizing: border-box
            .wrapper
              height: 100%
              display: flex
              align-items: center
              .username
                flex-grow: 1
                padding-left: 10px
                font-size: 15px
                font-weight: 500
                color: rgba(0, 0, 0, 0.9)
      .main
        height: 100%
        padding: 0
        background: #f0f0f0
</style>
