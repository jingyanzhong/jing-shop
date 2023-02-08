<template>
    <div class="productsMenu">
        <div class="container">
            <ul>
                <li><a href="#">全部</a></li>
                <li><a href="#">上衣</a></li>
                <li><a href="#">褲/裙</a></li>
                <li><a href="#">洋裝/套裝</a></li>
                <li><a href="#">外套</a></li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
.productsMenu {
    background: #4A593D;
    padding: 16px 0;
    margin-bottom: 60px;
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            padding: 0 16px;
            color: #fff;
            transition: all .3s;
            &:hover {
                color: #AFC297;
            }
        }
    }
}
</style>
