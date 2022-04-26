var tabNavs = document.querySelectorAll(".nav-tab");
var tabPanes = document.querySelectorAll(".tab-pane");

for (var i = 0; i < tabNavs.length; i++) {

tabNavs[i].addEventListener("click", function(e){
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");

    for (var j = 0; j < tabNavs.length; j++) {
    var contentAttr = tabPanes[j].getAttribute("data-tab-content");

    if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active"); 
    } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
    }
    };
});
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }