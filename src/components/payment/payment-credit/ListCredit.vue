<template>
  <div>
    <div class="step" id="step2">Bước 2: Chọn loại thẻ</div>
    <div class="listbank" style="padding-bottom: 100px">
      <credit-item
        v-for="(item, index) in GET_LIST_CREDIT"
        :key="index"
        :credit-props="item"
        :isBankSelected="isBankSelected"
        @credit-selected="creditSelected"
      />
    </div>
  </div>
</template>
<script>
import CreditItem from "./CreditItem";
import { GET_LIST_CREDIT } from "./../../../store/module-types/payment-types";
import { mapGetters } from "vuex";
export default {
  props: {
    isBankSelected: {
      type: Boolean,
      require: true,
    },
  },
  components: {
    CreditItem,
  },
  computed: {
    ...mapGetters([GET_LIST_CREDIT]),
  },
  methods: {
    creditSelected: function () {
      this.$emit("creditSelected");
    },
  },
};
</script>
<style>
</style>