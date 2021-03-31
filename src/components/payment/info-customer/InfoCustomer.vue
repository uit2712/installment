<template>
  <div class="div-info" style="display: block">
    <v-form v-slot="{ values, errors, handleSubmit }">
      <form @submit="handleSubmit($event, onSubmit)">
        <info-basic :errors="{ errors }" />
        <receive-format :errors="{ errors }" />
        <span id="alepay-err" style="display: block">{{ values }}</span>
        <span id="alepay-err" style="display: block">{{ errors }}</span>

        <button
          class="cart-btt full-width"
          id="btncomplete"
          href="javascript:void(0)"
          style="display: block; outline: none"
        >
          Thanh toán ngay
        </button>
      </form>
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
  methods: {
    onSubmit(values) {
      // Submit values to API...
      alert(JSON.stringify(values, null, 2));
    },
  },
};
</script>
<style>
</style>