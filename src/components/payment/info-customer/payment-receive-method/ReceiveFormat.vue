<template>
  <div class="area_other" style="display: block">
    <div class="textnote"><b>Để được phục vụ nhanh hơn,</b> hãy chọn thêm:</div>
    <div class="address">
      <label class="chonkm">
        <input type="radio" name="receive" value="ship" />
        &nbsp;Địa chỉ giao hàng</label
      >
    </div>
    <div class="supermarket">
      <label class="">
        <input type="radio" name="receive" value="directory" />
        &nbsp;Nhận tại siêu thị</label
      >
    </div>
    <receive-ship />
    <receive-directory />
    <span id="alepay-err" style="display: none"></span>
    <a
      class="cart-btt full-width"
      id="btncomplete"
      href="javascript:void(0)"
      style="display: block"
      >Thanh toán ngay</a
    >
  </div>
</template>
<script>
import ReceiveShip from "./ship/ReceiveShip";
import ReceiveDirectory from "./shop/ReceiveDirectory";

export default {
  components: {
    ReceiveShip,
    ReceiveDirectory,
  },
};
</script>
<style>
</style>