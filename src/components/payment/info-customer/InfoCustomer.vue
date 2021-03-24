<template>
  <div class="div-info" style="display: block">
    <info-basic />
    <receive-format />
  </div>
</template>
<script>
import InfoBasic from "./info-basic/InfoBasic";
import ReceiveFormat from "./payment-receive-method/ReceiveFormat";

export default {
  components: {
    InfoBasic,
    ReceiveFormat,
  },
};
</script>
<style>
</style>