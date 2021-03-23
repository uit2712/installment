<template>
  <div
    class="bank-item"
    v-if="!credit.isHidden"
    :class="{ activeCard: credit.isActive }"
    @click="pickCredit"
  >
    <img :src="credit.imageUrl" :title="credit.name" />
  </div>
</template>
<script>
import { creditData } from "./../../../models/credit";
import { PICK_UP_CREDIT } from "./../../../store/module-types/payment-types";
export default {
  props: {
    creditProps: {
      type: Object,
      require: true,
    },
    isBankSelected: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      credit: creditData,
    };
  },
  created() {
    this.credit = this.creditProps;
  },
  updated() {
    this.credit = this.creditProps;
  },
  methods: {
    pickCredit: function () {
      if (this.isBankSelected == true) {
        this.$emit("creditSelected");
        this.$store.commit({
          type: PICK_UP_CREDIT,
          credit: this.credit,
        });
      } else {
        return;
      }
    },
  },
};
</script>
<style>
</style>