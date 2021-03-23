<template>
  <div
    class="alepay-item"
    :class="[
      paymentDetails.isActive && isPaymentDetailsSelected
        ? 'onecol'
        : !isPaymentDetailsSelected
        ? ''
        : 'none',
    ]"
  >
    <aside>
      <b
        >{{ paymentDetails.numberOfMonth }} tháng
        <a
          class="rechoose-month"
          href="javascript:void(0)"
          @click="rechoose"
          :class="{ none: !isPaymentDetailsSelected }"
        >
          Chọn lại</a
        ></b
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
    <aside
      rel="mustpay"
      id="alepay-mustpay"
      v-if="isInstallmentPurchasePriceSelected"
    >
      <label>{{ $filters.formatPrice(paymentDetails.mustPay) }}</label>
    </aside>
    <aside id="div-btn">
      <a
        class="cart-btt small"
        @click="selectPay"
        :class="{ choosed: isPaymentDetailsSelected }"
        v-if="!isPaymentDetailsSelected"
        >Chọn mua</a
      >
      <a
        class="cart-btt small"
        :class="{ choosed: isPaymentDetailsSelected }"
        v-else
        >Đang chọn</a
      >
    </aside>
  </div>
</template>
<script>
import { paymentDetailsData } from "./../../../models/paymentDetails";
import { PICK_UP_PAYMENT_DETAILS } from "./../../../store/module-types/payment-types";
export default {
  props: {
    paymentDetailProps: {
      type: Object,
      require: true,
    },
    isInstallmentPurchasePriceSelected: {
      type: Boolean,
      require: true,
    },
    isPaymentDetailsSelected: {
      type: Boolean,
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
  methods: {
    selectPay: function () {
      this.$emit("paymentDetailsSelected");
      this.$store.commit({
        type: PICK_UP_PAYMENT_DETAILS,
        paymentDetails: this.paymentDetails,
      });
    },
    rechoose: function () {
      this.$emit("paymentDetailsSelected");
    },
  },
};
</script>
<style>
</style>