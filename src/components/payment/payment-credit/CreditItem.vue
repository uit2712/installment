<template>
  <div>
    <img :src="credit.imageUrl" :title="credit.name" />
  </div>
</template>
<script>
import { creditData } from "./../../../models/credit";
export default {
  props: {
    creditProps: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      credit: creditData,
    };
  },
  created() {
    this.credit = this.creditProps;
  },
};
</script>
<style>
</style>