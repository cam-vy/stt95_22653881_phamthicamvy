var so1 = document.getElementById('so1');
var so2 = document.getElementById('so2');
var tbSo1 = document.getElementById('tbSo1');
var tbSo2 = document.getElementById('tbSo2');
var kq = document.getElementById('kq');

function checkSo() {
    var check1;
    var check2;
    if (so1.value == '' || isNaN(so1.value)) {
        tbSo1.textContent = 'Chưa nhập số';
        check1 = false;
    } else {
        tbSo1.textContent = '(*)'
        check1 = true;
    }
    if (so2.value == '' || isNaN(so2.value)) {
        tbSo2.textContent = 'Chưa nhập số';
        check2 = false;
    } else {
        tbSo2.textContent = '(*)'
        check2 = true;
    }

    return check1 && check2;
}

document.getElementById('cong').addEventListener('click', function() {
    if (checkSo()) {
        var cong = Number(so1.value) + Number(so2.value);
        kq.value = cong;
    } else {
        kq.value = '';
        return;
    }
})

document.getElementById('tru').addEventListener('click', function() {
    if (checkSo()) {
        var tru = Number(so1.value) - Number(so2.value);
        kq.value = tru;
    } else {
        kq.value = '';
        return;
    }
})

document.getElementById('nhan').addEventListener('click', function() {
    if (checkSo()) {
        var nhan = Number(so1.value) * Number(so2.value);
        kq.value = nhan;
    } else {
        kq.value = '';
        return;
    }
})

document.getElementById('chia').addEventListener('click', function() {
    if (checkSo()) {
        if (Number(so2.value) == 0) {
            tbSo2.textContent = 'Phép chia số này phải khác 0';
            kq.value = '';
            return;
        }
        var chia = Number(so1.value) / Number(so2.value);
        kq.value = chia;
    } else {
        kq.value = '';
        return;
    }
})