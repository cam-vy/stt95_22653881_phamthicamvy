$(document).ready(() => {
    $("#name").blur(() => {
        var regex = /^([A-Z]{1}[a-z]+)(\s?[A-Z]{1}[a-z]+)*$/;
        var name = $("#name").val();
        if (regex.test(name)) {
            $("#btnSign").attr("disabled", false);
        } else {
            $("#name").focus();
        }
    })


    $("#btnSign").click(() => {
        var name = $("#name").val().trim();
        if (name === "") {
            alert("Vui lòng nhập tên!");
            $("#name").focus();
            return;
        }
        var lop = "";
        var valLop = $("#lop").val();
        if (valLop == 1) {
            lop += $("#lop option[value=1]").prop("selected", "selected").text();
        } else if (valLop == 2) {
            lop += $("#lop option[value=2]").prop("selected", "selected").text();
        } else if (valLop == 3) {
            lop += $("#lop option[value=3]").prop("selected", "selected").text();
        }

        var mon = "";
        var valMon = $("#mon").val();
        if (valMon == 'a') {
            mon += $("#mon option[value=a]").prop("selected", "selected").text();
        } else if (valMon == 'b') {
            mon += $("#mon option[value=b]").prop("selected", "selected").text();
        } else if (valMon == 'c') {
            mon += $("#mon option[value=c]").prop("selected", "selected").text();
        }

        var loai = "";
        if ($("#lythuyet").is(":checked")) {
            loai += $("label[for=lythuyet]").text();
        } else if ($("#thuchanh").is(":checked")) {
            loai += $("label[for=thuchanh]").text();
        }

        var row =
            `
            <tr>
                <td>${name}</td>
                <td>${lop}</td>
                <td>${mon}</td>
                <td>${loai}</td>
            </tr>
            `
        $("#myTable").append(row);

        $("#name").val("");
        $("#name").focus();
        $("#lop option[value=1]").prop("selected", "selected");
        $("#mon option[value=a]").prop("selected", "selected")
    })
})