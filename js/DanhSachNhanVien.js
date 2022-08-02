
 function DanhSachNhanVien() {

    this.mangNV = [];

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
            dsnv.mangNV[ViTri] = nv;
        }
    }
    
}
DanhSachNhanVien.prototype.timkiem = function (tukhoa) {
    var mangTK = [];
    var tukhoathuong = tukhoa.toLowerCase();
    this.mangNV.map(function (nv) {
        var tenNVxeploai = nv.xeploai.toLowerCase();
        var vitriTk = tenNVxeploai.indexOf(tukhoathuong);
        if (vitriTk >-1){
           
            mangTK.push(nv);
        }
    })
    return mangTK;
}