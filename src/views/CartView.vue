<template>
<div class="cart">
    <div class="container">
        <h3>購物車</h3>
        <div class="cartContent">
            <div class="cartList">
                <a href="#" @click.prevent="deleteAllCarts">刪除全部購物車</a>
                <ul class="cartItem">
                    <li v-for="item in carts" :key="item.id">
                        <div class="cartItemImg">
                            <img :src="item.product.imgUrl" :alt="item.product.title">
                        </div>
                        <div class="cartItemContent">
                            <p class="title">{{ item.product.title }}</p>
                            <p>數量 {{ item.qty }}</p>
                            <p>NTD {{ item.total }}</p>
                        </div>
                        <button type="button" class="delBtn" @click="deleteCart">刪除</button>
                    </li>
                </ul>
            </div>
            <div class="cartInformation">
                <h4>訂單摘要</h4>
                <div class="cartInformationContent">
                    <p>商品總計</p>
                    <p>運費總計</p>
                    <p>優惠券折扣</p>
                    <br>
                    <p>運送方式</p>
                    <p>使用優惠券</p>
                    <br>
                    <p>結帳總金額</p>
                </div>
                <button type="button" class="cartNextBtn">前往結帳</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      carts: {}
    }
  },
  methods: {
    getCarts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api).then((res) => {
        this.carts = res.data.data.carts
        console.log(this.carts)
      })
    },
    deleteAllCarts () {
      console.log('刪除全部')
    },
    deleteCart () {
      console.log('刪除單一商品')
    }
  },
  created () {
    this.getCarts()
  }
}
</script>

<style lang="scss">
.cart {
    .container {
        max-width: 1200px;
    }
    h3 {
        font-size: 32px;
        font-weight: bold;
        color: #4A593D;
        text-align: center;
        margin: 50px 0;
    }
}
.cartContent {
    display: flex;
    .cartList {
        width: 65%;
        margin-right: 16px;
        a {
            font-size: 14px;
            text-align: end;
            color: #4A593D;
            transition: all .5s;
            margin-bottom: 16px;
            &:hover {
                font-weight: bold;
                color: #37442c;
            }
        }
    }
    .cartPrice {
        width: calc(50% - 16px);
    }
    .cartItem li {
        display: flex;
        height: 220px;
        margin-bottom: 16px;
        border: 1px solid #D0D3C9;
        transition: .3s;
        &:hover {
            box-shadow: 0 2px 6px 0 rgba(0,0,0,.35);
        }
        .cartItemImg {
            width: 30%;
            padding: 20px;
            img {
                height: 180px;
                object-fit: cover;
            }
        }
        .cartItemContent{
            width: 60%;
            margin-right: auto;
            padding: 20px 20px 20px 0;
            line-height: 1.5;
            .title {
                font-size: 20px;
            }
        }
        .delBtn {
            font-size: 16px;
            background: #D0D3C9;
            color: #4A593D;
            border: 0;
            cursor: pointer;
            transition: all .5s;
            &:hover {
                background: #4a593d;
                color: #fff;
            }
        }
    }
    .cartInformation {
        width: 35%;
        height: 100%;
        background: #D0D3C9;
        display: flex;
        flex-direction: column;
        h4 {
            background: #4A593D;
            color: #fff;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            padding: 12px;
        }
        .cartInformationContent {
            padding: 24px;
            line-height: 1.5;
            color: #4A593D;
            margin-bottom: auto;
        }
        .cartNextBtn {
            font-size: 24px;
            font-weight: bold;
            background: #4A593D;
            color: #fff;
            border: 0;
            padding: 12px;
            cursor: pointer;
            transition: all .5s;
            &:hover {
                background: #37442c;
            }
        }
    }
}
</style>
