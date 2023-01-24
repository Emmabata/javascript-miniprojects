toggleBtn = document.querySelector(".sidebar-toggle");
sideBar = document.querySelector(".sidebar");
closeBtn = document.querySelector(".close-btn");


 toggleBtn.addEventListener("click", () => {
    // if (sideBar.classList.contains("show-sidebar")) {
    //     sideBar.classList.remove("show-sidebar")
    // }else {
    //     sideBar.classList.add("show-sidebar")
    // }

    sideBar.classList.toggle("show-sidebar");
    console.log(sideBar.classList)
 })

 closeBtn.addEventListener("click", () => {
    sideBar.classList.remove("show-sidebar");
 });
