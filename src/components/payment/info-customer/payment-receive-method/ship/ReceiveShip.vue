<template>
  <div class="area_address" style="display: block">
    <div class="citydis">
      <div class="city" @click="showCityList">
        <span v-if="GET_SINGLE_CITY">{{ GET_SINGLE_CITY }}</span>
        <span v-else>Chọn tỉnh, thành phố</span>
      </div>
      <div class="listcity layer" :class="[isCitySelected ? 'show' : 'none']">
        <div class="searchlocal">
          <div>
            <input
              type="text"
              name="txtSearch"
              placeholder="Nhập tỉnh, thành để tìm nhanh"
            />
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
          <aside>
            <!-- <a data-stock="1" data-value="125" data-name="Khánh Hòa"
              >Khánh Hòa</a
            ><a data-stock="1" data-value="126" data-name="Kiên Giang"
              >Kiên Giang</a
            ><a data-stock="1" data-value="127" data-name="Kon Tum">Kon Tum</a
            ><a data-stock="1" data-value="128" data-name="Lai Châu">Lai Châu</a
            ><a data-stock="1" data-value="129" data-name="Lâm Đồng">Lâm Đồng</a
            ><a data-stock="1" data-value="130" data-name="Lạng Sơn">Lạng Sơn</a
            ><a data-stock="1" data-value="131" data-name="Lào Cai">Lào Cai</a
            ><a data-stock="1" data-value="132" data-name="Long An">Long An</a
            ><a data-stock="1" data-value="133" data-name="Nam Định">Nam Định</a
            ><a data-stock="1" data-value="134" data-name="Nghệ An">Nghệ An</a
            ><a data-stock="1" data-value="135" data-name="Ninh Bình"
              >Ninh Bình</a
            ><a data-stock="1" data-value="136" data-name="Ninh Thuận"
              >Ninh Thuận</a
            ><a data-stock="1" data-value="137" data-name="Phú Thọ">Phú Thọ</a
            ><a data-stock="1" data-value="138" data-name="Phú Yên">Phú Yên</a
            ><a data-stock="1" data-value="139" data-name="Quảng Bình"
              >Quảng Bình</a
            ><a data-stock="1" data-value="140" data-name="Quảng Nam"
              >Quảng Nam</a
            ><a data-stock="1" data-value="141" data-name="Quảng Ngãi"
              >Quảng Ngãi</a
            ><a data-stock="1" data-value="142" data-name="Quảng Ninh"
              >Quảng Ninh</a
            ><a data-stock="1" data-value="143" data-name="Quảng Trị"
              >Quảng Trị</a
            ><a data-stock="1" data-value="144" data-name="Sóc Trăng"
              >Sóc Trăng</a
            ><a data-stock="1" data-value="145" data-name="Sơn La">Sơn La</a
            ><a data-stock="1" data-value="146" data-name="Tây Ninh">Tây Ninh</a
            ><a data-stock="1" data-value="147" data-name="Thái Bình"
              >Thái Bình</a
            ><a data-stock="1" data-value="148" data-name="Thái Nguyên"
              >Thái Nguyên</a
            ><a data-stock="1" data-value="149" data-name="Thanh Hóa"
              >Thanh Hóa</a
            ><a data-stock="1" data-value="150" data-name="Thừa Thiên Huế"
              >Thừa Thiên Huế</a
            ><a data-stock="1" data-value="151" data-name="Tiền Giang"
              >Tiền Giang</a
            ><a data-stock="1" data-value="152" data-name="Trà Vinh">Trà Vinh</a
            ><a data-stock="1" data-value="153" data-name="Tuyên Quang"
              >Tuyên Quang</a
            ><a data-stock="1" data-value="154" data-name="Vĩnh Long"
              >Vĩnh Long</a
            ><a data-stock="1" data-value="155" data-name="Vĩnh Phúc"
              >Vĩnh Phúc</a
            ><a data-stock="1" data-value="156" data-name="Yên Bái">Yên Bái</a> -->
          </aside>
        </div>
      </div>
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
      <!--#region Phường xã-->
      <div class="ward" @click="showWardList">
        <span v-if="GET_SINGLE_WARD">{{ GET_SINGLE_WARD }}</span>
        <span v-else>Chọn phường, xã</span>
      </div>
      <div class="listward layer" :class="[isWardSelected ? 'show' : 'none']">
        <div class="searchlocal">
          <div>
            <input
              name="txtSearch"
              type="text"
              placeholder="Nhập phường, xã để tìm nhanh"
            />
          </div>
        </div>
        <div class="scroll">
          <aside>
            <a
              v-for="(item, index) in GET_LIST_WARD"
              :key="index"
              @click="pickWardOrCommunes(item)"
            >
              {{ item.name }}
            </a>
          </aside>
        </div>
      </div>
      <v-field name="homeNumber" v-slot="{ field }" rules="required">
        <input
          type="text"
          placeholder="Số nhà, tên đường"
          id="BillingAddress_Address"
          maxlength="200"
          class="ShipAtHome homenumber saveinfo"
          v-bind="field"
          :class="{ errorInput: errors.errors.homeNumber }"
        />
      </v-field>
    </div>
    <div class="clr"></div>

    <div class="showtimeship_address hide" style="display: block">
      <div class="timeship">
        <b>Thời gian nhận hàng:</b>
      </div>
      <div class="citydis">
        <div class="date">
          <span>Hôm nay 24/03</span>
        </div>
        <div class="listdate layer" style="display: none">
          <span data-value="0" onclick="ChangeHours(this)" class="in"
            >Hôm nay 24/03</span
          >
          <span data-value="1" onclick="ChangeHours(this)" class="in"
            >Ngày mai 25/03</span
          >

          <span data-value="2" onclick="ChangeHours(this)">Thứ Sáu 26/03</span>
        </div>

        <div class="hours"><span>Trước 12 giờ</span></div>
        <div class="listhours layer" style="display: none">
          <span data-value="10" class="today"><text>Trước 10 giờ</text></span>
          <span data-value="11" class="today"><text>Trước 11 giờ</text></span>
          <span data-value="12" class="ahour" selected=""
            ><text class="c">Trước 12 giờ</text></span
          >
          <span data-value="13"><text>Trước 13 giờ</text></span>
          <span data-value="14"><text>Trước 14 giờ</text></span>
          <span data-value="15"><text>Trước 15 giờ</text></span>
          <span data-value="16"><text>Trước 16 giờ</text></span>
          <span data-value="17"><text>Trước 17 giờ</text></span>
          <span data-value="18"><text>Trước 18 giờ</text></span>
          <span data-value="19"><text>Trước 19 giờ</text></span>
          <span data-value="20" class="hcm"><text>Trước 20 giờ</text></span>
          <span data-value="21" class="hcm"><text>Trước 21 giờ</text></span>
        </div>
      </div>
    </div>

    <div class="note_address none" style="display: none">
      <p></p>
    </div>
    <input
      type="text"
      class="homenumber OrderNoteHome saveinfo"
      name="OrderNoteHome"
      placeholder="Yêu cầu khác (không bắt buộc)"
      maxlength="300"
    />
    <div id="delivery-time"></div>
    <!--Tuyến giao hàng CRM-->
  </div>
