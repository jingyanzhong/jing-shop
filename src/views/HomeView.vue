<template>
  <div class="banner">
    <SwiperBanner/>
  </div>
  <NewsInfo></NewsInfo>
</template>

<script>
// @ is an alias to /src
import SwiperBanner from '@/components/SwiperBanner.vue'
import NewsInfo from '@/components/NewsInfo.vue'

export default {
  name: 'HomeView',
  components: {
    SwiperBanner, NewsInfo
  }
}
</script>
