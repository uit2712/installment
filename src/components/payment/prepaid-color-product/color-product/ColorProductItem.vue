<template>
  <a @click="pickColorProduct">
    {{ colorInfo.name }}
  </a>
</template>
<script>
import { colorData } from "./../../../../models/colorProduct";
import * as productTypes from "./../../../../store/module-types/product-types";
export default {
  props: {
    colorProps: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      colorInfo: colorData,
    };
  },
  created() {
    this.colorInfo = this.colorProps;
  },
  methods: {
    pickColorProduct: function () {
      this.$store.commit({
        type: `${productTypes.PRODUCT_MODULE_NAME}/${productTypes.SET_PRODUCT_COLOR}`,
        color: this.colorInfo,
      });
      this.$emit("hideSelectColorArea");
    },
  },
};
</script>
<style>
</style>