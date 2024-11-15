/*thanh*/
            function openNav() {
              document.getElementById("myTab").style.width = "300px";
            }
            
            function closeNav() {
              document.getElementById("myTab").style.width = "0";
            }



/*slide*/         
            function myFunction() {
              if (window.pageYOffset > sticky) {
                menu.classList.add("sticky");
              } else {
                menu.classList.remove("sticky");
              }
            }

    function searchProducts() {
        var input, filter, products, product, name, i, txtValue;
        input = document.getElementById('searchInput');
        filter = input.value.toUpperCase();
        products = document.getElementsByClassName('product');

        for (i = 0; i < products.length; i++) {
            product = products[i];
            name = product.getElementsByClassName('name')[0];
            txtValue = name.textContent || name.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        }
    }
