<template>
  <div
    class="bank-item"
    v-if="!bank.isHidden"
    :class="{ activeCard: bank.isActive }"
    @click="pickBank"
  >
    <img :src="bank.imageUrl" :title="bank.name" />
  </div>
</template>
<script>
import { bankData } from "./../../../models/bank";
import * as paymentTypes from "./../../../store/module-types/payment-types";
export default {
  props: {
    bankProps: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      bank: bankData,
    };
  },
  created() {
    this.bank = this.bankProps;
  },
  methods: {
    pickBank: function () {
      this.$emit("bankSelected", this.bank);
      this.$store.commit({
        type: `${paymentTypes.PAYMENT_MODULE_NAME}/${paymentTypes.PICK_UP_BANK}`,
        bank: this.bank,
      });
    },
  },
};
</script>
<style>
</style>