<template>
  <div class="banner">
    <SwiperBanner/>
  </div>
  <NewsInfo></NewsInfo>
  <NewProducts
  :products="products"
  @get-product="getProduct"
  ></NewProducts>
</template>

<script>
// @ is an alias to /src
import SwiperBanner from '@/components/SwiperBanner.vue'
import NewsInfo from '@/components/NewsInfo.vue'
import NewProducts from '@/components/NewProducts.vue'

export default {
  name: 'HomeView',
  components: {
    SwiperBanner, NewsInfo, NewProducts
  },
  data () {
    return {
      products: {}
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`
      this.$http.get(api).then((res) => {
        this.products = res.data.products
        console.log(this.products)
      })
    },
    getProduct (id) {
      this.$router.push(`/products/${id}`)
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
