<template>
  <div class="area_other" style="display: block">
    <div class="textnote"><b>Để được phục vụ nhanh hơn,</b> hãy chọn thêm:</div>
    <div class="address">
      <label class="chonkm">
        <input
          type="radio"
          name="receive"
          value="ship"
          v-model="receiveMethod"
        />
        &nbsp;Địa chỉ giao hàng</label
      >
    </div>
    <div class="supermarket">
      <label class="">
        <input
          type="radio"
          name="receive"
          value="directory"
          v-model="receiveMethod"
        />
        &nbsp;Nhận tại siêu thị</label
      >
    </div>
    <receive-ship :errors="errors" v-show="receiveMethod == 'ship'" />
    <receive-directory :errors="errors" v-show="receiveMethod == 'directory'" />
  </div>
</template>
<script>
import ReceiveShip from "./ship/ReceiveShip";
import ReceiveDirectory from "./shop/ReceiveDirectory";

export default {
  props: {
    errors: {
      type: Object,
      require: false,
    },
  },
  components: {
    ReceiveShip,
    ReceiveDirectory,
  },
  data() {
    return {
      receiveMethod: "ship",
    };
  },
};
</script>
<style>
</style>