</template>
<script>
import * as addressTypes from "./../../../../../store/module-types/address-types";
import { Field } from "vee-validate";
import { mapGetters } from "vuex";
export default {
  props: {
    errors: {
      type: Object,
      require: false,
    },
  },
  data() {
    return {
      isCitySelected: false,
      isDistrictSelected: false,
      isWardSelected: false,
    };
  },
  components: {
    "v-field": Field,
  },
  computed: {
    ...mapGetters(addressTypes.ADDRESS_MODULE_NAME, [
      addressTypes.GET_LIST_CITY,
      addressTypes.GET_LIST_DISTRICT,
      addressTypes.GET_LIST_WARD,
      addressTypes.GET_SINGLE_CITY,
      addressTypes.GET_SINGLE_DISTRICT,
      addressTypes.GET_SINGLE_WARD,
    ]),
  },
  methods: {
    showCityList: function () {
      this.isCitySelected = !this.isCitySelected;
      this.isDistrictSelected = false;
      this.isWardSelected = false;
    },
    showDistrictList: function () {
      this.isCitySelected = false;
      this.isDistrictSelected = !this.isDistrictSelected;
      this.isWardSelected = false;
    },
    showWardList: function () {
      this.isCitySelected = false;
      this.isDistrictSelected = false;
      this.isWardSelected = !this.isWardSelected;
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
    pickWardOrCommunes: function (wardsOrCommunes) {
      this.$store.commit({
        type: `${addressTypes.ADDRESS_MODULE_NAME}/${addressTypes.PICK_UP_WARD}`,
        wardsOrCommunes: wardsOrCommunes,
      });
      this.isWardSelected = !this.isWardSelected;
    },
  },
};
</script>
<style>
</style>