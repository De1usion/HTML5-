
<template>
  <div>
    <div class="item">
      <h1>{{item.title}}</h1>
      <img :src="item.image"/>
      <div class="info">
        <p>演员：{{item.author}}</p>
        <p>类型：{{item.publisher}}</p>
        <p>上映日期：{{item.pubdate}}</p>
        <p>评分：{{item.price}}</p>
      </div>
    </div>
    <button open-type="share" class="btn">分享给好友</button>
    <div class="content">
      <article>
        <h2>剧情简介</h2>
        <section>{{item.summary}}</section>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        item: {}
      }
    },
    mounted () {
      this.item = JSON.parse(this.$mp.query.item)
      wx.setNavigationBarTitle({
        title: this.item.title
      })
    },
    onShareAppMessage () {
      return {
        title: '电影小灵通',
        path: '/pages/detail/main',
        imageUrl: this.item.image
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .item
    display flex
    flex-direction column
    h1
      text-align center
      font-size 40rpx
      font-weight bold
      margin 10rpx 0
    img
      width 70%
      height 700rpx
      margin 0 auto
    .info
      margin-left 15%
      p
        line-height 50rpx
  .btn
    width 300rpx
    height 80rpx
    line-height 80rpx
    text-align center
    margin 20rpx auto
  .content
    margin 30rpx 100rpx
    article
      margin-top 50rpx
      h2
        font-size 30rpx
        font-weight bold
        color #288294
        text-align center
      section
        font-size 28rpx
        text-indent 56rpx
</style>
