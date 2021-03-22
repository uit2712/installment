<template>
  <div>
    <span>*</span>
    {{ detailPromotion.name }}
    <a
      :href="detailPromotion.linkDetails"
      class="descriptionPromotion"
      v-if="detailPromotion.linkDetails"
    >
      Xem chi tiết</a
    >
  </div>
</template>
<script>
import { promotionDetails } from "./../../../models/promotionDetails";
export default {
  props: {
    itemDetailsPromotion: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      detailPromotion: promotionDetails,
    };
  },
  created() {
    this.detailPromotion = this.itemDetailsPromotion;
  },
};
</script>
<style>
</style>