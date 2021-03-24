<template>
  <div class="area_address" style="display: block">
    <div class="citydis">
      <!--#region Tỉnh thành-->
      <div class="city">
        <span>Hồ Chí Minh</span>
      </div>
      <div class="listcity layer" style="display: none">
        <div class="searchlocal">
          <div>
            <input
              type="text"
              name="txtSearch"
              placeholder="Nhập tỉnh, thành để tìm nhanh"
            />
            <!-- <button type="button" class="submit">
              <i class="iconmobile-search"></i>
            </button> -->
          </div>
        </div>
        <div class="scroll">
          <aside>
            <a data-stock="1" data-value="3" data-name="Hồ Chí Minh"
              >Hồ Chí Minh</a
            ><a data-stock="1" data-value="5" data-name="Hà Nội">Hà Nội</a
            ><a data-stock="1" data-value="9" data-name="Đà Nẵng">Đà Nẵng</a
            ><a data-stock="1" data-value="82" data-name="An Giang">An Giang</a
            ><a data-stock="1" data-value="102" data-name="Bà Rịa - Vũng Tàu"
              >Bà Rịa - Vũng Tàu</a
            ><a data-stock="1" data-value="103" data-name="Bắc Giang"
              >Bắc Giang</a
            ><a data-stock="1" data-value="104" data-name="Bắc Kạn">Bắc Kạn</a
            ><a data-stock="1" data-value="105" data-name="Bạc Liêu">Bạc Liêu</a
            ><a data-stock="1" data-value="106" data-name="Bắc Ninh">Bắc Ninh</a
            ><a data-stock="1" data-value="107" data-name="Bến Tre">Bến Tre</a
            ><a data-stock="1" data-value="108" data-name="Bình Định"
              >Bình Định</a
            ><a data-stock="1" data-value="109" data-name="Bình Dương"
              >Bình Dương</a
            ><a data-stock="1" data-value="110" data-name="Bình Phước"
              >Bình Phước</a
            ><a data-stock="1" data-value="111" data-name="Bình Thuận"
              >Bình Thuận</a
            ><a data-stock="1" data-value="81" data-name="Cà Mau">Cà Mau</a
            ><a data-stock="1" data-value="7" data-name="Cần Thơ">Cần Thơ</a
            ><a data-stock="1" data-value="112" data-name="Cao Bằng">Cao Bằng</a
            ><a data-stock="1" data-value="6" data-name="Đắk Lắk">Đắk Lắk</a
            ><a data-stock="1" data-value="113" data-name="Đắk Nông">Đắk Nông</a
            ><a data-stock="1" data-value="114" data-name="Điện Biên"
              >Điện Biên</a
            ><a data-stock="1" data-value="8" data-name="Đồng Nai">Đồng Nai</a
            ><a data-stock="1" data-value="115" data-name="Đồng Tháp"
              >Đồng Tháp</a
            ><a data-stock="1" data-value="116" data-name="Gia Lai">Gia Lai</a
            ><a data-stock="1" data-value="117" data-name="Hà Giang">Hà Giang</a
            ><a data-stock="1" data-value="118" data-name="Hà Nam">Hà Nam</a
            ><a data-stock="1" data-value="120" data-name="Hà Tĩnh">Hà Tĩnh</a
            ><a data-stock="1" data-value="121" data-name="Hải Dương"
              >Hải Dương</a
            ><a data-stock="1" data-value="101" data-name="Hải Phòng"
              >Hải Phòng</a
            ><a data-stock="1" data-value="122" data-name="Hậu Giang"
              >Hậu Giang</a
            ><a data-stock="1" data-value="123" data-name="Hòa Bình">Hòa Bình</a
            ><a data-stock="1" data-value="124" data-name="Hưng Yên"
              >Hưng Yên</a
            >
          </aside>
          <aside>
            <a data-stock="1" data-value="125" data-name="Khánh Hòa"
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
            ><a data-stock="1" data-value="156" data-name="Yên Bái">Yên Bái</a>
          </aside>
        </div>
      </div>
      <!--#region Quận huyện-->
      <div class="dist"><span data-id="-1">Chọn quận, huyện</span></div>
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
      <!--#region Phường xã-->
      <div class="ward"><span data-id="-1">Chọn phường, xã</span></div>
      <div class="listward layer" style="display: none">
        <div class="searchlocal">
          <div>
            <input
              name="txtSearch"
              type="text"
              placeholder="Nhập phường, xã để tìm nhanh"
            />
            <button type="submit" class="submit">
              <i class="iconmobile-search"></i>
            </button>
          </div>
        </div>
        <div class="scroll">
          <aside>
            <a data-lat="10.782745" data-lng="106.704617" data-value="10109"
              >Phường Bến Nghé</a
            ><a data-lat="10.770046" data-lng="106.691385" data-value="10110"
              >Phường Bến Thành</a
            ><a data-lat="10.759624" data-lng="106.691878" data-value="10111"
              >Phường Cầu Kho</a
            ><a data-lat="10.765502" data-lng="106.697096" data-value="10112"
              >Phường Cầu Ông Lãnh</a
            ><a data-lat="10.762179" data-lng="106.691518" data-value="10113"
              >Phường Cô Giang</a
            >
          </aside>
          <aside>
            <a data-lat="10.788858" data-lng="106.699782" data-value="10114"
              >Phường Đa Kao</a
            ><a data-lat="10.765733" data-lng="106.687967" data-value="10115"
              >Phường Nguyễn Cư Trinh</a
            ><a data-lat="10.768956" data-lng="106.700338" data-value="10116"
              >Phường Nguyễn Thái Bình</a
            ><a data-lat="10.767892" data-lng="106.693835" data-value="10117"
              >Phường Phạm Ngũ Lão</a
            ><a data-lat="10.79142" data-lng="106.688996" data-value="10118"
              >Phường Tân Định</a
            >
          </aside>
        </div>
      </div>
      <input
        type="text"
        placeholder="Số nhà, tên đường"
        id="BillingAddress_Address"
        name="BillingAddress.Address"
        maxlength="200"
        class="ShipAtHome homenumber saveinfo"
        value=""
      />
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
    <input
      id="BillingAddress_ProvinceId"
      name="BillingAddress.ProvinceId"
      type="hidden"
      value="3"
    />
    <input
      id="BillingAddress_DistictId"
      name="BillingAddress.DistictId"
      type="hidden"
      value=""
    />
    <input
      id="BillingAddress_WardId"
      name="BillingAddress.WardId"
      type="hidden"
      value="0"
    />
    <input
      id="BillingAddress_ProvinceName"
      name="BillingAddress.ProvinceName"
      type="hidden"
      value="Hồ Chí Minh"
    />
    <input
      id="BillingAddress_DistictName"
      name="BillingAddress.DistictName"
      type="hidden"
      value=""
    />
    <input
      id="BillingAddress_WardName"
      name="BillingAddress.WardName"
      type="hidden"
      value=""
    />
    <input id="IsStockHome" name="IsStockHome" type="hidden" value="true" />
    <input id="IsStock" name="IsStock" type="hidden" value="true" />

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
export default {};
</script>
<style>
</style>