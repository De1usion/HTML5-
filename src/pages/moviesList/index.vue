
<template>
    <div id="container">
      <div class="item" v-for="(item, index) in booksArr" :key="index" @click="detailBtn(item)">
        <img :src="item.image" alt="">
        <div class="info">
          <p>{{item.title}}</p>
          <p>演员：{{item.author}}</p>
          <p>类型：{{item.publisher}}</p>
        </div>
        <p class="price">{{item.price}}</p>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['booksArr'],
    data () {
      return {
        booksArr: []
      }
    },
    methods: {
      detailBtn (item) {
        wx.navigateTo({
          url: '/pages/detail/main?item=' + JSON.stringify(item)
        })
      }
    },
    mounted () {
      if (this.$mp) {
        this.booksArr = JSON.parse(this.$mp.query.booksArr)
      }
      wx.setNavigationBarTitle({
        title: '电影列表'
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #container{
    .item{
      display flex
      padding 10rpx
      border-bottom 1rpx solid #f3f3f3
      img{
        width 140rpx
        height 140rpx
        margin-right 20rpx
      }
      .info{
        width 70%
        font-size 30rpx
        line-height 50rpx
      }
      .price{
        color red
        font-size 35rpx
        font-weight bold
      }
    }
  }
</style>
