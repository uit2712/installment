<template>
  <div class="tabslink">
    <div
      v-for="item in options"
      :key="item"
      @click="changeActive(item)"
      :class="{ active: item.isActive }"
    >
      <img :src="item.image" alt="" />
      {{ item.payment.toUpperCase() }}
      <span>{{ item.description }}</span>
    </div>
  </div>
  <div class="datatable">
    <div class="space"></div>
    <div class="boxbank">
      <list-bank @bank-selected="bankSelected" />
      <list-credit
        :isBankSelected="isBankSelected"
        @credit-selected="creditSelected"
      />
      <payment-details
        :isCreditSelected="isCreditSelected"
        :isInstallmentPurchasePriceSelected="isInstallmentPurchasePriceSelected"
      />
    </div>
  </div>
</template> 
<script>
import ListBank from "./payment-list-bank/ListBank";
import ListCredit from "./payment-credit/ListCredit";
import PaymentDetails from "./payment-details/PaymentDetails";
export default {
  components: {
    ListBank,
    ListCredit,
    PaymentDetails,
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
      isBankSelected: false,
      isCreditSelected: false,
      isInstallmentPurchasePriceSelected: false,
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
    bankSelected: function () {
      this.isBankSelected = true;
      this.isCreditSelected = false;
    },
    creditSelected: function () {
      this.isCreditSelected = true;
    },
  },
};
</script>
<style>
</style>