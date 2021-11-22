
<template>
    <div id="indexContainer">
      <swiper indicator-dots  indicator-color="pink" indicator-active-color="green">
        <swiper-item >
          <img src="https://p0.meituan.net/movie/7b4353304fde9c99a1a53d8e17a7e14d460460.jpg" alt="">
        </swiper-item>
        <swiper-item >
          <img src="https://p0.pipi.cn/friday/741ff95be721ff4f3b1dd289c62f3506.jpg?imageMogr2/thumbnail/2500x2500%3E" alt="">
        </swiper-item>
        <swiper-item >
          <img src="https://p0.meituan.net/movie/d28ba1076ac0fd0f85f3547ab0982778496653.jpg" alt="">
        </swiper-item>
        <swiper-item >
          <img src="https://p1.meituan.net/movie/7b556c8064dcd82c445e0db3b1f865a6242045.jpg" alt="">
        </swiper-item>
        <swiper-item >
          <img src="https://p0.meituan.net/movie/13031796c549b14b1f18bc1598ad7fbf112890.jpg" alt="">
        </swiper-item>
      </swiper>

      <div class="booksList">
        <div class="listNav">
          <span>最近热播电影资讯</span>
          <span class="more" @click="toBooksList(booksArr)"> > </span>
        </div>

        <div class="list">
          <div class="bookItem" v-for="(item,index) in booksArr" :key="index" @click="detailBtn(item)">
            <img :src="item.image" alt="">
            <p>《{{item.title}}》</p>
            <p>{{item.author}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import datas from './datas/data.json'
  export default {
    data () {
      return {
        booksArr: datas,
        titleArr: []
      }
    },
    computed: {
      title () {
        return [...this.booksArr].splice(0, 4)
      }
    },
    methods: {
      detailBtn (item) {
        console.log('detail::::' + JSON.stringify(item))
        wx.navigateTo({
          url: '/pages/detail/main?item=' + JSON.stringify(item)
        })
      },
      toBooksList (booksArr) {
        wx.navigateTo({
          url: '/pages/booksList/main?booksArr=' + JSON.stringify(booksArr)
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #indexContainer
    swiper
      width 100%
      height 400rpx
      img
        width 100%
        height 100%
    .booksList
      .listNav
        line-height 80rpx
        padding 10rpx
        .more
          float right
      .list
        display flex
        flex-wrap wrap
        .bookItem
          width 50%
          display flex
          flex-direction column
          align-items center
          border-bottom 1rpx solid #eee
          box-sizing border-box
          &:nth-child( 2n + 1)
            border-right 1rpx solid #eee
          img
            width 200rpx
            height 200rpx
            margin 10rpx 0
          p
            font-size 24rpx
            line-height 50rpx
</style>
