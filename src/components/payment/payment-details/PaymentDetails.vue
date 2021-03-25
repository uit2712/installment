<template>
  <div class="boxresult" v-show="isCreditSelected">
    <div class="infocard">
      <div class="barcard">
        Trả góp qua thẻ
        <b id="bcard">{{ GET_NAME_BANK_AND_NAME_CREDIT.credit.name }}</b
        >, <b id="bbank">{{ GET_NAME_BANK_AND_NAME_CREDIT.name }}</b>
      </div>
      <div class="paymentMethod">
        <div class="alepay-firstcol">
          <aside>Số tháng trả góp</aside>
          <aside>Giá mua trả góp</aside>
          <aside>Góp mỗi tháng</aside>
          <aside>Tổng tiền trả góp</aside>
          <aside>Chênh lệch với mua trả thẳng</aside>
          <aside v-if="isPrepaidPriceSelected">
            Số tiền thanh toán khi nhận máy
          </aside>
          <aside id="divbutton"></aside>
        </div>
        <div class="div-result">
          <payment-detail-item
            v-for="(item, index) in GET_PAYMENT_DETAILS"
            :key="index"
            :payment-detail-props="item"
            :isPrepaidPriceSelected="isPrepaidPriceSelected"
            :isPaymentDetailsSelected="isPaymentDetailsSelected"
            @payment-details-selected="paymentDetailsSelected"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PaymentDetailItem from "./PaymentDetailItem";
import { mapGetters } from "vuex";
import * as paymentTypes from "./../../../store/module-types/payment-types";
export default {
  props: {
    isCreditSelected: {
      type: Boolean,
      require: true,
    },
    isPrepaidPriceSelected: {
      type: Boolean,
      require: true,
    },
    isPaymentDetailsSelected: {
      type: Boolean,
      require: true,
    },
  },
  components: {
    PaymentDetailItem,
  },
  computed: {
    ...mapGetters(paymentTypes.PAYMENT_MODULE_NAME, [
      paymentTypes.GET_PAYMENT_DETAILS,
      paymentTypes.GET_NAME_BANK_AND_NAME_CREDIT,
    ]),
  },
  methods: {
    paymentDetailsSelected: function () {
      this.$emit("paymentDetailsSelected");
    },
  },
};
</script>
<style>
</style>