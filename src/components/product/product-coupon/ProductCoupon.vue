<template>
  <div class="boxcode">
    <input
      type="text"
      id="CouponCode"
      name="CouponCodeText"
      placeholder="Nhập mã giảm giá"
      maxlength="15"
    />
    <input
      type="tel"
      id="CouponPhone"
      name="CouponPhoneText"
      placeholder="Nhập số điện thoại"
      maxlength="11"
    />
    <button id="btncp">Áp dụng</button>
  </div>
</template>
<script>
export default {};
</script>
<style >
.boxcode input {
  display: block;
  border: 1px solid #d9d9d9;
  line-height: 20px;
  padding: 8px 0;
  color: #666;
  text-indent: 10px;
  width: 99%;
  border-radius: 2px;
  margin-top: 10px;
}
#btncp {
  display: block;
  border-radius: 2px;
  border: 0;
  background: #4a90e2;
  color: #fff;
  text-align: center;
  width: 110px;
  height: 38px;
  margin: 10px auto;
  cursor: pointer;
}
</style>