<template>
    <div class="success">
        <div class="container">
            <h3>訂購完成</h3>
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
                    <div class="ball ball04 active"></div>
                </div>
            </div>
            <div class="complete">
                <h4>訂單已成立，感謝您的訂購!</h4>
                <p>預購商品需等待7-20天工作天。</p>
                <p>商品將於備貨完成後進行出貨，請您耐心等待 ! 謝謝您 !</p>
            </div>
            <router-link to="/" class="backHomeBtn">回首頁</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.success {
    .container {
        max-width: 710px;
    }
    h3 {
        font-size: 28px;
        font-weight: bold;
        color: #4A593D;
        text-align: center;
        margin: 50px 0;
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
                width: 100%;
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
    .complete {
        margin-top: 60px;
        line-height: 2;
        color: #4A593D;
        text-align: center;
        h4 {
            font-size: 36px;
            font-weight: bold;
        }
        p {
            font-size: 16px;
        }
    }
    .backHomeBtn {
        width: 30%;
        color: #fff;
        background: #9EAA8F;
        padding: 8px 16px;
        border: none;
        border-radius: 30px;
        text-align: center;
        transition: all .5s;
        margin: 24px auto 0;
        &:hover {
            background: #4A593D;
        }
    }
}
</style>
