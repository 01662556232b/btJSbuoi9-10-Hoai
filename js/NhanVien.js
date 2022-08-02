function NhanVien(maNV, tenNV, emailNV, passwordNV, ngaylamNV, LuongNV, chucvuNV, gioNV) {
   this.maNV = maNV;
   this.tenNV = tenNV;
   this.emailNV = emailNV;
   this.passwordNV = passwordNV;
   this.ngaylamNV = ngaylamNV;
   this.LuongNV = LuongNV;
   this.chucvuNV = chucvuNV;
   this.gioNV = gioNV;

   this.luong = 0;
   this.xeploai = "";

   this.luong = function () {
      if (this.chucvuNV == "Sếp") {
         this.tongluong = this.LuongNV * 3;
      } else if (this.chucvuNV == "Trưởng phòng") {
         this.tongluong = this.LuongNV * 2;
      } else if (this.chucvuNV == "Nhân viên") {
         this.tongluong = this.LuongNV;
      }
   }
   this.xeploai = function () {
      var loai = Number(this.gioNV);
      if (loai >= 192) {
         this.xeploai = "Xuất sắc";
      } else if (loai < 192 && loai >= 176) {
         this.xeploai = "Giỏi";
      } else if (loai < 176 && loai >= 160) {
         this.xeploai = "Khá";
      } else if (loai < 160) {
         this.xeploai = "Trung Bình";
      } else {
         this.xeploai = "";
      }
   }

}

