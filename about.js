const navList = document.querySelectorAll(".header_menu a");

navList.forEach(function (item) {
    const href = item.getAttribute("href");
    const currentPage = location.pathname;

    if (currentPage.includes(href.replace("./", ""))) {
        navList.forEach(function (nav) {
            nav.classList.remove("active");
        });

        item.classList.add("active");
    }
});
