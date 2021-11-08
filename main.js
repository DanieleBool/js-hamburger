// Dichiaro con const (era uguale scrivere direttamente (document.querySelector('')) prima di .classList O .addEventListener)
const openHam = document.querySelector('.header-right .fa-bars');
const closeHam = document.querySelector('.hamburger-menu .fa-times');

// Soluzione con add e remove

// openHam.addEventListener("click", function(){
//     document.querySelector(".hamburger-menu").classList.add("active")
//     }
// );

// closeHam.addEventListener("click", function(){
//     document.querySelector(".hamburger-menu").classList.remove("active")
//     }
// );


// Soluzione con function()

 openHam.addEventListener("click", 
    function() {
        document.querySelector(".hamburger-menu").style.display = "table";
    }
);

closeHam.addEventListener("click", 
    function() {
        document.querySelector(".hamburger-menu").style.display = "none";
    }
);