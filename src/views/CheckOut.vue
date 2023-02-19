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
                        <tr class="title">
                            <th colspan="7">訂單明細</th>
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
                        <tr v-for="item in carts.carts" :key="item.id">
                            <td>{{ item.product.title }}</td>
                            <td>F</td>
                            <td>{{ item.color }}</td>
                            <td>{{ item.qty }}</td>
                            <td class="price">NTD {{ currency(item.product.price) }}</td>
                            <td class="totalPrice">NTD {{ currency(item.final_total) }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="7">
                                <span class="line_through">總價NTD {{ currency(carts.total) }}</span>
                                <span class="sale">折扣價NTD {{ currency(carts.final_total) }}</span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="userInformation">
                <VForm>
                    <div class="userName">
                        <VField class="firstName" name="firstName" type="text" placeholder="姓氏" rules="required" />
                        <VField class="lastName" name="lastName" type="text" placeholder="名字" rules="required" />
                    </div>
                    <div class="userNameError">
                        <ErrorMessage name="firstName" />
                        <ErrorMessage name="lastName" />
                    </div>
                    <div class="phone">
                        <VField type="tel" name="phone" placeholder="手機號碼" rules="required|numeric|min:10|max:10" />
                    </div>
                    <div class="phoneError">
                        <ErrorMessage name="phone" />
                    </div>
                    <div class="mail">
                        <VField type="mail" name="email" placeholder="E-mail" rules="required|email" />
                    </div>
                    <div class="mailError">
                        <ErrorMessage name="email" />
                    </div>
                    <div class="address">
                        <VField class="addNum" name="addressNum" type="text" placeholder="郵遞區號" rules="required|numeric|min:3|max:6"  />
                        <VField type="text" name="address" placeholder="地址" rules="required"  />
                    </div>
                    <div class="addressError">
                        <ErrorMessage name="addressNum" />
                        <ErrorMessage name="address" />
                    </div>
                    <!-- <div class="textArea">
                        <textarea name="userText" id="userText" cols="30" rows="3" placeholder="備註..."></textarea>
                    </div> -->
                    <!-- <div class="submitBtn">
                        <VField type="submit" value="下一步"/>
                    </div> -->
                </VForm>
            </div>
        </div>
    </div>
</template>

<script>
import { currency } from '@/methods/filters'
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
    currency,
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
            background: #D0D3C9;
            position: relative;

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

    .productList_final {
        margin-top: 24px;

        table {
            width: 100%;
            border: 1px solid #D0D3C9;
            color: #4A593D;
            font-size: 14px;

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

    .userInformation {
        margin-top: 24px;

        div {
            display: flex;

            input,
            textarea {
                width: 100%;
                border: 1px solid #D0D3C9;
                border-radius: 20px;
                padding: 8px 16px;
                margin-bottom: 16px;
            }

            .firstName,
            .addNum {
                width: 30%;
                margin-right: 16px;
            }

            textarea {
                flex: 1;
            }
        }

        .submitBtn {
            display: block;
            text-align: center;

            input {
                width: 30%;
                background: #9EAA8F;
                color: #fff;
                padding: 8px 16px;
                border: none;
                transition: all .5s;

                &:hover {
                    background: #4A593D;
                }
            }
        }
    }
}</style>
