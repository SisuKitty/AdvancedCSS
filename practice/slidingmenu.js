 function toggleNav() {
        var updateElement = document.getElementById("menu-icon");
        var openNav = document.getElementById("nav-bar")
        //toggle adds a class if it's not there or removes it if it is.
        updateElement.classList.toggle("open");
        openNav.classList.toggle("open");
      } 