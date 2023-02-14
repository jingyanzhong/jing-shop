<template>
  <!-- <nav class="Page navigation">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !hasPre }">
        <a
          class="page-link"
          href="#"
          @click.prevent="hasPreFn()"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"
      v-for="page in pagination.total_pages"
      :key="page"
      :class="{ active: currentPage === page }"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="updatePage(page)"
          >{{ page }}</a
        >
      </li>
      <li class="page-item" :class="{ disabled: !hasNext }">
        <a
          class="page-link"
          href="#"
          @click.prevent="hasNextFn()"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav> -->
  <nav class="pagination" v-if="totalPage">
    <ul>
      <li class="page-item" :class="{ disabled: !hasPre }">
        <a
          class="page-link"
          href="#"
          @click.prevent="hasPreFn()"
        >
          <span>&laquo;</span>
        </a>
      </li>
      <li class="page-item"
      v-for="page in totalPage"
      :key="page"
      :class="{ active: currentPage === page }"
      >
        <a href="#"
        @click.prevent="updatePage(page)"
        >{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !hasNext }">
        <a
          class="page-link"
          href="#"
          @click.prevent="hasNextFn()"
        >
          <span>&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    page () {
      this.pagination = this.page
      this.totalPage = this.page.total_pages
      this.currentPage = this.page.current_page
      this.hasPre = this.page.has_pre
      this.hasNext = this.page.has_next
    }
  },
  data () {
    return {
      pagination: {},
      totalPage: '',
      currentPage: '',
      hasPre: '',
      hasNext: ''
    }
  },
  methods: {
    updatePage (page) {
      this.currentPage = page
      this.disabled()
      this.getProduct()
    },
    hasPreFn () {
      this.currentPage = this.currentPage - 1
      this.disabled()
      this.getProduct()
    },
    hasNextFn () {
      this.currentPage = this.currentPage + 1
      this.disabled()
      this.getProduct()
    },
    disabled () {
      this.currentPage <= 1 ? (this.hasPre = false) : (this.hasPre = true)
      this.currentPage >= this.totalPage
        ? (this.hasNext = false)
        : (this.hasNext = true)
    },
    getProduct () {
      this.$emit('get-products', this.currentPage)
    }
  }
}
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  box-shadow: none;
  ul {
    display: flex;
  }
  .page-item{
    width: 40px;
    height: 40px;
    font-size: 20px;
    background: #4A593D;
    border-radius: 20px;
    transition: all .5s;
    margin: 0 6px;
    &:hover, &.active {
      background: #344227;
    }
    a {
      color: #fff;
      text-align: center;
      line-height: 40px;
    }
  }
}
.page-item.disabled {
  pointer-events:none;
  background: #7a7a7a;
}
</style>
