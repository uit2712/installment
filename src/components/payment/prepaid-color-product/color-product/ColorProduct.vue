<template>
  <div class="choosecolor">
    <span @click="showSelectColorProduct"
      >Chọn màu: {{ GET_PRODUCT_COLOR_RESULT.name }}</span
    >
    <div class="listcolor" id="colorcard" v-show="isShowSelectColorProduct">
      <color-product-item
        v-for="(color, index) in GET_PRODUCT_COLOR"
        :key="index"
        :colorProps="color"
        @hide-select-color-area="hideSelectColorArea"
      />
    </div>
  </div>
</template>
<script>
import ColorProductItem from "./ColorProductItem";
import { mapGetters } from "vuex";
import * as productTypes from "./../../../../store/module-types/product-types";
export default {
  data() {
    return {
      isShowSelectColorProduct: false,
    };
  },
  computed: {
    ...mapGetters(productTypes.PRODUCT_MODULE_NAME, [
      productTypes.GET_PRODUCT_COLOR,
      productTypes.GET_PRODUCT_COLOR_RESULT,
    ]),
  },
  components: {
    ColorProductItem,
  },
  methods: {
    showSelectColorProduct: function () {
      this.isShowSelectColorProduct = !this.isShowSelectColorProduct;
    },
    hideSelectColorArea: function () {
      this.isShowSelectColorProduct = false;
    },
  },
};
</script>
<style>
</style>