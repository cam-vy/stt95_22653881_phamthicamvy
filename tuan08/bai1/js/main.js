$(document).ready(function() {
    $("#tenDangNhap").on("input", function() {
        var regex = /^[A-Z][\w@#&$]*$/;
        var tdn = $(this).val();
        if (!regex.test(tdn)) {
            $("#tbTenDangNhap").text("*Tên đăng nhập bắt đầu bằng chữ in hoa.");
            $("#tbTenDangNhap").css({ "color": "red" });
        } else {
            $("#tbTenDangNhap").text("Tên đăng nhập hợp lệ");
            $("#tbTenDangNhap").css({ "color": "green" });
        }
    });

    $("#matKhau").on("input", function() {
        var regex = /(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/;
        var mk = $(this).val();
        var nlmk = $("#nhapLaiMK");
        if (!regex.test(mk)) {
            $("#tbMatKhau").text("*Mật khẩu có ít nhất một kí số, 1 kí tự in hoa, 1 kí tự đặc biệt.");
            $("#tbMatKhau").css({ "color": "red" });
            $("#tbNhapLaiMK").text("*Xác nhận mật khẩu phải trùng với mật khẩu");
            $("#tbNhapLaiMK").css({ "color": "red" });
            nlmk.val("");
            nlmk.attr("disabled", true);
        } else {
            $("#tbMatKhau").text("Mật khẩu hợp lệ");
            $("#tbMatKhau").css({ "color": "green" });
            nlmk.attr("disabled", false);
        }
    });

    $("#nhapLaiMK").on("input", function() {
        var regex = /(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/;
        var nlmk = $(this).val();
        var mk = $("#matKhau").val();
        if (nlmk != mk) {
            $("#tbNhapLaiMK").text("*Xác nhận mật khẩu phải trùng với mật khẩu");
            $("#tbNhapLaiMK").css({ "color": "red" });
        } else {
            $("#tbNhapLaiMK").text("Xác nhận mật khẩu hợp lệ");
            $("#tbNhapLaiMK").css({ "color": "green" });
        }
    });

    $("#hoVaTen").on("input", function() {
        var regex = /^[A-ZĐÀ-Ỹ][A-ZĐÀ-Ỹ a-zđà-ỹ]* [A-ZĐÀ-Ỹ][A-ZĐÀ-Ỹ a-zđà-ỹ]*$/;
        var hovaten = $(this).val();
        var tbHoVaTen = $("#tbHoVaTen");

        if (!regex.test(hovaten)) {
            tbHoVaTen.text('Họ và tên không hợp lệ');
            tbHoVaTen.css({ "color": "red" });
        } else {
            tbHoVaTen.text('Họ và tên hợp lệ');
            tbHoVaTen.css({ "color": "green" });
        }
    });

    $('#ngaySinh').on("change", function() {
        var ngaySinh = $(this).val();
        var getNgaySinh = new Date(ngaySinh);

        var year = getNgaySinh.getFullYear();

        if (2024 - year >= 18) {
            $('#tbNgaySinh').text('Ngày sinh hợp lệ');
            $('#tbNgaySinh').css({
                "color": "green"
            });
        } else {
            $('#tbNgaySinh').css({
                "color": "red"
            });
            $('#tbNgaySinh').text('Ngày sinh hợp lệ');
        }
    })

    $('#gtNam').click(function() {
        var getGT = $(this);
        if (getGT.is(':checked')) {
            $('#tbGioiTinh').text('Giới tính hợp lệ');
            $('#tbGioiTinh').css({
                "color": "green"
            });
        }
    });

    $('#gtNu').click(function() {
        var getGT = $(this);
        if (getGT.is(':checked')) {
            $('#tbGioiTinh').text('Giới tính hợp lệ');
            $('#tbGioiTinh').css({
                "color": "green"
            });
        }
    });

    $('#dienThoai').on("input", function() {
        var dienThoai = $(this).val();
        var dienThoaiRegex = /^(09||03||07||06||05||04)\d{8}$/;

        if (!dienThoaiRegex.test(dienThoai)) {
            $('#tbDienThoai').text('Điện thoại phải bắt đầu 09,03,07,06,05,04 và chứa 10 số');
            $('#tbDienThoai').css({
                "color": "red"
            });
        } else {
            $('#tbDienThoai').text('Điện thoại hợp lệ');
            $('#tbDienThoai').css({
                "color": "green"
            });
        }
    });


    $('#email').on("input", function() {
        var email = $(this).val();
        var regexEmail = /\w+@(gmail||yahoo)\.com/;

        if (!regexEmail.test(email)) {
            $('#tbEmail').text('Vui lòng đúng định dạng email');
            $('#tbEmail').css({
                "color": "red"
            });
        } else {
            $('#tbEmail').text('Email hợp lệ');
            $('#tbEmail').css({
                "color": "green"
            });
        }
    });

    $('#diaChi').on("input", function() {
        var diaChi = $(this).val();

        if (diaChi == "") {
            $('#tbDiaChi').text('Địa chỉ không được bỏ trống');
            $('#tbDiaChi').css({
                "color": "red"
            });
        } else {
            $('#tbDiaChi').text('Địa chỉ hợp lệ');
            $('#tbDiaChi').css({
                "color": "green"
            });
        }
    });
});