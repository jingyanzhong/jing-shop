<template>
    <LoadingComponent :active="isLoading"></LoadingComponent>
    <div class="cart">
        <div class="container">
            <h3>購物車</h3>
            <div class="cartContent">
                <div class="cartList">
                    <div class="deleteCarts">
                        <a href="#" @click.prevent="openDeleteModal">刪除全部購物車</a>
                    </div>
                    <p v-if="carts.total === 0" class="gotobuy">暫時無購物清單，請至<router-link to="/products">商城</router-link>選購</p>
                    <ul class="cartItem">
                        <li v-for="item in carts.carts" :key="item.id">
                            <div class="cartItemImg">
                                <img :src="item.product.imgUrl" :alt="item.product.title">
                            </div>
                            <div class="cartItemContent">
                                <p class="title">{{ item.product.title }}</p>
                                <p class="size">F / {{ item.color }}</p>
                                <select class="num" @change="updateCarts(item)" v-model.number="item.qty">
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
                                <p class="price" :class="{ 'line-through': item.coupon }">售價NTD {{ currency(item.total) }}
                                </p>
                                <p class="sale_price" v-if="item.coupon">折扣價<span>NTD {{
                                    currency(Math.ceil(item.final_total)) }}</span></p>
                            </div>
                            <button type="button" class="delBtn" @click="deleteCart(item)">刪除</button>
                        </li>
                    </ul>
                </div>
                <div class="cartInformation">
                    <h4>訂單摘要</h4>
                    <div class="cartInformationContent">
                        <p>商品總計 <span>NTD {{ currency(carts.total) }}元</span></p>
                        <p>運送方式
                            <span>
                                <select v-model="transport">
                                    <option value="" selected="selected" disabled>請選擇運送方式</option>
                                    <option value="711">7-11取貨付款</option>
                                    <option value="blackCat">宅配</option>
                                </select>
                            </span>
                        </p>
                        <p class="couponList">使用優惠券
                            <span>
                                <input type="text" placeholder="輸入折扣碼" v-model="coupon">
                                <button type="button" @click="useCoupon">使用</button>
                            </span>
                        </p>
                        <p class="couponMsg" v-if="couponMsg.message">{{ couponMsg.message }}</p>
                        <br>
                        <p>結帳總金額 <span>NTD {{ currency(Math.ceil(carts.final_total)) }}元</span></p>
                    </div>
                    <button type="button" class="cartNextBtn disabled" v-if="carts.total === 0">前往結帳</button>
                    <router-link to="/checkOut" class="cartNextBtn" v-else>前往結帳</router-link>
                </div>
            </div>
        </div>
    </div>
    <deleteModal ref="deleteModal" @delete-carts="deleteAllCarts"></deleteModal>
</template>
<script>
import { currency } from '@/methods/filters'
import deleteModal from '@/components/DeleteModal.vue'
export default {
  components: {
    deleteModal
  },
  data () {
    return {
      carts: {},
      total: 0,
      coupon: '',
      couponMsg: '',
      final_total: 0,
      transport: '',
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    currency,
    getCarts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api).then((res) => {
        this.carts = res.data.data
        console.log(this.carts)
      })
    },
    deleteAllCarts () {
      this.isLoading = true
      const deleteModalComponent = this.$refs.deleteModal
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.emitter.emit('push-message', {
            style: 'success',
            title: '已刪除購物車'
          })
        }
        this.isLoading = false
        deleteModalComponent.hideModal()
        this.getCarts()
      })
    },
    deleteCart (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.$http.delete(api).then((res) => {
        console.log(res)
        this.getCarts()
      })
      //   console.log('刪除單一商品')
    },
    openDeleteModal () {
      const deleteModalComponent = this.$refs.deleteModal
      deleteModalComponent.showModal()
    },
    updateCarts (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.$http.put(api, { data: cart }).then((res) => {
        this.carts = res.data.data
        this.getCarts()
      })
    },
    useCoupon () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon
      }
      this.$http.post(api, { data: coupon }).then((res) => {
        console.log(res)
        this.couponMsg = res.data
        this.coupon = ''
        this.getCarts()
      })
    }
  },
  created () {
    this.getCarts()
    // this.cartTotal()
  }
}
</script>

<style lang="scss" scoped>
.gotobuy {
    a {
        display: inline-block;
    }
}
.cart {
    .container {
        max-width: 1200px;
    }

    h3 {
        font-size: 28px;
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

        .deleteCarts {
            text-align: end;

            a {
                display: inline-block;
                font-size: 14px;
                color: #4A593D;
                transition: all .5s;
                margin-bottom: 16px;
                padding: 8px;

                &:hover {
                    font-weight: bold;
                    color: #37442c;
                }
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
        background: #fff;
        transition: .3s;

        &:hover {
            box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .35);
        }

        .cartItemImg {
            width: 30%;
            padding: 20px;

            img {
                height: 180px;
                object-fit: cover;
            }
        }

        .cartItemContent {
            font-size: 14px;
            color: #4A593D;
            width: 60%;
            margin-right: auto;
            padding: 20px 20px 20px 0;
            line-height: 1.8;

            .title {
                font-size: 16px;
            }

            .line-through {
                text-decoration: line-through;
                color: #adadad;
            }

            .sale_price {
                color: #e90e0e;

                span {
                    font-size: 16px;
                }
            }

            .num {
                margin: 8px 0;
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
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            padding: 12px;
        }

        .cartInformationContent {
            padding: 24px;
            line-height: 1.5;
            color: #4A593D;
            margin-bottom: auto;

            .couponList {
                span {
                    display: flex;
                    align-items: center;
                }
            }

            p {
                display: flex;
                align-items: center;
                margin-bottom: 8px;

                span {
                    margin-left: auto;
                }
            }

            input,
            select {
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                padding: 4px;
                border: 1px solid #4a593d;
            }

            button {
                height: 30px;
                font-size: 16px;
                padding: 4px 8px;
                border: 1px solid #4a593d;
                background: #4a593d;
                color: #fff;
                cursor: pointer;
                transition: all .5s;

                &:hover {
                    background: #37442c;
                }
            }

            .couponMsg {
                display: block;
                color: #e90e0e;
                text-align: end;
            }
        }

        .cartNextBtn {
            font-size: 20px;
            font-weight: bold;
            text-align: center;
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

        .disabled {
            cursor: not-allowed;
            background: #555555;

            &:hover {
                background: #555555;
            }
        }
    }
}

@media screen and (max-width: 576px) {
    .cartContent {
        display: block;

        .cartList {
            width: 100%;
            margin-bottom: 24px;
        }

        .cartInformation {
            width: 100%;

            .cartInformationContent {
                .couponList {
                    span {
                        width: 65%;
                        display: flex;
                        align-items: center;
                    }
                    input {
                        width: 65%;
                        margin-left: auto;
                    }
                }
            }
        }

        .cartItem li {
            .cartItemImg {
                width: 45%;
                padding: 12px;

                img {
                    height: 180px;
                    object-fit: cover;
                }
            }

            .cartItemContent {
                width: 55%;
                padding: 12px 12px 12px 0;
            }
        }
    }
}</style>
