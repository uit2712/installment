<template>
  <div id="userinfo" style="display: block">
    <b class="step">Thông tin người mua</b>
    <div class="infouser">
      <div class="malefemale">
        <label id="male" class="anh chonkm">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            v-model="gender"
            checked
          />
          &nbsp;Anh
        </label>
        <label id="female" class=" ">
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            v-model="gender"
          />
          &nbsp;Chị
        </label>
      </div>
      <div class="areainfo">
        <div class="left">
          <v-field v-slot="{ field }" name="fullName">
            <input
              type="text"
              class="saveinfo"
              id="txtname"
              placeholder="Họ và tên"
              maxlength="50"
              v-bind="field"
            />
          </v-field>
        </div>
        <div class="left">
          <v-field v-slot="{ field }" name="phoneNumber">
            <input
              type="tel"
              class="saveinfo"
              id="txtphone"
              placeholder="Số điện thoại"
              maxlength="11"
              autocomplete="off"
              value=""
              v-bind="field"
            />
          </v-field>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Field } from "vee-validate";
export default {
  components: {
    "v-field": Field,
  },
  data() {
    return {
      gender: "male",
    };
  },
};
</script>
<style>
</style>