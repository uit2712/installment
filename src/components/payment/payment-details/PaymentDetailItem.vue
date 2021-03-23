<template>
  <div class="alepay-item" id="alepay-item-6">
    <aside>
      <b
        >{{ paymentDetails.numberOfMonth }} tháng
        <a class="rechoose-month"> Chọn lại</a></b
      >
    </aside>
    <aside>
      <label>{{
        $filters.formatPrice(paymentDetails.installmentPurchasePrice)
      }}</label>
    </aside>
    <aside id="alepay-bymonth">
      <label>{{
        $filters.formatPrice(paymentDetails.installmentPerMonth)
      }}</label>
    </aside>
    <aside id="alepay-total">
      <label>{{ $filters.formatPrice(paymentDetails.totalInstallment) }}</label>
    </aside>
    <aside id="alepay-diff">
      {{ $filters.formatPrice(paymentDetails.difference) }}
    </aside>
    <aside rel="mustpay" id="alepay-mustpay">
      <label>{{ $filters.formatPrice(paymentDetails.mustPay) }}</label>
    </aside>
    <aside id="div-btn">
      <a class="cart-btt small">Chọn mua</a>
    </aside>
  </div>
</template>
<script>
import { paymentDetailsData } from "./../../../models/paymentDetails";
export default {
  props: {
    paymentDetailProps: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      paymentDetails: paymentDetailsData,
    };
  },
  created() {
    this.paymentDetails = this.paymentDetailProps;
  },
  updated() {
    this.paymentDetails = this.paymentDetailProps;
  },
};
</script>
<style>
</style>