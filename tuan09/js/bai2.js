$(document).ready(function () {
    var maTourErr = false;
    var ngayKhoiHanhErr = false;
    var giaTourErr = false;
    var anhDaiDienErr = false;
    var thoiGianErr = false;
    var hanhTrinhErr = false;

    $("#maTourInput").on("blur", function() {
        var value = $(this).val();
        var warningMessage = "";

        maTourErr = false;

        if (value == "")
            warningMessage = "Mã tour không trống";
        else if (!value.match("[A-Z]{3}-[A-Z]{3}-\\d{2}-\\d{4}"))
            warningMessage = "Mã tour không hợp lệ, phải là XXX-XXX-MM-YYYY, với X là điểm khởi hành và điểm đến";
        else {
            maTourErr = true;
            warningMessage = "*"
        }

        $("#maTourWarning").text(warningMessage);

    })

    $("#ngayKhoiHanhInput").on("blur", function() {
        var value = new Date($(this).val());
        var warningMessage = "";

        ngayKhoiHanhErr = false;

        if (isNaN(value.getTime()))
            warningMessage = "Ngày khởi hành không hợp lệ";
        else if (Math.round((value - new Date())/ (1000 * 3600 * 24)) < 30)
            warningMessage = "Ngày khởi hành phải sau ngày hiện tại 30 ngày";
        else {
            ngayKhoiHanhErr = true;
            warningMessage = "*";
        }

        $("#ngayKhoiHanhWarning").text(warningMessage);
        
    });

    $("#giaTourInput").on("blur", function() {
        var value = $(this).val();
        var warningMessage = "";

        giaTourErr = false;

        if (isNaN(value) || value == "")
            warningMessage = "Giá tour không hợp lệ";
        else {
            warningMessage = "*"
            giaTourErr = true
        }

        $("#giaTourWarning").text(warningMessage);
    });

    $("#anhDaiDienInput").on("change", validate);

    function validate() {
        var fileInput = $("#anhDaiDienInput").prop('files')[0];
        var regex = /\.(jpg|jpeg|gif|png)$/i;
        var warningMessage = "";

        anhDaiDienErr = false;

        if (!fileInput)
            warningMessage = "Ảnh đại diện không được trống";
        else if (!regex.test(fileInput.name))
            warningMessage = "File phải chứa jpg, jpeg, gif hoặc png";
        else {
            anhDaiDienErr = true;
            warningMessage = "*";
        }

        $("#anhDaiDienWarning").text(warningMessage);
    }


    $("#thoiGianInput").on("blur", function() {
        var value = $(this).val();
        var warningMessage = "";

        thoiGianErr = false;

        if (value == "")
            warningMessage = "Thời gian không được để trống";
        else {
            warningMessage = "*";
            thoiGianErr = true;
        }

        $("#thoiGianWarning").text(warningMessage);

    });

    $("#hanhTrinhInput").on("blur", function() {
        var value = $(this).val();
        var warningMessage = "";

        hanhTrinhErr = false;

        if (value == "")
            warningMessage = "Thời gian không được để trống";
        else {
            warningMessage = "*";
            hanhTrinhErr = true;
        }

        $("#hanhTrinhWarning").text(warningMessage);

    });


    var index = 1;
    $("#submitBtn").on("click", function() {
        $("#maTourInput").blur();
        $("#hanhTrinhInput").blur();
        $("#thoiGianInput").blur();
        validate();
        $("#giaTourInput").blur();
        $("#ngayKhoiHanhInput").blur();

        
        if (maTourErr && ngayKhoiHanhErr && giaTourErr &&
            anhDaiDienErr && thoiGianErr && hanhTrinhErr) {
                var maTour = $("#maTourInput").val();
                var hanhTrinh = $("#hanhTrinhInput").val();
                var thoiGian = $("#thoiGianInput").val();
                var anhDaiDien = $("#anhDaiDienInput").prop('files')[0].name;
                var giaTour = $("#giaTourInput").val();
                var ngayKhoiHanh = $("#ngayKhoiHanhInput").val();

                var row = "<tr>" +
                "<td>" + index++ + "</td>" +
                "<td>" + maTour + "</td>" +
                "<td>" + hanhTrinh + "</td>" +
                "<td>" + ngayKhoiHanh + "</td>" +
                "<td>" + thoiGian + "</td>" +
                "<td>" + giaTour + "</td>" +
                "<td>" + anhDaiDien + "</td>" +
                "</tr>";

                $("#danhSachTable tbody").append(row);

        }
    });






});

