<template>
    <div class="checkOut">
        <div class="container">
            <h3>結帳 / <span>填寫收件人資料</span></h3>
            <div class="checkOutLine">
                <div class="text">
                    <p>填寫資料</p>
                    <p>確認資料</p>
                    <p>進行付款</p>
                    <p>完成</p>
                </div>
                <div class="line">
                    <div class="ball ball01 active"></div>
                    <div class="ball ball02"></div>
                    <div class="ball ball03"></div>
                    <div class="ball ball04"></div>
                </div>
            </div>
            <div class="productList_final">
                <table>
                    <thead>
                        <tr>
                            <th colspan="3">訂單明細</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in carts.carts" :key="item.id">
                            <td>{{ item.product.title }}</td>
                            <td>數量{{ item.qty }}</td>
                            <td class="price">NTD {{ item.total }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3">
                                <p class="line_through">總價NTD {{ carts.total }}</p>
                                <p class="sale">折扣價NTD {{ carts.final_total }}</p>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="userInformation">
                <form action="">
                    <div class="userName">
                        <input class="firstName" type="text" placeholder="姓氏" v-model="user.firstName" required>
                        <input class="lastName" type="text" placeholder="名字" v-model="user.lastName" required>
                    </div>
                    <div class="phone">
                        <input type="tel" placeholder="手機號碼" v-model="user.phone" required>
                    </div>
                    <div class="mail">
                        <input type="mail" placeholder="E-mail" v-model="user.email" required>
                    </div>
                    <div class="address">
                        <input class="addNum" type="text" placeholder="郵遞區號" v-model="user.addressNum" required>
                        <input type="text" placeholder="地址" v-model="user.address" required>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      carts: {},
      user: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        addressNum: ''
      }
    }
  },
  methods: {
    getCarts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api).then((res) => {
        this.carts = res.data.data
        console.log(this.carts)
      })
    }
  },
  created () {
    this.getCarts()
  }
}
</script>

<style lang="scss">
.checkOut {
    .container {
        max-width: 710px;
    }
    h3 {
        font-size: 32px;
        font-weight: bold;
        color: #4A593D;
        text-align: center;
        margin: 50px 0;
        span {
            font-size: 24px;
            font-weight: normal;
        }
    }
    .checkOutLine {
        .text, .line {
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;
        }
        .line {
            width: 95%;
            height: 5px;
            margin: 0 auto;
            background: #D0D3C9;
            position: relative;
            .ball {
                width: 15px;
                height: 15px;
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
    .productList_final {
        margin-top: 24px;
        table {
            width: 100%;
            border: 1px solid #D0D3C9;
            color: #4A593D;
            thead {
                background: #D0D3C9;
                font-weight: bold;
            }
            tfoot {
                text-align: end;
            }
            tr {
                border-bottom: 1px solid #D0D3C9;
                th,td {
                    padding: 8px;
                    p {
                        line-height: 1.5;
                    }
                }
                .price {
                    text-align: end;
                }
                .sale {
                    color: #ce0505;
                }
                .line_through {
                    text-decoration: line-through;
                }
            }
        }
    }
    .userInformation {
        margin-top: 24px;
        div {
            display: flex;
            input {
                width: 100%;
                border: 1px solid #D0D3C9;
                border-radius: 20px;
                padding: 8px 16px;
                margin-bottom: 16px;
            }
            .firstName, .addNum {
                width: 30%;
                margin-right: 16px;
            }
        }
    }
}
</style>
