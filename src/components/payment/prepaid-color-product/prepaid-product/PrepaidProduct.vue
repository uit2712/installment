<template>
  <b id="step3" class="step"
    >Bước 3: Chọn số tiền muốn trả góp qua thẻ tín dụng</b
  >
  <div class="div-prepaid">
    <div @click="showSelectPrepaid" v-if="!isPickPrepaid">
      Chọn số tiền trả góp
    </div>
    <div @click="showSelectPrepaid" v-else>
      {{ $filters.formatPrice(GET_SINGLE_PREPAID) }}
    </div>

    <div class="list-prepaid" v-show="isShowSelectPrepaid">
      <prepaid-product-item
        v-for="(prepaid, index) in GET_LIST_PREPAID"
        :key="index"
        :prepaidProps="prepaid"
        @hide-select-prepaid-area="hideSelectPrepaidArea"
        @picked-prepaid="pickedPrepaid"
      />
    </div>
  </div>
</template>
<script>
import PrepaidProductItem from "./PrepaidProductItem";
import { mapGetters } from "vuex";
import * as paymentTypes from "./../../../../store/module-types/payment-types";
export default {
  data() {
    return {
      isShowSelectPrepaid: false,
      isPickPrepaid: false,
    };
  },
  components: {
    PrepaidProductItem,
  },
  computed: {
    ...mapGetters(paymentTypes.PAYMENT_MODULE_NAME, [
      paymentTypes.GET_LIST_PREPAID,
      paymentTypes.GET_SINGLE_PREPAID,
    ]),
  },
  methods: {
    showSelectPrepaid: function () {
      this.isShowSelectPrepaid = !this.isShowSelectPrepaid;
    },
    hideSelectPrepaidArea: function () {
      this.isShowSelectPrepaid = false;
    },
    pickedPrepaid: function () {
      this.isPickPrepaid = true;
    },
  },
};
</script>
<style>
</style>