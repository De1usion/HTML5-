<template>
  <div class="indexContainer">
   <img v-if="isShow" class="index_img" :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/imgs/personal/personal.png'" alt="">
   <Button class="btn" v-else @tap="getUserProfile">点击获取用户信息</Button>
    <p class="userName">hello {{userInfo.nickName}}</p>
    <div @tap="toDetail" class="goStudy">
      <p >开启小程序</p>
    </div>
  </div>

</template>

<script>

export default {
  data () {
    return {
      userInfo: {},
      isShow: false // 用户没有授权
    }
  },
  beforeMount () {
    console.log('----beforeMount----')
    this.getUserProfile()
  },
  methods: {
    getUserProfile () {
      wx.getUserProfile({
        desc: '获取你的昵称、头像、地区及性别',
        success: (res) => {
          this.userInfo = res.userInfo
          this.isShow = true
          console.log(res.result)
        },
        fail: () => {
          console.log('获取失败')
        }
      })
    },
    toDetail () {
      // console.log('toDetail')
      wx.navigateTo({
        url: '/pages/list/main'
      })
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
  }
}
</script>

<style >
page{
  background: rgba(69, 102, 209, 0.16);
}
.indexContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.index_img{
  width: 200rpx;
  height: 200rpx;
  border-radius: 100rpx;
  margin: 100rpx 0;
}
.userName{
  font-size:40rpx;
  font-weight: bold;
  margin: 100rpx 0;
}
.goStudy{
  width: 220rpx;
  height: 80rpx;
  border: 1rpx solid #eee;
  font-size: 24rpx;
  line-height: 80rpx;
  text-align: center;
  border-radius: 10rpx;
}
.btn{
  width: 200rpx;
  height: 200rpx;
  border-radius: 100rpx;
  margin: 100rpx 0;
  line-height: 200rpx;
  font-size: 18rpx;
  text-align: center;

}

</style>
