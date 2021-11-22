
<template>
  <div id="container">
    <div class="header">
      <img :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/imgs/personal/personal.png'" alt="">
      <button open-type="getUserInfo" @getuserinfo="getUserInfo">{{userInfo.nickName?userInfo.nickName:'登录'}}</button>
    </div>
    <div class="cardList">
      <div class="card" @click="scan">
        <span>扫码观影</span>
        <span class="more"> more> </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    getUserInfo (res) {
      if (res.mp.detail.userInfo) {
        this.userInfo = res.mp.detail.userInfo
      }
    },
    scan () {
      wx.scanCode({
        success: (res) => {
          this.userInfo = res.userInfo
        },
        fail: () => {
          console.log('获取失败')
        }
      })
    }
  },
  mounted () {
    wx.getUserInfo({
      success: (res) => {
        console.log(res.result)
      },
      fail: () => {
        console.log('获取失败')
      }
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#container{
  .header{
    padding 40rpx
    background #02a774
    img{
      height 100rpx
      width 100rpx
      vertical-align middle
      border-radius 50rpx
    }
    button{
      display inline-block
      height 60rpx
      line-height 60rpx
      background rgba(255,255,255,0.5)
      vertical-align middle
      margin-left 40rpx
      max-width 200rpx
    }
  }
  .cardList{
    .card{
      width 90%
      height 60rpx
      line-height 60rpx
      margin 10px auto
      border 1rpx solid #eee
      padding 10rpx
      .more{
        float right
      }
    }
  }
}
</style>
