$(document).ready(function () {
    var hoTenErr = false;
    var soDienThoaiErr = false;
    var ngaySinhErr = false;
    var anhDaiDienErr = false;
    var gioiTinhErr = false;

    $("#hoTenInput").on("blur", function () {
        var giaTri = $(this).val().trim();
        var warningMessage = "";

        hoTenErr = false;

        if (giaTri == "")
            warningMessage = "Họ tên không được để trống";
        else if (!giaTri.match("([A-Z][a-zA-Z]+\\s?){2,}"))
            warningMessage = "Họ phải từ 2 từ trở lên, mỗi ký tự đầu phải viết hoa";
        else {
            hoTenErr = true;
            warningMessage = "*";
        }

        $("#hoTenWarning").text(warningMessage);
    });

    $("#dienThoaiInput").on("blur", function () {
        var giaTri = $(this).val().trim();
        var warningMessage = "";

        soDienThoaiErr = false;

        if (giaTri == "")
            warningMessage = "Số điện thoại không được để trống";
        else if (!giaTri.match("\\d{3}-\\d{6}"))
            warningMessage = "Số điện thoại phải có định dạng XXX-YYYYYY";
        else {
            warningMessage = "*";
            soDienThoaiErr = true;
        }

        $("#dienThoaiWarning").text(warningMessage);
    });

    $("#ngaySinhInput").on("blur", function () {
        var value = new Date($(this).val()).getFullYear();
        var tuoi = new Date().getFullYear() - value;
        
        var warningMessage = "";

        ngaySinhErr = false;

        if (isNaN(value))
            warningMessage = "Ngày sinh không được để trống";
        else if (tuoi < 15 || tuoi > 18)
            warningMessage = "Tuổi phải nằm từ 15 đến 18 tuổi";
        else {
            warningMessage = "*";
            ngaySinhErr = true;
        }

        $("#ngaySinhWarning").text(warningMessage);
    });

    $("#khoaHocSelector").on("change", function() {
        var giaTri = $(this).val();
        var display = $("#hocPhiDisplay");


        if (giaTri == "Khóa 2 tuần")
            display.val("5,000,000");
        else if (giaTri == "Khóa 4 tuần")
            display.val("8,000,000");
        else if (giaTri == "Khóa 6 tuần")
            display.val("9,000,000");

    });

    $("#anhDaiDienInput").on("blur", function() {
        var giaTri = $(this).val().trim();
        var warningMessage = ""

        anhDaiDienErr = false;

        if (giaTri == "")
            warningMessage = "Ảnh đại diện không được để trống";
        else if (!giaTri.match(".+\.(jpg|png|gif)"))
            warningMessage = "Ảnh đại diện phải kết thúc bằng .jpg, .png hoặc .gif";
        else {
            anhDaiDienErr = true;
            warningMessage = "*";
        }

        $("#anhDaiDienWarning").text(warningMessage);
    });

    $("#khoaHocSelector").change();

    $("[name='gioiTinh']").on("change", function() {
        var giaTri = $("[name='gioiTinh']:checked").val()
        var warningMessage = "";

        gioiTinhErr = false;

        if (giaTri === undefined)
            warningMessage = "Vui lòng chọn giới tính";
        else {
            gioiTinhErr = true;
            warningMessage = "*";
        }

        $("#gioiTinhWarning").text(warningMessage);
    });

    var index = 1;
    $("#submitBtn").on("click", function () {
        $("#hoTenInput").blur();
        $("#dienThoaiInput").blur();
        $("#ngaySinhInput").blur();
        $("#anhDaiDienInput").blur();   
        $("[name='gioiTinh']").change();

        if (hoTenErr && soDienThoaiErr && ngaySinhErr && anhDaiDienErr && gioiTinhErr) {
            var hoTen = $("#hoTenInput").val().trim();
            var soDienThoai = $("#dienThoaiInput").val().trim();
            var ngaySinh = $("#ngaySinhInput").val();
            var khoaHoc = $("#khoaHocSelector").val();
            var diaChi = $("#diaChiInput").val();
            var anhDaiDien = $("#anhDaiDienInput").val();
            var gioiTinh = $("[name='gioiTinh']:checked").val()
			var hocPhi = $("#hocPhiDisplay").val();


            var row = "<tr>" + 
            "<td>" + index++ + "</td>" +
			"<td>" + hoTen + "</td>" +
			"<td>" + gioiTinh + "</td>" +
			"<td>" + ngaySinh + "</td>" +
			"<td>" + diaChi + "</td>" +
			"<td>" + khoaHoc + "</td>" +
			"<td>" + hocPhi + "</td>" + 
            "</tr>"

            $("#danhSachTable tbody").append(row);

        }

    });







});

