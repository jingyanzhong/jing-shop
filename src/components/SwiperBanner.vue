<template>
  <div class="swiper bannerSwiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide page1">
          <router-link to="/products">
            <img src="../../img/banner01.png" alt="開幕優惠活動">
          </router-link>
        </div>
        <div class="swiper-slide page2">
          <router-link to="/products">
            <img src="../../img/banner02.png" alt="京式會社">
          </router-link>
        </div>
        <div class="swiper-slide page3">
          <router-link to="/products">
            <img src="../../img/banner01.png" alt="開幕優惠活動">
          </router-link>
        </div>
        <div class="swiper-slide page4">
          <router-link to="/products">
            <img src="../../img/banner02.png" alt="京式會社">
          </router-link>
        </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper, { Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

export default {
  name: 'SwiperBanner',
  props: {
    msg: String
  },
  data () {
    return {
      swiper: {}
    }
  },
  mounted () {
    this.swiper = new Swiper('.bannerSwiper', {
      modules: [Pagination, Autoplay],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      autoplay: {
        delay: 4000
      },
      loop: true
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper {
  width: 100%;
  height: calc(100vh - (100px + 168px));
}
.swiper-slide {
    text-align: center;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      height: 100%;
    }
    img {
      object-fit: cover;
      height: 100%;
    }
    &.page1{ background-color: #f0e4d4; }
    &.page2{ background-color: #f9d9ca; }
    &.page3{ background-color: #bdc2bb; }
    &.page4{ background-color: #d2d5b8; }
}
@media screen and (max-width: 576px) {
  .swiper {
  height: calc(100vh - (100px + 106px));
}
}
</style>
