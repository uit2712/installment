<template>
  <div class="bank-item">
    <img
      v-if="!bank.isHidden"
      :src="bank.imageUrl"
      :title="bank.name"
      :class="{ activeCard: bank.isActive }"
      @click="pickBank"
    />
  </div>
</template>
<script>
import { bankData } from "./../../../models/bank";
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
      this.$store.commit({
        type: "PICK_UP_BANK",
        bank: this.bank,
      });
    },
  },
};
</script>
<style>
</style>