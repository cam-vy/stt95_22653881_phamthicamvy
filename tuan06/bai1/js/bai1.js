var btnMSSV = document.getElementById('btnMSSV');

btnMSSV.addEventListener('click', function() {
    var text = window.prompt("Nhập mã số SV");
    document.getElementById('MSSV').innerHTML = text;
});

var btnHoTen = document.getElementById('btnHoTen');

btnHoTen.addEventListener('click', function() {
    var text = window.prompt("Nhập Họ và tên");
    document.getElementById('hoTen').innerHTML = text;
});

var btnLop = document.getElementById('btnLop');

btnLop.addEventListener('click', function() {
    var text = window.prompt("Nhập tên lớp");
    document.getElementById('lop').innerHTML = text;
});