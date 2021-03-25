<template>
  <div class="prepaidcolor" style="display: block">
    <prepaid-product />
    <color-product />
  </div>
</template>
<script>
import ColorProduct from "./color-product/ColorProduct";
import PrepaidProduct from "./prepaid-product/PrepaidProduct";
export default {
  components: {
    ColorProduct,
    PrepaidProduct,
  },
};
</script>
<style>
</style>