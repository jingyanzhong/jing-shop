<template>
    <LoadingComponent :active="isLoading"></LoadingComponent>
    <div class="orderList">
        <div class="container">
            <h3>結帳 / <span>確認收件人資料</span></h3>
            <div class="checkOutLine">
                <div class="text">
                    <p>填寫資料</p>
                    <p>確認資料</p>
                    <p>進行付款</p>
                    <p>完成</p>
                </div>
                <div class="line">
                    <div class="ball ball01 active"></div>
                    <div class="ball ball02 active"></div>
                    <div class="ball ball03"></div>
                    <div class="ball ball04"></div>
                </div>
            </div>
            <div class="productList_final">
                <table>
                    <thead>
                        <tr class="title">
                            <th colspan="6">訂單明細</th>
                        </tr>
                        <tr>
                            <th>商品名稱</th>
                            <th>尺寸</th>
                            <th>顏色</th>
                            <th>數量</th>
                            <th>單價</th>
                            <th>小計</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in orderList.products" :key="item.id">
                            <td>{{ item.product.title }}</td>
                            <td>F</td>
                            <td>{{ item.color }}</td>
                            <td>{{ item.qty }}</td>
                            <td class="price">NTD {{ currency(item.total) }}</td>
                            <td class="totalPrice">NTD {{ currency(item.final_total) }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="6">
                                <span class="sale">總價NTD {{ currency(orderList.total) }}</span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="userFormCheck">
                <table>
                    <thead>
                        <tr class="title">
                            <th colspan="2">收件人資料</th>
                        </tr>
                    </thead>
                    <tbody v-if="orderList">
                        <tr>
                            <th>姓名</th>
                            <td>{{ orderList.user.name }}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{{ orderList.user.email }}</td>
                        </tr>
                        <tr>
                            <th>電話</th>
                            <td>{{ orderList.user.tel }}</td>
                        </tr>
                        <tr>
                            <th>地址</th>
                            <td>{{ orderList.user.address }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="payBtn">
                <button @click.prevent="payOrder">進行付款</button>
            </div>
        </div>
    </div>
</template>

<script>
import { currency } from '@/methods/filters'
export default {
  data () {
    return {
      orderId: '',
      orderList: '',
      isLoading: false
    }
  },
  methods: {
    currency,
    getOrder () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.orderList = res.data.order
        }
        this.isLoading = false
      })
    },
    payOrder () {
      this.$router.push(`/payOrder/${this.orderId}`)
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>

<style lang="scss" scoped>
.orderList {
    .container {
        max-width: 710px;
    }

    h3 {
        font-size: 28px;
        font-weight: bold;
        color: #4A593D;
        text-align: center;
        margin: 50px 0;

        span {
            font-size: 20px;
            font-weight: normal;
        }
    }

    .checkOutLine {
        .text,
        .line {
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;
            font-size: 14px;
        }
        .line {
            width: 95%;
            height: 3px;
            margin: 0 auto;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                height: 3px;
                width: 100%;
                background: #D0D3C9;
            }
            &::after{
                content: '';
                width: 33.33333%;
                height: 3px;
                background: #4A593D;
                z-index: 3;
            }
            .ball {
                width: 12px;
                height: 12px;
                background: #D0D3C9;
                border-radius: 8px;
                position: absolute;
                top: -4px;

                &.active {
                    background: #4A593D;
                }
            }

            .ball01 {
                left: 0;
            }

            .ball02 {
                left: 33.33333%;
            }

            .ball03 {
                left: 66.66666%;
            }

            .ball04 {
                right: 0;
            }
        }
    }

    .productList_final, .userFormCheck {
        margin-top: 24px;

        table {
            width: 100%;
            border: 1px solid #D0D3C9;
            color: #4A593D;
            font-size: 14px;
            background: #fff;
            thead {
                font-weight: bold;

                .title {
                    background: #D0D3C9;
                }
            }

            tfoot {
                text-align: end;
            }

            tr {
                border-bottom: 1px solid #D0D3C9;

                th,
                td {
                    padding: 16px;

                    p {
                        line-height: 1.5;
                    }
                }

                .sale {
                    color: #ce0505;
                    margin-left: 16px;
                }

                .line_through {
                    color: #9EAA8F;
                    text-decoration: line-through;
                }
            }
        }
    }
    .payBtn {
        margin-top: 24px;
        display: block;
        text-align: center;
        button {
            width: 30%;
            color: #fff;
            background: #9EAA8F;
            padding: 8px 16px;
            border: none;
            cursor: pointer;
            transition: all .5s;
            &:hover {
                background: #4A593D;
            }
        }
    }
}
</style>
