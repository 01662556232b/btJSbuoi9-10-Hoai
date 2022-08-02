/**+ lưu trữ nhiều đối tượng nv (mảng nhan viên)
 * + thêm NV( thêm phần tử mới cho mảng)
 * + xoa, sủa ( xõa, cập nhật phần tử mới cho mảng)
 * + tìm kiems nv theo điểu kiện
 */

function DanhSachNhanVien() {
    //thuộc tính
    // mảng các đốitượng sinh viên
    this.mangNV = [];
    //phương thức
    //truyền tham số là đối tưởng sv
    this.themNV = function (nv) {
        this.mangNV.push(nv);
        
    }
    this.timViTri = function (ma) {
        var viTri = -1;
        this.mangNV.map(function (nv, index) {
            if(nv.maNV === ma){
                viTri = index;
            }
        });
        return viTri;
    }
    this.xoaNV = function (ma) {
        var viTri = this.timViTri(ma);
        if(viTri > -1){
           this.mangNV.splice(viTri, 1);
        }
    }
    this.capnhatNV = function (nv) {
        var ViTri = this.timViTri(nv.maNV);
        if(ViTri > -1){
            dsnv.mangNV[ViTri] = nv
        }
    }
    
}