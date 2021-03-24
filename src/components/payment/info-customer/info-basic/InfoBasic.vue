<template>
  <div id="userinfo" style="display: block">
    <b class="step">Thông tin người mua</b>
    <div class="infouser">
      <div class="malefemale">
        <label id="male" class="anh chonkm" onclick="SetGender(1)">
          <input type="radio" id="male" name="gender" value="male" />
          &nbsp;Anh
        </label>
        <label id="female" class=" " onclick="SetGender(0)">
          <input type="radio" id="female" name="gender" value="female" />
          &nbsp;Chị
        </label>
      </div>
      <div class="areainfo">
        <div class="left">
          <input
            onkeyup="onKeyupInputName(this)"
            type="text"
            class="saveinfo"
            name="BillingAddress.FullName"
            id="txtname"
            placeholder="Họ và tên"
            maxlength="50"
            value="hòa"
          />
        </div>
        <div class="left">
          <input
            type="tel"
            class="saveinfo"
            name="BillingAddress.PhoneNumber"
            id="txtphone"
            placeholder="Số điện thoại"
            maxlength="11"
            autocomplete="off"
            value="0954312332"
          />
        </div>
      </div>
      <input
        type="text"
        class="saveinfo"
        style="display: none"
        id="OrderNote"
        name="OrderNote"
        placeholder="Yêu cầu khác (không bắt buộc)"
        maxlength="300"
      />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>