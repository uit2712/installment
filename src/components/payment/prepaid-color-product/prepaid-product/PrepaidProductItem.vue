<template>
  <a @click="pickPrepaid">
    {{ $filters.formatPrice(prepaidInfo.prepaidPrice) }}
  </a>
</template>
<script>
import { prepaidData } from "./../../../../models/prepaid";
import * as paymentTypes from "./../../../../store/module-types/payment-types";
export default {
  props: {
    prepaidProps: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      prepaidInfo: prepaidData,
    };
  },
  created() {
    this.prepaidInfo = this.prepaidProps;
  },
  methods: {
    pickPrepaid: function () {
      this.$store.commit({
        type: `${paymentTypes.PAYMENT_MODULE_NAME}/${paymentTypes.SET_PREPAID_PRODUCT}`,
        prepaid: this.prepaidInfo,
      });
      this.$emit("hideSelectPrepaidArea");
      this.$emit("pickedPrepaid");
    },
  },
};
</script>
<style>
</style>