<template>
  <div class="infoproduct">
    <img :src="GET_PRODUCT_INFO_BASIC.imageUrl" class="sp" />
    <div class="leftside-img">
      <div style="line-height: 24px">
        Mua trả góp
        <a :href="GET_PRODUCT_INFO_BASIC.link">{{
          GET_PRODUCT_INFO_BASIC.name
        }}</a>
      </div>
      <div class="price">
        Giá sản phẩm
        <strong class="priceSale">{{
          $filters.formatPrice(GET_PRODUCT_INFO_BASIC.priceSale)
        }}</strong>
        <span class="price-Product">{{
          $filters.formatPrice(GET_PRODUCT_INFO_BASIC.price)
        }}</span>
        <span class="discount">{{
          GET_PRODUCT_INFO_BASIC.discount + "%"
        }}</span>
      </div>
      <div class="km" @click="togglePromotionDetails">Chi tiết khuyến mãi</div>
      <detail-promotion v-show="isTogglePromotionDetails" />
      <div class="cod" @click="toggleCoupon">
        Sử dụng mã giảm giá
        <span class="note-coupon">
          Mã giảm giá không sử dụng cho gói trả góp lãi suất đặc biệt (0%, 0.5%,
          1%)
        </span>
      </div>
      <product-coupon v-show="isToggleCoupon" />
    </div>
  </div>
</template>
<script>
import DetailPromotion from "./details-promotion/DetailPromotion";
import ProductCoupon from "./product-coupon/ProductCoupon";
import { mapGetters } from "vuex";
import * as productTypes from "./../../store/module-types/product-types";
export default {
  components: {
    ProductCoupon,
    DetailPromotion,
  },
  data() {
    return {
      isTogglePromotionDetails: false,
      isToggleCoupon: false,
    };
  },
  computed: {
    ...mapGetters(productTypes.PRODUCT_MODULE_NAME, [
      productTypes.GET_PRODUCT_INFO_BASIC,
    ]),
  },
  methods: {
    togglePromotionDetails: function () {
      this.isTogglePromotionDetails = !this.isTogglePromotionDetails;
    },
    toggleCoupon: function () {
      this.isToggleCoupon = !this.isToggleCoupon;
    },
  },
  created() {
    this.$store.commit({
      type: `${productTypes.PRODUCT_MODULE_NAME}/${productTypes.SET_PRODUCT_COLOR}`,
      color: this.GET_PRODUCT_INFO_BASIC.colorProduct[0],
    });
  },
};
</script>
<style>
</style>