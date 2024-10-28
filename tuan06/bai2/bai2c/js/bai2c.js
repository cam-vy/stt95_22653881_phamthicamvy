document.getElementById('btnChon').addEventListener('click', function() {
    var list = document.querySelectorAll('input[type=checkbox][name=cafe]');

    var check = [];

    // for (var i = 0; i < list.length; i++) {
    //     var checkbox = list[i];
    //     if (checkbox.checked) {
    //         check.push(checkbox.value);
    //     }
    // }
    for (var tmp of list) {
        if (tmp.checked) {
            check.push(tmp.value);
        }
    }

    if (check.length == 0) {
        document.getElementById('tb').textContent = 'Hãy chọn loại cafe';
        return;
    }

    document.getElementById('tb').textContent = check.join(", ");
});