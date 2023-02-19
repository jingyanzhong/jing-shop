<template>
<div class="product">
    <div class="container">
        <div class="productMain">
            <div class="productImg">
                <img :src="product.imgUrl" :alt="product.title">
                <div class="otherImg" v-if="product.images">
                    <img :src="img" :alt="`${product.title}${key}`" v-for="(img, key) in product.images" :key="key">
                </div>
            </div>
            <div class="productInfo">
                <h3>{{ product.title }}</h3>
                <p class="price">
                    <span>NTD {{ currency(product.price) }}</span>
                    <span class="origin_price">NTD {{ currency(product.origin_price) }}</span>
                </p>
                <hr>
                <p class="size"><span>F</span></p>
                <p class="color">
                    <a href="#" :class="{ 'active' : color === item }" @click.prevent="color = item" v-for="item in product.description2" :key="item">{{ (item.split(' ', 1)).toString() }}</a>
                </p>
                <p class="num">
                    <select v-model="qty">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </p>
                <button class="addCart" type="button" @click="addToCart" :disabled="loading">加入購物車</button>
                <hr>
                <p class="description">
                    詳細介紹 | <br>
                    {{ product.description }}
                </p>
                <hr>
                <p class="description">{{ product.content }}</p>
            </div>
        </div>
        <div class="swiper otherSwiper otherProducts">
            <h4>相關商品</h4>
            <swiper
            :slides-per-view="2"
            :space-between="24"
            :navigation="true"
            :loop="false"
            :breakpoints="{ 768: { slidesPerView: 4, spaceBetween: 24 } }"
            class="pdlikeSlide"
            >
            <template v-if="products">
                <swiper-slide v-for="(item, key) in otherProducts" :key="item.id">
                    <a href="#" class="otherProductItem" v-if="key < 10" @click.prevent="getOtherProduct(item.id)"><img :src="item.imgUrl" :alt="item.title">
                    </a>
                </swiper-slide>
            </template>
            </swiper>
        </div>
        <!-- <div class="productContent" v-if="product.images">
            <div class="productContent-img" v-for="(img, key) in product.images" :key="key">
                <img :src="img" :alt="`${product.title}${key}`">
            </div>
        </div> -->
    </div>
</div>
</template>

<script>
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import { currency } from '@/methods/filters'
SwiperCore.use([Navigation, Pagination, Thumbs])
export default {
  data () {
    return {
      id: '',
      qty: 1,
      products: null,
      product: {},
      addCart: {},
      loading: false,
      color: '',
      swiper: {}
    }
  },
  components: {
    Swiper, SwiperSlide
  },
  inject: ['emitter'],
  computed: {
    otherProducts () {
      return this.products.filter((item) => item.category === this.product.category)
    }
  },
  methods: {
    currency,
    getAllProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api).then((res) => {
        this.products = res.data.products
        console.log(this.products)
      })
    },
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.$http.get(api).then((res) => {
        this.product = res.data.product
        console.log(this.product)
      })
    },
    addToCart () {
      this.addCart.product_id = this.id
      this.addCart.qty = parseInt(this.qty, 10)
      this.addCart.color = this.color
      this.loading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(api, { data: this.addCart }).then((res) => {
        if (res.data.success) {
          this.emitter.emit('push-message', {
            style: 'success',
            title: '已加入購物車'
          })
        }
        this.loading = false
        console.log(res)
      })
    },
    getOtherProduct (id) {
      this.$router.push(`/products/${id}`)
      this.id = id
      this.getProduct()
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
    this.getAllProducts()
  }
}
</script>

<style lang="scss">
.product {
    margin-top: 60px;
    margin-bottom: 60px;
    .container {
        max-width: 960px;
    }
    .productMain {
        display: flex;
    }
    .productImg {
        width: calc(50% - 16px);
        margin-right: 16px;
        img {
            height: 700px;
            object-fit: cover;
        }
    }
    .productInfo {
        width: 50%;
        height: 100%;
        line-height: 2;
        white-space: pre-line;
        color: #4A593D;
        position: sticky;
        left: 50%;
        top: 160px;
        .price {
            color: #d10505;
            font-size: 24px;
            .origin_price {
                margin-left: 16px;
                text-decoration: line-through;
                color: #4A593D;
                font-size: 16px;
            }
        }
        .size {
            margin-bottom: 16px;
            span {
                border: 1px solid #D0D3C9;
                background: #D0D3C9;
                color: #4A593D;
                padding: 4px 8px;
            }
        }
        .color {
            display: flex;
            margin-bottom: 16px;
            a {
                border: 1px solid #D0D3C9;
                color: #4A593D;
                padding: 4px 8px;
                margin-right: 8px;
                transition: all .5s;
                &:hover, &.active {
                    background: #D0D3C9;
                }
             }
        }
        .num {
            margin-bottom: 16px;
            input {
                width: 55px;
                height: 26px;
                border: 1px solid #D0D3C9;
            }
        }
        .description {
            font-size: 14px;
        }
    }
    .addCart {
        background: #4A593D;
        color: #fff;
        border: 0;
        padding: 8px;
        margin-bottom: 16px;
        transition: all .5s;
        cursor: pointer;
        &:hover {
            background: #37442c;
        }
    }
    .otherImg {
        img {
            margin-top: 16px;
        }
    }
    .otherProducts {
        margin-top: 24px;
        h4 {
            font-size: 18px;
            margin-bottom: 16px;
        }
    }
}

@media screen and (max-width: 576px) {
    .product {
    margin-top: 30px;
    margin-bottom: 30px;
    .productMain {
        flex-direction: column-reverse;
        padding: 16px;
    }
    .productImg {
        width: 100%;
        margin-right: 0;
    }
    .productInfo {
        width: 100%;
        line-height: 1.5;
        position: static;
    }
  }
}
</style>
