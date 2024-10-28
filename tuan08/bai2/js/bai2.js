$(document).ready(function () {
    var subtotals = [0, 0, 0, 0, 0]
    var price = [20000, 40000, 30000, 50000, 30000]
    var total = 0;


    $("#amount1").on("blur", function() { calcSubtotal(1) })
    $("#amount2").on("blur", function() { calcSubtotal(2) })
    $("#amount3").on("blur", function() { calcSubtotal(3) })
    $("#amount4").on("blur", function() { calcSubtotal(4) })
    $("#amount5").on("blur", function() { calcSubtotal(5) })

    function calcSubtotal(index) {
        var giaTri = $("#amount" + index).val();

        if (!isNaN(giaTri)) {
			var res = parseInt(giaTri) * price[index-1];
			
			if (isNaN(res)) res = 0;
			
            subtotals[index] = res;
            getTotal();
        } else {

        }
    }


    function getTotal() {
		if (isNaN(total)) total = 0;
		
        total = subtotals.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0)
        $("#total").text(total);
    }


});

