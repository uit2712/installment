<template>
  <div>
    <a href="javascript:void(0)" class="prdetail"> Xem chi tiết chương trình</a>
    <div class="step">Bước 1: Chọn ngân hàng trả góp</div>
    <div class="listbank">
      <bank-item
        v-for="(item, index) in GET_LIST_BANK"
        :key="index"
        :bank-props="item"
        @bank-selected="bankSelected"
      />
    </div>
  </div>
</template>
<script>
import BankItem from "./BankItem";
import { GET_LIST_BANK } from "./../../../store/module-types/payment-types";
import { mapGetters } from "vuex";
export default {
  components: {
    BankItem,
  },
  computed: {
    ...mapGetters([GET_LIST_BANK]),
  },
  methods: {
    bankSelected: function () {
      this.$emit("bankSelected");
    },
  },
};
</script>
<style>
</style>