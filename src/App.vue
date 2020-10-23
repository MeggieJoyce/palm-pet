<template>
  <div >
    <van-nav-bar
  title="医宠"
  left-text="返回"
  right-text="分享"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>

<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
<h4>此页面为测试版</h4>
<p></p>
<van-grid :border="true"  :column-num="5" square :gutter="10" direction="horizontal"  >
  <van-grid-item>
<h5>自查宝典</h5>
  </van-grid-item>
  <van-grid-item>
  <h5> 在线咨询</h5>
  </van-grid-item>
  <van-grid-item>
 <h5>附近医院</h5>
  </van-grid-item>
    <van-grid-item>
 <h5>宠物社区</h5>
  </van-grid-item>
      <van-grid-item>
 <h5>我的订单</h5>
  </van-grid-item>
</van-grid>

<van-notice-bar  left-icon="volume-o" scrollable text="热点推送"/>
<van-empty description="描述文字" />

<van-tabbar v-model="active" active-color="#38C3AE" inactive-color="#000">
  <van-tabbar-item icon="home-o">主页</van-tabbar-item>
  <van-tabbar-item icon="search">找医生</van-tabbar-item>
  <van-tabbar-item icon="friends-o">社区</van-tabbar-item>
  <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
</van-tabbar>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: 0,
    };
  },
}
</script>

<style>
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #38C3AE;
  }
  .van-empty {
    height: 150px;
  }
  h4{
    text-align: center;
  }
</style>
