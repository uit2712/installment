<template>
  <div class="prepaidcolor" style="display: block">
    <prepaid-product />
    <color-product />
  </div>
</template>
<script>
import ColorProduct from "./ColorProduct";
import PrepaidProduct from "./PrepaidProduct";
export default {
  components: {
    ColorProduct,
    PrepaidProduct,
  },
};
</script>
<style>
</style>