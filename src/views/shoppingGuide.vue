<template>
    <div class="guide">
        <div class="container">
            <h3>購物說明</h3>
            <h4>— 退換貨政策 —</h4>
            <p>煩請各位仙女拆封前請先錄影存證，以確保自身權益。若收到瑕疵或寄件錯誤的商品時，請仙女們維持原有之包裝配件完整，並於七日鑑賞期間盡速拍下瑕疵區域或回傳開箱影片(請確認有拍到瑕疵部位)，回報給客服，我們會盡快為您處理退換貨相關事宜。
            </p>
            <ul class="guideContent">
                <li>
                    <h5>| 七日猶豫期</h5>
                    <p>京式會社提供七日猶豫期，依據消保法規定，可在七日猶豫期內無條件退貨，請注意猶豫期非試用期。請保持商品狀態維持全新，並保留完整包裝。</p>
                </li>
                <li>
                    <h5>| 退貨說明</h5>
                    <p class="title-s">什麼情況無法辦理退貨？</p>
                    <ul>
                        <li>超過七天猶豫期。</li>
                        <li>下水過或已穿過的商品。</li>
                        <li>吊牌已拆下的商品。</li>
                        <li>一般小脫線、勾針、極小的汙點、鈕扣不牢固、成衣味道</li>
                        <li>不喜歡、不適合、不舒服等等的個人因素。</li>
                        <li>內衣內褲內搭褲襪子等較貼身且私人的物品。</li>
                        <li>色差(每台電腦螢幕色彩顯示和設定均不盡相同，因此不接受色差太多之理由，若對顏色有疑慮者請勿下單喔)。</li>
                        <li>尺寸誤差3公分內。</li>
                        <li>包裝已被拆封、髒汙或破損，或產品本身髒汙、人為損壞、破損等情形發生。以上情況均恕無法辦理退貨。</li>
                    </ul>
                    <p>退貨商品必須整筆訂單，恕不接受部份退貨，並請依原包裝寄回。退回商品需包含此筆訂單的所有商品。</p>
                    <p class="title-s">什麼情況我們會接受退貨？</p>
                    <p>在七天猶豫期間提出退貨申請，產品為全新狀態且完整包裝，務必保持跟收到貨時的狀態相同
                        (包含外包裝、彩盒，禮品袋等)，如果有缺少，恕不得辦理退貨。<br>商品一經拆封即無法退貨，若有商品瑕疵問題，請與客服聯繫，將由專人為您服務。<br>如因個人因素申請退貨或超商未取次數累計2次以上，本公司將保留是否接受訂單的權利，不便之處敬請見諒！
                    </p>
                </li>
                <li>
                    <h5>| 換貨說明</h5>
                    <p class="title-s">以下情形可辦理換貨</p>
                    <ul>
                        <li>收到瑕疵品或是與訂單不符的錯誤商品。</li>
                        <li>運輸過程造成貨品損傷。</li>
                    </ul>
                    <p>若有上述情形，請於七天猶豫期內聯絡客服部，待客服為您辦理換貨，逾期將無法享有七天猶豫期之權益且不得辦理換貨。</p>
                </li>
                <li>
                    <h5>| 退換貨的運費問題</h5>
                    <p class="title-s">退貨</p>
                    <p>若非商品本身瑕疵或運輸過程造成商品損傷，請消費者自行負擔運費將商品寄回。本公司確認收到退貨後，我們將會把訂單金額全數退回。</p>
                    <p class="title-s">換貨</p>
                    <p>若確認為瑕疵品或是與訂單不符的錯誤商品，或運輸過程造成貨品損傷，則會提供換貨免運並補貼寄回運費。<br>若確認非瑕疵品或是與訂單不符的錯誤商品，或運輸過程造成貨品損傷，則需要自行負擔寄回及重新寄出運費。
                    </p>
                    <p class="title-s">使用優惠券，退貨後還可以使用嗎？</p>
                    <p>優惠卷一經使用即失效，且不進行補發，請謹慎使用。取消訂單或是已退貨訂單，僅退回您支付的金額，不得索取優惠卷的現金價值。</p>
                </li>
                <li>
                    <h5>| 退款作業時間</h5>
                    <p>退款時必須請您提供正確的匯款帳號，以利完成退款手續。確認符合我們的退款標準，且資料確認無誤後，我們10天內會再將款項退到您的帳戶。</p>
                    <p class="title-s">無法退款的狀況</p>
                    <ul>
                        <li>匯款帳號填寫有誤，將無法辦理退款。</li>
                        <li>因填寫資料有明顯問題卻無法聯繫到您，將取消您的退款申請。</li>
                    </ul>
                </li>
            </ul>
            <h5></h5>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.guide {
    .container {
        max-width: 800px;
    }
    h3 {
        font-size: 28px;
        font-weight: bold;
        color: #4A593D;
        text-align: center;
        margin: 50px 0;
    }

    h4 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 16px;
    }

    p {
        line-height: 2;
    }
}

.guideContent {
    >li {
        border-bottom: 1px solid #4A593D;
        // margin-bottom: 24px;
        padding: 24px 0;

        h5 {
            font-size: 18px;
            color: #4A593D;
            font-weight: bold;
            margin-bottom: 12px;
        }

        ul {
            li {
                margin-bottom: 12px;

                &::before {
                    content: "\2605";
                    color: #4A593D;
                }
            }
        }

        .title-s {
            display: inline-block;
            border: 1px solid #000;
            padding: 0 8px;
            font-weight: bold;
            margin-top: 24px;
            margin-bottom: 16px;
        }
    }
}</style>
