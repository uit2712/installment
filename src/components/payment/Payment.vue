<template>
  <div class="tabslink">
    <div
      v-for="item in options"
      :key="item"
      @click="changeActive(item)"
      :class="{ active: item.isActive }"
    >
      <img :src="item.image" alt="" />
      {{ item.payment.toUpperCase() }} <!-- Dùng filter nha e, kiểm tra có null hay không? -->
      <span>{{ item.description }}</span>
    </div>
  </div>
  <div class="datatable">
    <div class="space"></div>
    <div class="boxbank">
      <list-bank @bank-selected="bankSelected($event)" />
      <list-credit
        :isBankSelected="isBankSelected"
        @credit-selected="creditSelected"
      />
      <payment-details
        :isCreditSelected="isCreditSelected"
        :isPaymentDetailsSelected="isPaymentDetailsSelected"
        :isPrepaidPriceSelected="isPrepaidPriceSelected"
        @payment-details-selected="paymentDetailsSelected"
      />
      <prepaid-color-product v-show="isPaymentDetailsSelected" />
      <info-customer v-show="isPaymentDetailsSelected" />
    </div>
  </div>
</template> 
<script>
import ListBank from "./payment-list-bank/ListBank";
import ListCredit from "./payment-credit/ListCredit";
import PaymentDetails from "./payment-details/PaymentDetails";
import PrepaidColorProduct from "./prepaid-color-product/PrepaidColorProduct";
import InfoCustomer from "./info-customer/InfoCustomer";
import { bankData } from "../../models/bank";
export default {
  components: {
    ListBank,
    ListCredit,
    PaymentDetails,
    PrepaidColorProduct,
    InfoCustomer,
  },
  data() {
    return {
      options: [
        {
          image: "",
          payment: "Công ty tài chính",
          description: "Duyệt hồ sơ tại siêu thị",
          isActive: false,
        },
        {
          image: "",
          payment: "Qua thẻ tín dụng",
          description: "Không cần xét duyệt",
          isActive: true,
        },
      ],
      bankSelectedData: bankData,
      isBankSelected: false,
      isCreditSelected: false,
      isPrepaidPriceSelected: false,
      isPaymentDetailsSelected: false,
    };
  },
  methods: {
    changeActive: function (item) {
      if (item.isActive != true) {
        this.options.forEach((el) => {
          el.isActive = false;
        });
        item.isActive = true;
      }
    },
    bankSelected: function (event) {
      if (this.bankSelectedData.bankId == event.bankId) {
        return;
      }
      this.isBankSelected = true;
      this.isCreditSelected = false;
      this.isPaymentDetailsSelected = false;
      this.bankSelectedData = event;
    },
    creditSelected: function () {
      this.isCreditSelected = true;
      this.isPaymentDetailsSelected = false;
    },
    paymentDetailsSelected: function () {
      this.isPaymentDetailsSelected = !this.isPaymentDetailsSelected;
    },
  },
};
</script>
<style>
</style>