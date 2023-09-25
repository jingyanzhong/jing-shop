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
                            <span class="title">{{ item.product.title }}</span>
                            <span>F</span>
                            <span>{{ item.color }}</span>
                            <span>數量 {{ item.qty }}</span>
                        </p>
                        <p class="text-right">
                            <span>單價 NTD {{ currency(item.product.price) }}</span>
                            <span class="fw-b total">小計 NTD {{ currency(item.final_total) }}</span>
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
    width: 100%;
    border: 1px solid #D0D3C9;
    color: #4A593D;
    font-size: 14px;
    background: #fff;

    thead {
        font-weight: bold;

        th {
            padding: 16px;
        }

        .title {
            background: #D0D3C9;
        }
    }

    tbody {
        background: #fff;
        border: 1px solid #D0D3C9;

        tr {
            border-bottom: 1px solid #D0D3C9;
        }

        td {
            padding: 16px 16px 8px 16px;
        }

        p {
            padding-bottom: 8px;
            line-height: 1.5;
        }

        .title {
            display: block;
            font-weight: bold;
            color: #4a593d;
            margin-bottom: 8px;
        }

        .total {
            margin-right: 0;
        }
    }

    tfoot {
        td {
            padding: 20px 0;
            text-align: end;
        }

        .line_through {
            color: #9EAA8F;
            text-decoration: line-through;
        }

        .sale {
            color: #ce0505;
            font-weight: bold;
            font-size: 18px;
            margin-left: auto;
        }
    }

    span {
        margin-right: 16px;
    }

    .text-right {
        text-align: end;
    }
}
</style>
