<template>
    <div class="payOrder">
        <div class="container">
            <h3>結帳 / <span>進行付款</span></h3>
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
                    <div class="ball ball03 active"></div>
                    <div class="ball ball04"></div>
                </div>
            </div>
            <div class="payForm">
                <h4>填寫信用卡資料</h4>
                <VForm v-slot="{ meta }" @submit="paySubmit">
                    <div class="userName">
                        <VField class="lastName" name="name"  label="姓名" type="text" placeholder="姓名" rules="required" />
                    </div>
                    <div class="error userNameError">
                        <ErrorMessage name="name" class="lastNameError" />
                    </div>
                    <div class="cardNumber">
                        <VField type="text" name="cardNumber" label="信用卡卡號" placeholder="信用卡卡號" rules="required|numeric|min:16|max:16" />
                    </div>
                    <div class="error cardNumberError">
                        <ErrorMessage name="cardNumber" />
                    </div>
                    <div class="expirationDate">
                        <VField class="addNum" name="expirationDateMM"  label="到期月份" type="text" placeholder="MM" rules="required|numeric|min:2|max:2"  />
                        <VField class="addNum" name="expirationDateYY"  label="到期年份" type="text" placeholder="YY" rules="required|numeric|min:2|max:2"  />
                        <VField type="text" name="CVC"  label="CVC" placeholder="背面三碼" rules="required"  />
                    </div>
                    <div class="error expirationDateError">
                        <ErrorMessage name="expirationDateMM" />
                        <ErrorMessage name="expirationDateYY" />
                        <ErrorMessage name="CVC"/>
                    </div>
                    <div class="formBtn">
                        <button class="resetBtn" type="reset">重填</button>
                        <button class="submitBtn" :class="{'disabled' : !meta.valid}" :disabled="!meta.valid">付款去！</button>
                    </div>
                </VForm>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      orderId: '',
      orderList: ''
    }
  },
  methods: {
    paySubmit () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          this.$router.push('/success')
        } else {
          alert(res.data.message)
        }
        console.log(res)
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
  }
}
</script>

<style lang="scss" scoped>
.payOrder {
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
                width: 66.66666%;
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
    .payForm {
        margin-top: 48px;
        h4 {
            font-size: 20px;
            text-align: center;
            margin-bottom: 24px;
        }
        div {
            display: flex;
            input {
                width: 100%;
                border: 1px solid #D0D3C9;
                border-radius: 20px;
                padding: 8px 16px;
                margin-bottom: 16px;
                margin-right: 16px;
            }
        }
        .error {
            color: #ce0505;
            margin-bottom: 16px;
            span{
                width: 33.33333%;
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
