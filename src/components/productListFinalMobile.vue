<template>
<div class="productList_final">
    <table>
        <thead>
            <tr class="title">
                <th colspan="7">訂單明細</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in cartsList.carts" :key="item.id">
                <td>
                    <p>
                        <span>{{ item.product.title }}</span>
                        <span>F</span>
                        <span>{{ item.color }}</span>
                        <span>數量 {{ item.qty }}</span>
                    </p>
                    <p class="text-right">
                        <span>單價 NTD {{ currency(item.product.price) }}</span>
                        <span class="fw-b">小計 NTD {{ currency(item.final_total) }}</span>
                    </p>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="7">
                    <span class="line_through">總價NTD {{ currency(cartsList.total) }}</span>
                    <span class="sale">折扣價NTD {{ currency(cartsList.final_total) }}</span>
                </td>
            </tr>
        </tfoot>
    </table>
</div>
</template>

<script>
import { currency } from '@/methods/filters'
export default {
  props: {
    cartsList: {
      type: Object,
      default () { return {} }
    }
  },
  methods: {
    currency
  }
}
</script>

<style lang="scss">
table {
    span {
        margin-right: 16px;
    }
    .text-right {
        text-align: end;
    }
}
</style>
