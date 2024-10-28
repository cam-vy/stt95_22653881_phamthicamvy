var urlParams = new URLSearchParams(window.location.search);
var taiKhoan = urlParams.get('taiKhoan');
var matKhau = urlParams.get('matKhau');

var tk = document.getElementById('outpHoTen');
var mk = document.getElementById('ouptMatKhau');

tk.innerHTML = taiKhoan;
mk.innerHTML = matKhau;