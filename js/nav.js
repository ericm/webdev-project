var d = document;
var clicked = false;

function toggleNav() {

    d.getElementsByTagName("header")[0].classList.toggle("show");
    d.getElementsByTagName("nav")[0].classList.toggle("showNav");
    
    
    if (clicked) {
        d.getElementById("backNav").classList.remove("showBack");
    } else {
        d.getElementById("backNav").classList.add("showBack")
    }    

    clicked = !clicked;

}

d.getElementsByTagName("main")[0].innerHTML += `
    <!--This div is for the dark bg when you open nav-->
    <div id="backNav" role="presentation"></div>
    `;

d.body.addEventListener("scroll", function() {
    if (clicked) {toggleNav();}
});

d.getElementsByClassName("fa-bars")[0].addEventListener("click", function() {
    toggleNav();
});

d.getElementById("backNav").addEventListener("click", function() {
    toggleNav();
});
