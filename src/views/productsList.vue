<template>
  <Menu @category-filter="categoryFilter"></Menu>
  <div class="productsList">
    <div class="container">
      <div class="productItem" v-for="item in productFilter" :key="item.id">
        <a href="#" @click.prevent="getProduct(item.id)">
          <img :src="item.imgUrl" :alt="item.title">
          <div class="productItemContent">
            <h3 class="title">
              {{ item.title }}
            </h3>
            <p class="origin_price">
              原價 NTD {{ currency(item.origin_price) }}
            </p>
            <p class="price">
              特價 NTD {{ currency(item.price) }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
  <Pagination
  :page="pagination"
  @get-products="getProducts"></Pagination>
</template>
<script>
import Menu from '@/components/productsMenu.vue'
import Pagination from '@/components/PaginationComponent.vue'
import { currency } from '@/methods/filters'
export default {
  components: {
    Menu, Pagination
  },
  data () {
    return {
      products: {},
      pagination: {},
      category: '全部'
    }
  },
  methods: {
    currency,
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.$http.get(api).then((res) => {
        this.products = res.data.products
        this.pagination = res.data.pagination
        console.log(this.pagination)
      })
    },
    getProduct (id) {
      this.$router.push(`/products/${id}`)
    },
    categoryFilter (category) {
      this.category = category
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      if (category !== '全部') {
        this.$http.get(api).then((res) => {
          this.products = res.data.products
          this.pagination = {}
        })
      } else {
        this.getProducts()
      }
    }
  },
  computed: {
    productFilter () {
      if (this.category === '全部') {
        return this.products
      } else {
        return this.products.filter((item) => item.category === this.category)
      }
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
<style lang="scss">
.productsList {
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  .productItem {
    width: calc(25% - 16px);
    margin: 8px 8px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.25);
    transition: all .5s;
  }
  .productItem:hover {
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.35);
  }
  .productItemContent {
    color: #000;
    text-align: center;
    padding: 24px;
    line-height: 1.5;
    .title {
      color: #4A593D;
      font-weight: bold;
    }
    .origin_price {
      font-size: 14px;
      text-decoration: line-through;
    }
    .price {
      color: red;
      font-weight: bold;
    }
  }
}

@media screen and (max-width: 576px) {
  .productsList{
    .productItem {
      width: calc(100% - 16px);
    }
  }
}
</style>
