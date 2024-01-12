const filterContainer = document.querySelector(".product-filter");
const productItems = document.querySelectorAll(".product-item");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
        filterContainer.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        productItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === "all") {
                if (filterValue != "all") {
                    document.getElementById("filter-all").style.display = "block";
                    document.getElementById("filter-all").style.fontSize = "1.2rem";
                }
                if (filterValue === "all") {
                    document.getElementById("filter-all").style.display = "none";
                }
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});

// function disableFilter(){
//     filterValue=
// }