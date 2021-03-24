<template>
  <div class="area_market" style="display: none">
    <!--#region Tỉnh thành-->
    <div class="citydis">
      <div class="city"><span data-id="3">Hồ Chí Minh</span></div>
      <div class="listcity layer" style="display: none">
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
            <a class="n1" data-stock="1" data-value="3" data-name="Hồ Chí Minh"
              >Hồ Chí Minh</a
            ><a class="n1" data-stock="1" data-value="5" data-name="Hà Nội"
              >Hà Nội</a
            ><a class="n1" data-stock="1" data-value="9" data-name="Đà Nẵng"
              >Đà Nẵng</a
            ><a class="n1" data-stock="1" data-value="82" data-name="An Giang"
              >An Giang</a
            ><a
              class="n1"
              data-stock="1"
              data-value="102"
              data-name="Bà Rịa - Vũng Tàu"
              >Bà Rịa - Vũng Tàu</a
            ><a class="n1" data-stock="1" data-value="103" data-name="Bắc Giang"
              >Bắc Giang</a
            ><a class="n1" data-stock="1" data-value="104" data-name="Bắc Kạn"
              >Bắc Kạn</a
            ><a class="n1" data-stock="1" data-value="105" data-name="Bạc Liêu"
              >Bạc Liêu</a
            ><a class="n1" data-stock="1" data-value="106" data-name="Bắc Ninh"
              >Bắc Ninh</a
            ><a class="n1" data-stock="1" data-value="107" data-name="Bến Tre"
              >Bến Tre</a
            ><a class="n1" data-stock="1" data-value="108" data-name="Bình Định"
              >Bình Định</a
            ><a
              class="n1"
              data-stock="1"
              data-value="148"
              data-name="Thái Nguyên"
              >Thái Nguyên</a
            ><a class="n1" data-stock="1" data-value="149" data-name="Thanh Hóa"
              >Thanh Hóa</a
            >
          </aside>
          <aside>
            <a
              class="n1"
              data-stock="1"
              data-value="150"
              data-name="Thừa Thiên Huế"
              >Thừa Thiên Huế</a
            ><a
              class="n1"
              data-stock="1"
              data-value="151"
              data-name="Tiền Giang"
              >Tiền Giang</a
            ><a class="n1" data-stock="1" data-value="152" data-name="Trà Vinh"
              >Trà Vinh</a
            ><a
              class="n1"
              data-stock="1"
              data-value="153"
              data-name="Tuyên Quang"
              >Tuyên Quang</a
            ><a class="n1" data-stock="1" data-value="154" data-name="Vĩnh Long"
              >Vĩnh Long</a
            ><a class="n1" data-stock="1" data-value="155" data-name="Vĩnh Phúc"
              >Vĩnh Phúc</a
            ><a class="n0" data-stock="0" data-value="156" data-name="Yên Bái"
              >Yên Bái</a
            >
          </aside>
        </div>
      </div>
      <!--#endregion-->
      <!--#region Quận huyện-->
      <div class="dist"><span data-id="0">Chọn quận, huyện</span></div>
      <div class="listdist layer" style="display: none">
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
            <a data-value="16" data-name="Quận 1">Quận 1</a
            ><a data-value="17" data-name="Quận 2">Quận 2</a
            ><a data-value="18" data-name="Quận 3">Quận 3</a
            ><a data-value="19" data-name="Quận 4">Quận 4</a
            ><a data-value="20" data-name="Quận 5">Quận 5</a
            ><a data-value="21" data-name="Quận 6">Quận 6</a
            ><a data-value="22" data-name="Quận 7">Quận 7</a
            ><a data-value="23" data-name="Quận 8">Quận 8</a
            ><a data-value="24" data-name="Quận 9">Quận 9</a
            ><a data-value="25" data-name="Quận 10">Quận 10</a
            ><a data-value="26" data-name="Quận 11">Quận 11</a
            ><a data-value="27" data-name="Quận 12">Quận 12</a>
          </aside>
          <aside>
            <a data-value="30" data-name="Quận Tân Bình">Quận Tân Bình</a
            ><a data-value="33" data-name="Quận Tân Phú">Quận Tân Phú</a
            ><a data-value="52" data-name="Quận Phú Nhuận">Quận Phú Nhuận</a
            ><a data-value="29" data-name="Quận Gò Vấp">Quận Gò Vấp</a
            ><a data-value="51" data-name="Quận Bình Thạnh">Quận Bình Thạnh</a
            ><a data-value="28" data-name="Quận Thủ Đức">Quận Thủ Đức</a
            ><a data-value="31" data-name="Quận Bình Tân">Quận Bình Tân</a
            ><a data-value="32" data-name="Huyện Hóc Môn">Huyện Hóc Môn</a
            ><a data-value="34" data-name="Huyện Củ Chi">Huyện Củ Chi</a
            ><a data-value="35" data-name="Huyện Nhà Bè">Huyện Nhà Bè</a
            ><a data-value="36" data-name="Huyện Bình Chánh">Huyện Bình Chánh</a
            ><a data-value="61" data-name="Huyện Cần Giờ">Huyện Cần Giờ</a>
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
export default {};
</script>
<style>
</style>