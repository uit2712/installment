<template>
  <div class="wrapper">
    <div class="box-sp">
      <product />
      <search />
    </div>
    <payment />
  </div>
</template>
<script>
import Product from "./product/Product";
import Search from "./search/Search";
import Payment from "./payment/Payment";
export default {
  components: {
    Product,
    Search,
    Payment,
  },
};
</script>
<style>
</style>
