

var dsnv = new DanhSachNhanVien();
var validation = new Validation();

function getELE(id) {
    return document.getElementById(id);
}



function setLocalStorage() {
    localStorage.setItem("QuanlyNhanVien", JSON.stringify(dsnv.mangNV));
}

function getlocalStorage() {
    if (localStorage.getItem("QuanlyNhanVien") != undefined) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("QuanlyNhanVien"));

    }
    hienThiDS(dsnv.mangNV);
}
getlocalStorage();



function themNhanVien() {
    var manv = getELE("tknv").value;
    var tenNV = getELE("name").value;
    var email = getELE("email").value;
    var password = getELE("password").value;
    var ngaylam = getELE("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucvu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    var isValid = true;
    isValid &= validation.checkEmpty(manv,"tbTKNV","không được đẻ trống")
    && validation.checkID(manv,"tbTKNV","ma không được trùng",dsnv.mangNV);

    isValid &= validation.checkEmpty(tenNV, "tbTen", "không được để trống")
    && validation.checkName(tenNV, "tbTen", "Tên chỉ được chứa ký tự chữ");
    
    isValid &= validation.checkEmpty(email, "tbEmail", " không được để trống")
    && validation.checkEmail(email, "tbEmail", "Email chưa đúng định dạng");

    isValid &= validation.checkEmpty(luongCB, "tbLuongCB", "lương cơ bảng không được để trống")
    && validation.checkLuong(luongCB, "tbLuongCB", "lương cơ bảng chưa đúng định dạng");

    isValid &= validation.checkEmpty(password, "tbMatKhau", "Pass nv không được để trống")
    && validation.checkPass(password, "tbMatKhau", "Pass cần ít nhất 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt, độ dài từ 6-8 ký tự");

    isValid &= validation.checkEmpty(gioLam, "tbGiolam", "giờ làm không được để trống")
    && validation.checkgio(gioLam, "tbGiolam", "giờ làm chưa đúng định dạng");

    isValid &= validation.checkDropDown("chucvu", "tbChucVu", "chức vụ chưa được chọn");

   isValid &=validation.checkEmpty(ngaylam, "tbNgay", "ngày làm không được để trống") &&
   validation.checkngay(ngaylam, "tbNgay","ngày  chưa đúng đinh dạng dd/mm/yyyy")

    if (isValid) {
        var nv = new NhanVien(manv, tenNV, email, password, ngaylam, luongCB, chucvu, gioLam);

        nv.TinhLuong();
        nv.XepLoaiNV()
        dsnv.themNV(nv);
        hienThiDS(dsnv.mangNV);
        setLocalStorage();
        resetForm();
    }



}



function hienThiDS(mangNV) {
    var content = "";
    mangNV.map(function (nv, index) {
        content += `
        <tr>
            <td>${nv.manv}</td>
            <td>${nv.tenNV}</td>
            <td>${nv.email}</td>
            <td>${nv.ngaylam}</td>
            <td>${nv.chucvu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.xepLoai}</td>
            <td>
            <button data-toggle="modal" data-target="#myModal" class="btn btn-info" onclick="xemChiTiec('${nv.manv}')">Xem</button>
            <button  class="btn btn-danger" onclick="xoaNhanVien('${nv.manv}')">Xoá</button>
            </td>
        </tr>
        `;
    })
    // console.log(content)
    getELE("tableDanhSach").innerHTML = content;
}


function xoaNhanVien(tknv) {
    // console.log(tknv)
    dsnv.Xoa(tknv)
    hienThiDS(dsnv.mangNV);
    setLocalStorage(dsnv.mangNV);
}


function xemChiTiec(tknv) {
    var viTri = dsnv.viTriNhanVien(tknv);
    if (viTri > -1) {
        var nvCanTim = dsnv.mangNV[viTri];

        getELE("tknv").value = nvCanTim.manv;
        getELE("tknv").disabled = true;

        getELE("name").value = nvCanTim.tenNV;
        getELE("email").value = nvCanTim.email;
        getELE("password").value = nvCanTim.password;
        getELE("datepicker").value = nvCanTim.ngaylam;
        getELE("luongCB").value = nvCanTim.luongCB;
        getELE("chucvu").value = nvCanTim.chucvu;
        getELE("gioLam").value = nvCanTim.gioLam;
    }
}


function capNhatNhanVien() {
    var manv = getELE("tknv").value;
    var tenNV = getELE("name").value;
    var email = getELE("email").value;
    var password = getELE("password").value;
    var ngaylam = getELE("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucvu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    var nv = new NhanVien(manv, tenNV, email, password, ngaylam, luongCB, chucvu, gioLam);
    nv.TinhLuong();

    nv.XepLoaiNV();
    console.log(nv)
    dsnv.capNhat(nv);
    console.log(dsnv.mangNV);
    hienThiDS(dsnv.mangNV);
    
    setLocalStorage(dsnv.mangNV);
    resetForm();
}


function resetForm() {
    getELE("formNV").reset();   
    getELE("tknv").disabled = false;
}

function timTheoLoai (){
    tuKhoa = getELE("searchName").value;
    var mangTk = dsnv.timkiem(tuKhoa.trim());

    hienThiDS(mangTk);
    
}
getELE("btnTimNV").onclick = timTheoLoai
getELE("searchName").onkeyup =timTheoLoai