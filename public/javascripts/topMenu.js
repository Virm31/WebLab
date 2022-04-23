// Выделяем пункт навигационного меню в зависимости от id элемента <main>
var main_id = document.querySelector("main").id;
var navmenu = document.getElementsByClassName("top-menu")[0]
var navlist = navmenu.getElementsByTagName("li");
var headtext = document.getElementById("headname");
var menuelem;
var alerttext = "";

switch(main_id) {
    case 'HomePage':
        menuelem = navlist[0];
        break;
    case 'SendRecipe':
        menuelem = navlist[3];
        break;
    default:
        menuelem = navlist[0];
}
headtext.innerHTML = menuelem.firstChild.innerHTML;
menuelem.classList.add("active");
//

/*$(document).ready(function() {
	$(".hidebox p").hide();
	$(".hidebox h3").css("background-color", "#29c5e6");
});*/
/*function setHeaderText(elem) {
	var newheadtext = elem.innerHTML;
	var headtext = document.getElementById("headname");
	headtext.innerHTML = newheadtext;
	elem.parentNode.classList.add("active");
}*/