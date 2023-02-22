<template>
    <LoadingComponent :active="isLoading"></LoadingComponent>
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
            <div class="productList_final mobileNone">
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
            <productFinalMobile class="mobileShow"
            :carts-list="carts"
            ></productFinalMobile>
            <div class="userForm">
                <VForm v-slot="{ meta, errors }" @submit="formSubmit">
                    <div class="userName">
                        <VField class="firstName" name="firstName"  label="姓氏" type="text" placeholder="姓氏" rules="required" :class="{ 'is-invalid': errors['firstName'] }" />
                        <VField class="lastName" name="lastName"  label="名字" type="text" placeholder="名字" rules="required" />
                    </div>
                    <div class="error userNameError">
                        <ErrorMessage name="firstName" />
                        <ErrorMessage name="lastName" class="lastNameError" />
                    </div>
                    <div class="phone">
                        <VField type="tel" name="tel" label="手機號碼" placeholder="手機號碼" rules="required|numeric|min:10|max:10" />
                    </div>
                    <div class="error phoneError">
                        <ErrorMessage name="tel" />
                    </div>
                    <div class="mail">
                        <VField type="mail" name="email" placeholder="E-mail" rules="required|email" />
                    </div>
                    <div class="error mailError">
                        <ErrorMessage name="email" />
                    </div>
                    <div class="address">
                        <VField class="addNum" name="addressNum"  label="郵遞區號" type="text" placeholder="郵遞區號" rules="required|numeric|min:3|max:6"  />
                        <VField type="text" name="address"  label="地址" placeholder="地址" rules="required"  />
                    </div>
                    <div class="error addressError">
                        <ErrorMessage name="addressNum" />
                        <ErrorMessage name="address" class="addressError" />
                    </div>
                    <div class="textArea">
                    <VField name="message" v-slot="{ field }">
                        <textarea v-bind="field" cols="30" rows="10" placeholder="備註..."></textarea>
                    </VField>
                    </div>
                    <div class="formBtn">
                        <button class="resetBtn" type="reset">重填</button>
                        <button class="submitBtn" :class="{'disabled' : !meta.valid}" :disabled="!meta.valid">下一步</button>
                    </div>
                </VForm>
            </div>
        </div>
    </div>
</template>

<script>
import { currency } from '@/methods/filters'
import productFinalMobile from '@/components/productListFinalMobile.vue'
export default {
  components: {
    productFinalMobile
  },
  data () {
    return {
      carts: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      isLoading: false
    }
  },
  methods: {
    currency,
    getCarts () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api).then((res) => {
        this.carts = res.data.data
        this.isLoading = false
        console.log(this.carts)
      })
    },
    formSubmit (val) {
      this.form.user.name = val.firstName + val.lastName
      this.form.user.email = val.email
      this.form.user.tel = val.tel
      this.form.user.address = val.addressNum + val.address
      this.form.message = val.message
      // this.user = val;
      console.log('user', this.form.user)
      console.log('msg', this.form.message)
      const order = this.form
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      this.$http.post(api, { data: order }).then((res) => {
        console.log(res)
        if (res.data.success) {
          this.$router.push(`/checkOut/${res.data.orderId}`)
        } else {
          alert(res.data.message)
        }
      })
    }
  },
  created () {
    this.getCarts()
  }
}
</script>

<style lang="scss">
.mobileShow {
    display: none;
}
.mobileNone {
    display: block;
}
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
                width: 0%;
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

    .productList_final {
        margin-top: 24px;

        table {
            width: 100%;
            border: 1px solid #D0D3C9;
            background: #fff;
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

    .userForm {
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
        .error {
            color: #ce0505;
            margin-bottom: 16px;
                span:nth-child(1) {
                width: 25%;
                }
        }
        .formBtn {
            display: block;
            text-align: center;
            button, a {
                display: inline-block;
                width: 30%;
                color: #fff;
                padding: 8px 16px;
                border: none;
                cursor: pointer;
                transition: all .5s;
            }
            .resetBtn {
                background: #858585;
                margin-right: 16px;
                &:hover {
                    background: #585858;
                }
            }
            .submitBtn {
                background: #9EAA8F;
                &:hover {
                    background: #4A593D;
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
}
@media screen and (max-width: 576px) {
    .mobileShow {
        display: block;
    }
    .mobileNone {
        display: none;
    }
}
</style>
