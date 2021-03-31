<template>
  <div class="area_market" style="display: none">
    <!--#region Tỉnh thành-->
    <div class="citydis">
      <div class="city" @click="showCityList">
        <span v-if="GET_SINGLE_CITY">{{ GET_SINGLE_CITY }}</span>
        <span v-else>Chọn tỉnh, thành phố</span>
      </div>
      <div class="listcity layer" :class="[isCitySelected ? 'show' : 'none']">
        <div class="searchlocal">
          <div>
            <input
              name="txtSearch"
              type="text"
              placeholder="Nhập tỉnh, thành để tìm nhanh"
            />
            <button type="submit" class="submit">
              <i class="iconmobile-search"></i>
            </button>
          </div>
        </div>
        <div class="scroll">
          <aside>
            <a
              v-for="(item, index) in GET_LIST_CITY"
              :key="index"
              @click="pickProviceOrCity(item)"
              >{{ item.name }}</a
            >
          </aside>
        </div>
      </div>
      <!--#endregion-->
      <!--#region Quận huyện-->
      <div class="dist" @click="showDistrictList">
        <span v-if="GET_SINGLE_DISTRICT">{{ GET_SINGLE_DISTRICT }}</span>
        <span v-else>Chọn quận, huyện</span>
      </div>
      <div
        class="listdist layer"
        :class="[isDistrictSelected ? 'show' : 'none']"
      >
        <div class="searchlocal">
          <div>
            <input
              name="txtSearch"
              type="text"
              placeholder="Nhập quận, huyện để tìm nhanh"
            />
            <button type="submit" class="submit">
              <i class="iconmobile-search"></i>
            </button>
          </div>
        </div>
        <div class="scroll">
          <aside>
            <a
              v-for="(item, index) in GET_LIST_DISTRICT"
              :key="index"
              @click="pickDistrict(item)"
              >{{ item.name }}</a
            >
          </aside>
        </div>
      </div>
      <!--#endregion-->
    </div>
    <ul class="listmarket">
      <li>
        <input type="radio" name="atShop" value="" />
        <label class="name"
          >159 Thạch Lam, P. Hiệp Tân, Q. Tân Phú, TP. Hồ Chí Minh</label
        >
      </li>
      <li>
        <input type="radio" name="atShop" value="" />
        <label class="name"
          >Điện Máy Xanh Số 227 Kinh Dương Vương, P. 12, Q. 6, TP. HCM (Đối diện
          công viên Phú Lâm, cạnh cây xăng Mũi Tàu)</label
        >
      </li>
      <li>
        <input type="radio" name="atShop" value="" />
        <label class="name"
          >Điện Máy Xanh Số 230 Bạch Đằng, phường 24, quận Bình Thạnh, Tp. Hồ
          Chí Minh</label
        >
      </li>
      <li>
        <input type="radio" name="atShop" value="" />
        <label class="name"
          >Điện Máy Xanh Số 271 Quốc Lộ 22, Huyện Củ Chi, TP.HCM</label
        >
      </li>
      <li>
        <input type="radio" name="atShop" value="" />
        <label class="name"
          >Điện Máy Xanh Số 330, đường Lê Văn Thọ, phường 11, quận Gò Vấp, thành
          phố Hồ Chí Minh.</label
        >
      </li>
      <li>
        <input type="radio" name="atShop" value="" />
        <label class="name"
          >Điện Máy Xanh Số 428 Nguyễn Thị Thập, P. Tân Quy, Q. 7, TP. Hồ Chí
          Minh</label
        >
      </li>
      <div class="viewmorest viewmarket">Xem thêm siêu thị <b></b></div>
    </ul>
    <div class="citydis timeship" id="timeshipstore" style="display: block">
      <div class="date">
        Thời gian nhận:&nbsp;&nbsp;<span data-id="0">Hôm nay 24/03</span>
      </div>
      <div class="listdate listreceive layer" style="display: none">
        <span data-value="0" class="in">Hôm nay 24/03</span>
        <span data-value="1" class="in">Ngày mai 25/03</span>
        <span data-value="2" class="in">Thứ Sáu 26/03</span>
      </div>
    </div>
    <div class="note_market none">
      <p>
        Sản phẩm hiện đã <b>tạm hết hàng tại siêu thị này</b>. Thời gian nhận
        hàng dự kiến sau <b>2 - 7 ngày</b>.
      </p>
    </div>
    <input
      type="text"
      class="homenumber OrderNoteHome saveinfo"
      name="OrderNoteHome"
      placeholder="Yêu cầu khác (không bắt buộc)"
      maxlength="300"
    />
    <div class="clr"></div>
    <div id="delivery-time-store"></div>
    <!--Tuyến giao hàng CRM-->
  </div>
</template>
<script>
import * as addressTypes from "./../../../../../store/module-types/address-types";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isCitySelected: false,
      isDistrictSelected: false,
    };
  },
  computed: {
    ...mapGetters(addressTypes.ADDRESS_MODULE_NAME, [
      addressTypes.GET_LIST_CITY,
      addressTypes.GET_LIST_DISTRICT,
      addressTypes.GET_SINGLE_CITY,
      addressTypes.GET_SINGLE_DISTRICT,
    ]),
  },
  methods: {
    showCityList: function () {
      this.isCitySelected = !this.isCitySelected;
      this.isDistrictSelected = false;
    },
    showDistrictList: function () {
      this.isCitySelected = false;
      this.isDistrictSelected = !this.isDistrictSelected;
    },
    pickProviceOrCity: function (provinceOrCity) {
      this.$store.commit({
        type: `${addressTypes.ADDRESS_MODULE_NAME}/${addressTypes.PICK_UP_CITY}`,
        provinceOrCity: provinceOrCity,
      });
      this.isCitySelected = !this.isCitySelected;
    },
    pickDistrict: function (district) {
      this.$store.commit({
        type: `${addressTypes.ADDRESS_MODULE_NAME}/${addressTypes.PICK_UP_DISTRICT}`,
        district: district,
      });
      this.isDistrictSelected = !this.isDistrictSelected;
    },
  },
};
</script>
<style>
</style>