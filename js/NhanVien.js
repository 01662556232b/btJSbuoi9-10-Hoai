/**
 * khai báo lớp đối tượng Nhanvien
 * + khai báo cac thuộc tính, phương pháp chung của các đối tượng sinh viên
 */
function NhanVien(maNV, tenNV, emailNV, passwordNV, ngaylamNV, LuongNV, chucvuNV, gioNV) {
   this.maNV = maNV;
   this.tenNV = tenNV;
   this.emailNV = emailNV;
   this.passwordNV = passwordNV;
   this.ngaylamNV = ngaylamNV;
   this.LuongNV = LuongNV;
   this.chucvuNV = chucvuNV;
   this.gioNV = gioNV;

   this.tongluong = 0;
   this.xeploai = "";
   // phương thức
   this.tongluong = function () {
      if (this.chucvuNV = "giám đốc") {
         this.tongluong = this.LuongNV * 3;
      } else if (this.chucvuNV = "Trưởng Phòng") {
         this.tongluong = this.LuongNV * 2;
      } else if (this.chucvuNV = "Nhân Viên") {
         this.tongluong = this.LuongNV;
      } else{
         this.tongluong = "";
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
      } else{
         this.xeploai = "";
      }
   }

}

