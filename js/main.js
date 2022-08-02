/**+ lưu trữ nhiều đối tượng sv (mảng sinh viên)
 * + thêm SV( thêm phần tử mới cho mảng)
 * + xoa, sủa ( xóa, cập nhật phần tử mới cho mảng)
 * + tìm kiems sv theo điểu kiện
 */
var dsnv = new DanhSachNhanVien();
var validation = new Validation();
function getELE(id) {
    return document.getElementById(id);
}
function themNhanVien() {
    var maNV = getELE("tknv").value;
    var tenNV = getELE("name").value;
    var emailNV = getELE("email").value;
    var passwordNV = getELE("password").value;
    var ngaylamNV = getELE("datepicker").value;
    var LuongNV = getELE("luongCB").value;
    var chucvuNV = getELE("chucvu").value;
    var gioNV = getELE("gioLam").value;


    console.log(maNV, tenNV, emailNV, passwordNV, ngaylamNV, LuongNV, chucvuNV, gioNV);

    var isValid = true;
    // kiểm tra maNV (KIểm tra rổng, kiểm tra không được trùng)
    isValid &= validation.checkEmpty(maNV, "tbTKNV", "Chố này không được để trống") && validation.checkID(maNV, "tbTKNV", "mã không được trùng", dsnv.mangNV);
    // kiểm tra tenNV (KIểm tra rổng, kiểm tra ký tự chữ)
    isValid &= validation.checkEmpty(tenNV, "tbTen", "Chố này không được để trống") && validation.checkname(tenNV, "tbTen", "Tên nhân viên phải là chữ");
    // kiểm tra emailNV (KIểm tra rổng, kiểm tra formmat gmail)
    isValid &= validation.checkEmpty(emailNV, "tbEmail", "Chố này không được để trống") && validation.checkemail(emailNV, "tbEmail", "Email phải đúng định dạng");
    // kiểm tra passwordNV (KIểm tra rổng, kiểm tra formmat pass)
    isValid &= validation.checkEmpty(passwordNV, "tbMatKhau", "Chố này không được để trống") && validation.checkpassword(passwordNV, "tbMatKhau", "từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)");
    // kiểm tra LuongNV (KIểm tra rổng, kiểm tra formmat -số, 0<=10)
    isValid &= validation.checkEmpty(LuongNV, "tbLuongCB", "Chố này không được để trống") && validation.checkscore(LuongNV, "tbLuongCB", "không dấu âm, nhập 1000000 - 20000000");
    // kiểm tra chucvuNV (người dùng có chọn lựa chọn cái đầu tiên )
    isValid &= validation.checkdropdown("chucvu", "tbChucVu", "Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)");


    if (isValid) {
        var nv = new NhanVien(maNV, tenNV, emailNV, passwordNV, ngaylamNV, Number(LuongNV), chucvuNV, Number(gioNV));
        nv.tongluong();
        nv.xeploai();
        console.log(nv);

        dsnv.themNV(nv);
        console.log(dsnv.mangNV);
        hienthiDS(dsnv.mangNV);
        setlocalstorage();
        resetform();
    }

}
function setlocalstorage() {

    localStorage.setItem("NhanVien", JSON.stringify(dsnv.mangNV));
}
function getlocalstorage() {

    if (localStorage.getItem("NhanVien") != undefined) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("NhanVien"));
    }
    hienthiDS(dsnv.mangNV);
}
getlocalstorage();
function hienthiDS(mangNV) {
    
    var content = "";
    mangNV.map(function (nv) {
        
        content += ` 
            <tr>
                <td>${nv.maNV}</td>
                <td>${nv.tenNV}</td>
                <td>${nv.emailNV}</td>
                <td>${nv.ngaylamNV}</td>
                <td>${nv.chucvuNV}</td>
                <td>${nv.tongluong}</td>
                <td>${nv.xeploai}</td>
                <td>
                    <button data-toggle="modal" data-target="#myModal" class="btn btn-info " onclick="xemChitiet('${nv.maNV}')">Xem</button>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nv.maNV}')">Xõa</button>
                </td>
            </tr>
        `;

    });
    
    getELE("tableDanhSach").innerHTML = content;
}
function xoaNhanVien(ma) {
    
    dsnv.xoaNV(ma);
    hienthiDS(dsnv.mangNV);
    setlocalstorage(dsnv.mangNV);
}
function xemChitiet(ma) {
    
    var viTri = dsnv.timViTri(ma);
    if (viTri > -1) {
      
        var nvTim = dsnv.mangNV[viTri];
        console.log(nvTim);

        getELE("tknv").value = nvTim.maNV;
        getELE("tknv").disabled = true;
        getELE("name").value = nvTim.tenNV;
        getELE("email").value = nvTim.emailNV;
        getELE("password").value = nvTim.passwordNV;
        getELE("datepicker").value = nvTim.ngaylamNV;
        getELE("luongCB").value = nvTim.LuongNV;
        getELE("chucvu").value = nvTim.chucvuNV;
        getELE("gioLam").value = nvTim.gioNV;

    }
}
function capnhatNhanVien() {
    var maNV = getELE("tknv").value;
    var tenNV = getELE("name").value;
    var emailNV = getELE("email").value;
    var passwordNV = getELE("password").value;
    var ngaylamNV = getELE("datepicker").value;
    var LuongNV = getELE("luongCB").value;
    var chucvuNV = getELE("chucvu").value;
    var gioNV = getELE("gioLam").value;


    console.log(maNV, tenNV, emailNV, passwordNV, ngaylamNV, LuongNV, chucvuNV, gioNV);

    var nv = new NhanVien(maNV, tenNV, emailNV, passwordNV, ngaylamNV, Number(LuongNV), chucvuNV, Number(gioNV));
    nv.tongluong();
    nv.xeploai();
    console.log(nv);

    dsnv.capnhatNV(nv);
    hienthiDS(dsnv.mangNV);
    setlocalstorage(dsnv.mangNV);
    resetform();
}
function resetform() {

    getELE("formQLNV").reset();
    getELE("tknv").disabled = false;
}

