document.getElementById('doiMau').addEventListener('click', function() {
    var list = document.querySelector('input[type=radio][name=css]:checked');
    var mau = document.getElementById('mau').value;
    var inp = document.getElementById('hoTen');
    var doanVan = document.getElementById('doanVan');

    if (!list) {
        alert('Vui lòng chọn một kiểu CSS');
        return;
    }

    if (list.value == 'background') {
        doanVan.style.backgroundColor = mau;
        inp.style.backgroundColor = mau;
    } else if (list.value == 'color') {
        doanVan.style.color = mau;
        inp.style.color = mau;
    }
});

document.getElementById('huyMau').addEventListener('click', function() {
    var inp = document.getElementById('hoTen');
    var doanVan = document.getElementById('doanVan');
    doanVan.style.backgroundColor = 'white';
    inp.style.backgroundColor = 'white';
    doanVan.style.color = "black";
    inp.style.color = "black";
});