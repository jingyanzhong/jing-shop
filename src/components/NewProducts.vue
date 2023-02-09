<template>
  <div class="newProducts">
    <div class="container">
      <h3>最新商品</h3>
      <ul class="newProductList">
        <template v-for="(item, key) in products" :key="item.id">
            <li v-if="key < 5">
              <a href="#" class="newProductItem" @click.prevent="$emit('get-product', item.id)">
                <img :src="item.imgUrl" :alt="item.title" />
                <div class="newProductItemContent">
                  <h3 class="title">
                    {{ item.title }}
                  </h3>
                  <p class="origin_price">原價 NTD {{ item.origin_price }}</p>
                  <p class="price">特價 NTD {{ item.price }}</p>
                </div>
              </a>
            </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    products: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
.newProducts {
    h3 {
        font-size: 24px;
        font-weight: bold;
        color: #4A593D;
        margin-bottom: 24px;
    }
  .newProductList {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
    li {
      width: calc(20% - 16px);
      margin: 0 8px;
      box-shadow: 0 0 4px 0 rgba(0,0,0,.25);
      transition: all .5s;
      &:hover {
        box-shadow: 0 0 6px 2px rgba(0,0,0,.35);
      }
      .newProductItem {
        color: #000;
        img {
        height: 270px;
        object-fit: cover;
        }
        .newProductItemContent {
            padding: 16px;
            line-height: 1.5;
            .origin_price {
                font-size: 1px;
                text-decoration: line-through;
            }
            .price {
                color: red;
                font-weight: bold;
            }
        }
      }
    }
  }
}
</style>
