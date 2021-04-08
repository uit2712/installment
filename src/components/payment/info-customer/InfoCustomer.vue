<template>
<!-- trường hợp validate ở nhiều component khác nhau=>tạo ra 1 hàm validate dùng chung trong
  global plugin, ví dụ: Vue.prototype.$validate = validate() => có gì a giải thích rõ hơn cho hiểu
 -->
  <div class="div-info" style="display: block">
    <v-form v-slot="{ values, errors, handleSubmit }">
      <form @submit="handleSubmit($event, onSubmit)">
        <info-basic :errors="{ errors }" />
        <!-- không nên truyền lỗi kiểu này e (errors) => giả sử component lồng nhiều component thì sao? e phải truyền props xuống hết hả?
          lỗi là ở mỗi component tự hiển thị mà
        -->
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