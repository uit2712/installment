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
import * as productTypes from "./../../../store/module-types/product-types";
export default {
  components: {
    DetailPromotionItem,
  },
  computed: {
    ...mapGetters(productTypes.PRODUCT_MODULE_NAME, [
      productTypes.GET_PRODUCT_PROMOTION,
    ]),
  },
};
</script>
<style>
</style>