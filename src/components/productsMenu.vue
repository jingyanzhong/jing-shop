<template>
    <div class="productsMenu">
        <div class="container">
            <ul>
                <li><a href="#" @click.prevent="categoryFilter('全部')">全部</a></li>
                <li><a href="#" @click.prevent="categoryFilter('上衣')">上衣</a></li>
                <li><a href="#" @click.prevent="categoryFilter('下著')">褲/裙</a></li>
                <li><a href="#" @click.prevent="categoryFilter('洋裝')">洋裝/套裝</a></li>
                <li><a href="#" @click.prevent="categoryFilter('外套')">外套</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      category: '全部'
    }
  },
  methods: {
    categoryFilter (category) {
      this.category = category
      this.$emit('category-filter', this.category)
    }
  }
}
</script>
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
@media screen and (max-width:576px) {
  .productsMenu {
    ul {
      justify-content: start;
      flex-wrap: wrap;
      a {
        margin: 8px 0;
      }
    }
}
}
</style>
