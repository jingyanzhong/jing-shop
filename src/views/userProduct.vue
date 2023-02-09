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
                    <span>NTD {{ product.price }}</span>
                    <span>NTD {{ product.origin_price }}</span>
                </p>
                <button class="addCart" type="button" @click="addToCart">加入購物車</button>
                <p>
                    詳細介紹 | <br>
                    {{ product.description }}
                </p>
                <p>{{ product.content }}</p>
            </div>
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
export default {
  data () {
    return {
      id: '',
      qty: 1,
      product: {},
      addCart: {}
    }
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.$http.get(api).then((res) => {
        this.product = res.data.product
        console.log(this.product)
      })
    },
    addToCart () {
      this.addCart.product_id = this.id
      this.addCart.qty = this.qty
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(api, { data: this.addCart }).then((res) => {
        console.log(res)
      })
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
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
    }
    .addCart {
        background: #4A593D;
        color: #fff;
        border: 0;
        padding: 8px;
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
