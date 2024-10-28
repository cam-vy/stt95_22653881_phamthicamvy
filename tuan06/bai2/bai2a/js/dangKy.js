var btnNhap = document.getElementById('btnNhap');

btnNhap.addEventListener("click", function() {
    var taiKhoan = document.getElementById('inpHoTen').value;
    var matKhau = document.getElementById('inpMatKhau').value;

    window.location.href = '../html/dangnhap.html?taiKhoan=' + encodeURIComponent(taiKhoan) + '&matKhau=' + encodeURIComponent(matKhau);
});