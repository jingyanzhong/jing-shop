<template>
    <div class="news">
        <div class="container">
            <div class="info">12/8~12刊登日貨新品。12/13收單唷!</div>
            <div class="info">賣場所有免運活動皆限本島黑貓宅配＆7-11先付款後取貨</div>
            <div class="info">新朋友請先查看「購買須知」並加入會員唷 ! 若隨意棄單者一率黑名單。</div>
        </div>
    </div>
</template>

<style lang="scss">
.news .container{
    display: flex;
    margin: 60px auto;
    white-space: nowrap;
    overflow-x: auto;
    .info {
        background: #4A593D;
        color: #fff;
        padding: 16px 24px;
        margin: 0 16px;
        border-radius: 24px;
    }
}
@media screen and (max-width: 576px) {
    .news .container{
        margin: 30px auto;
    .info {
        font-size: 14px;
    }
    }
}
</style>
