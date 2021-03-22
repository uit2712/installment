<template>
  <div class="tabslink">
    <div
      v-for="item in options"
      :key="item"
      @click="changeActive(item)"
      :class="{ active: item.isActive }"
    >
      <img :src="item.image" alt="" />
      {{ item.payment.toUpperCase() }}
      <span>{{ item.description }}</span>
    </div>
  </div>
  <div class="datatable">
    <div class="space"></div>
    <div class="boxbank">
      <list-bank />
      <list-credit/>
    </div>
  </div>
</template> 
<script>
import ListBank from "./payment-list-bank/ListBank";
import ListCredit from "./payment-credit/ListCredit"
export default {
  components: {
    ListBank,ListCredit
  },
  data() {
    return {
      options: [
        {
          image: "",
          payment: "Công ty tài chính",
          description: "Duyệt hồ sơ tại siêu thị",
          isActive: false,
        },
        {
          image: "",
          payment: "Qua thẻ tín dụng",
          description: "Không cần xét duyệt",
          isActive: true,
        },
      ],
    };
  },
  methods: {
    changeActive: function (item) {
      if (item.isActive != true) {
        this.options.forEach((el) => {
          el.isActive = false;
        });
        item.isActive = true;
      }
    },
  },
};
</script>
<style>
</style>