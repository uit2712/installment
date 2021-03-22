<template>
  <div class="box-km">
    <detail-promotion-item
      v-for="item in GET_PRODUCT_PROMOTION"
      :key="item"
      :itemDetailsPromotion="item"
    />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import DetailPromotionItem from "./DetailPromotionItem";
import { GET_PRODUCT_PROMOTION } from "./../../../store/module-types/product-types";
export default {
  components: {
    DetailPromotionItem,
  },
  computed: {
    ...mapGetters([GET_PRODUCT_PROMOTION]),
  },
};
</script>
<style>
</style>