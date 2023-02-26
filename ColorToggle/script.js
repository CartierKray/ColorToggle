let toggleNavStatus = false;

let toggleNav = function () {
    let getSideBarUl = document.querySelector(".nav-sidebar ul");


    if (toggleNavStatus === false) {
        getSideBarUl.style.visibility = "visible";

        toggleNavStatus = true;
    }
    else if (toggleNavStatus === true) {
        getSideBarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }

};



