var search = document.getElementById("searchbar")
var product_list = document.getElementById("collection_container")
var product = product_list.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()

    for (count = 0; count < product.length; count = count + 1)
    {
        console.log(product.length)
        var productname = product[count].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(enteredvalue) < 0)
        {
            product[count].style.display = "none"
        }

         else {
            product[count].style.display= "block"
        }

    }
})