<template>
  <div class="boxresult" v-show="isCreditSelected">
    <div class="infocard">
      <div class="barcard">
        Trả góp qua thẻ <b id="bcard">JCB</b>, ngân hàng <b id="bbank">OCB</b>
      </div>
      <div class="paymentMethod">
        <div class="alepay-firstcol">
          <aside>Số tháng trả góp</aside>
          <aside>Giá mua trả góp</aside>
          <aside>Góp mỗi tháng</aside>
          <aside>Tổng tiền trả góp</aside>
          <aside>Chênh lệch với mua trả thẳng</aside>
          <aside>Số tiền thanh toán khi nhận máy</aside>
          <aside id="divbutton"></aside>
        </div>
        <div class="div-result">
          <payment-detail-item
            v-for="(item, index) in GET_PAYMENT_DETAILS"
            :key="index"
            :payment-detail-props="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PaymentDetailItem from "./PaymentDetailItem";
import { mapGetters } from "vuex";
import { GET_PAYMENT_DETAILS } from "./../../../store/module-types/payment-types";
export default {
  props: {
    isCreditSelected: {
      type: Boolean,
      require: true,
    },
  },
  components: {
    PaymentDetailItem,
  },
  computed: {
    ...mapGetters([GET_PAYMENT_DETAILS]),
  },
};
</script>
<style>
</style>