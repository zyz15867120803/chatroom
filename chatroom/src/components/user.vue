<template>
  <div class="user">
    <div class="container">
      <div class="header">
        <el-avatar
          :size="60"
          src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
          shape="square"
          fit="contain"
        >
        </el-avatar>
      </div>
      <div class="main">
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
            <div class="item-value">今天的风儿甚是喧嚣啊我想分阿发啊发阿达阿达瓦大大哇大大哇大大哇风格如果是</div>
          </li>
        </ul>
      </div>
      <div class="footer">
        <el-button type="success" class="msg-btn">发消息</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'user',
    data() {
      return {};
    }
  };
</script>

<style lang="stylus" scoped>
  .user
    box-sizing: border-box
    width: 100%
    height: 100%
    padding: 25px 50px
    display: flex
    justify-content: center
    .container
      box-sizing: border-box
      width: 400px
      padding: 0 10px;
      .header
        padding: 45px 0
        border-bottom: 1px solid rgba(180, 180, 180, 0.2)
        text-align: center
      .main
        padding: 30px 0
        border-bottom: 1px solid rgba(180, 180, 180, 0.2)
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
              overflow-wrap: anywhere
      .footer
        padding: 35px 0
        text-align: center
        .msg-btn
          padding-left: 48px
          padding-right: 48px
</style>
