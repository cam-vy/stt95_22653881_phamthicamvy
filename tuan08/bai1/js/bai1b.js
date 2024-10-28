$(document).ready(function() {

    $("#hoInput").on("input", function() {
        var giaTri = $(this).val().trim();
        var warningMessage = "";
        var regex = /^[A-Z][a-zA-Z]*$/;

        if (giaTri == "")
            warningMessage = "Họ không được để trống";
        else if (!regex.test(giaTri))
            warningMessage = "Họ chữ cái đầu phải viết hoa";
        else
            warningMessage = "";

        $("#hoWarning").text(warningMessage);
    });

    $("#tenInput").on("input", function() {
        var giaTri = $(this).val().trim();
        var warningMessage = "";
        var regex = /^[A-Z][a-zA-Z]*$/;

        if (giaTri == "")
            warningMessage = "Tên không được để trống";
        else if (!regex.test(giaTri))
            warningMessage = "Tên chữ cái đầu phải viết hoa";
        else
            warningMessage = "";

        $("#tenWarning").text(warningMessage);
    });

    $("#emailInput").on("input", function() {
        var giaTri = $(this).val().trim();
        var warningMessage = "";
        var regex = /^\w+@iuh.edu.vn$/;

        if (giaTri == "")
            warningMessage = "Email không được để trống";
        else if (!regex.test(giaTri))
            warningMessage = "Email phải có định dạng <email>@iuh.edu.vn";
        else
            warningMessage = "";

        $("#emailWarning").text(warningMessage);
    });

    $("#vEmailInput").on("input", function() {
        var giaTri = $(this).val().trim();
        var warningMessage = "";

        if (giaTri == "")
            warningMessage = "Email xác nhận không được để trống";
        else if (giaTri != $("#emailInput").val().trim())
            warningMessage = "Email xác nhận không đúng";
        else
            warningMessage = "";

        $("#vEmailWarning").text(warningMessage);
    });

    $("#passwordInput").on("input", function() {
        var giaTri = $(this).val().trim();
        var warningMessage = "";
        var regex = /^[A-Z0-9a-z]{6,}$/;

        if (giaTri == "")
            warningMessage = "Mật khẩu không được để trống";
        else if (!regex.test(giaTri))
            warningMessage = "Mật khẩu phải có ít nhất 6 ký tự";
        else
            warningMessage = "";

        $("#passwordWarning").text(warningMessage);
    });

    $("#yearInput").on("input", function() {
        var giaTri = $(this).val().trim();

        var warningMessage = "";

        if (giaTri == "")
            warningMessage = "Năm sinh không được để trống";
        else if (parseInt(giaTri) >= 2002)
            warningMessage = "Năm sinh phải từ 2001 trở xuống";
        else
            warningMessage = "";

        $("#yearWarning").text(warningMessage);
    });
});