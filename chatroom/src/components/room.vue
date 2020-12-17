<template>
  <div class="room">
    <el-container class="container">
      <el-header class="header" height="60px">
        <span class="title">订阅号</span>
        <el-button icon="el-icon-caret-left" class="more"></el-button>
      </el-header>
      <el-main class="main">
        <ul class="list">
          <li class="item">
            <div class="item-avatar">
              <el-avatar
              :size="36"
              src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
              shape="square"
              fit="contain"
            >
            </el-avatar>
            </div>
            <div class="item-msg">
              <div class="nickname">
                伤
              </div>
              <div class="msg">
                <div class="msg-text">
                  你在干嘛
                </div>
              </div>
            </div>
          </li>
          <li class="item item1">
            <div class="item-avatar">
              <el-avatar
              :size="36"
              src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
              shape="square"
              fit="contain"
            >
            </el-avatar>
            </div>
            <div class="item-msg">
              <div class="nickname">
                伤
              </div>
              <div class="msg">
                <div class="msg-text">
                  你在干嘛
                </div>
              </div>
            </div>
          </li>
        </ul>
      </el-main>
      <el-footer class="footer" height="150px">
        <div class="input-wrapper">
          <el-input
            type="textarea"
            class="input"
            :autosize="{minRows: 4}"
            v-model="input"
          >
          </el-input>
        </div>
        <div class="send-wrapper">
          <el-button class="sendBtn">发送</el-button>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'room',
    data() {
      return {
        input: ''
      };
    }
  };
</script>

<style lang="stylus">
  .room
    width: 100%
    height: 100%
    .container
      width: 100%
      height: 100%
      .header
        padding: 0 10px 0 30px
        border-bottom: 1px solid rgba(180, 180, 180, 0.3)
        display: flex
        justify-content: space-between
        align-items: center
        .title
          font-size: 18px
          font-weight: 500
        .more
          border: 0
          background: none
          font-size: 24px
      .main
        padding: 0 30px
        .list
          list-style: none
          .item.item1
            flex-direction: row-reverse
            .nickname
              text-align: right
          .item
            width: 100%
            padding-top: 10px
            display: flex
            .item-avatar
              padding: 5px 0
            .item-msg
              padding: 0 10px
              max-width: 50%
              .nickname
                color: rgba(150, 150, 150, 0.8)
                font-size: 13px
              .msg
                padding-top: 5px
                .msg-text
                  padding: 5px
                  border: 1px solid rgba(90, 90, 90, 0.2)
                  border-radius: 6px
                  color: #000
                  font-size: 14px
                  background: #fff
      .footer
        border-top: 1px solid rgba(180, 180, 180, 0.3)
        position: relative
        overflow: hidden
        .input-wrapper
          position: absolute
          top: 0
          left: 0
          right: -17px
          bottom: 35px
          overflow-x: hidden
          overflow-y: scroll
          .input
            width: calc(100% - 17px)
            font-size: 16px
            font-weight: 500
        .send-wrapper
          position: absolute
          left: 0
          bottom: 0
          box-sizing: border-box
          width: 100%
          height: 35px
          padding: 5px 35px
          display: flex
          justify-content: flex-end
          .sendBtn
            padding: 4px 20px
</style>
