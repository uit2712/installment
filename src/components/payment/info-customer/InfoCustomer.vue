<template>
  <div class="div-info" style="display: block">
    <v-form v-slot="{ values }">
      <info-basic />
      <receive-format />
      <span id="alepay-err" style="display: block">{{ values }}</span>
      <button
        class="cart-btt full-width"
        id="btncomplete"
        href="javascript:void(0)"
        style="display: block; outline: none"
      >
        Thanh toán ngay
      </button>
    </v-form>
  </div>
</template>
<script>
import InfoBasic from "./info-basic/InfoBasic";
import ReceiveFormat from "./payment-receive-method/ReceiveFormat";
import { Form } from "vee-validate";
export default {
  components: {
    InfoBasic,
    ReceiveFormat,
    "v-form": Form,
  },
};
</script>
<style>
</style>