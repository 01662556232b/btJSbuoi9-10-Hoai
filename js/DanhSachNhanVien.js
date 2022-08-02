
function DanhSachNhanVien() {

    this.mangNV = [];
    //them
    this.themNV = function (nv) {
        this.mangNV.push(nv);
    }
    //vitri
    this.timViTri = function (ma) {
        var viTri = -1;
        this.mangNV.map(function (nv, index) {
            if (nv.maNV === ma) {
                viTri = index;
            }
        });
        return viTri;
    }
    //xoa
    this.xoaNV = function (ma) {
        var viTri = this.timViTri(ma);
        if (viTri > -1) {
            this.mangNV.splice(viTri, 1);
        }
    }
    //up
    this.capnhatNV = function (nv) {
        var ViTri = this.timViTri(nv.maNV);
        if (ViTri > -1) {
            dsnv.mangNV[ViTri] = nv;
        }
    }

}
//search
DanhSachNhanVien.prototype.timkiem = function (tukhoa) {
    var mangTK = [];
    var tukhoathuong = tukhoa.toLowerCase();
    this.mangNV.map(function (nv) {
        var NVxeploai = nv.xeploai.toLowerCase();
        var vitriTk = NVxeploai.indexOf(tukhoathuong);
        if (vitriTk > -1) {
            mangTK.push(nv);
        }
    })
    return mangTK;
}