<template>
  <swiper :navigation="true" :pagination="{
    clickable: true
  }" :modules="modules"
    class="swiper bannerSwiper">
    <swiper-slide>
      <router-link to="/products">
        <img class="mobileNone" src="../../img/banner01.png" alt="開幕優惠活動">
        <img class="mobileShow" src="../../img/banner01-m.png" alt="開幕優惠活動">
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/products">
        <img class="mobileNone" src="../../img/banner02.png" alt="京式會社">
        <img class="mobileShow" src="../../img/banner02-m.png" alt="京式會社">
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/products">
        <img class="mobileNone" src="../../img/banner01.png" alt="開幕優惠活動">
        <img class="mobileShow" src="../../img/banner01-m.png" alt="開幕優惠活動">
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/products">
        <img class="mobileNone" src="../../img/banner02.png" alt="京式會社">
        <img class="mobileShow" src="../../img/banner02-m.png" alt="京式會社">
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

export default {
  name: 'SwiperBanner',
  props: {
    msg: String
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      modules: [Navigation, Pagination]
    }
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
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
    height: 100%;
  }

  &.page1 {
    background-color: #f0e4d4;
  }

  &.page2 {
    background-color: #f9d9ca;
  }

  &.page3 {
    background-color: #bdc2bb;
  }

  &.page4 {
    background-color: #d2d5b8;
  }
}

@media screen and (max-width: 576px) {
  .swiper {
    height: calc(100vh - (100px + 106px));
  }
}</style>
