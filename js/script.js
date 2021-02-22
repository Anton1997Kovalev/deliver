/*function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

function ibg() {
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();

*/
/*var burger_menu = document.getElementById('burger-menu');
var phoneClose = document.getElementById('phoneClose');
var phoneOpen = document.getElementById('phoneOpen');
function openBurgerMenu (){
	if(burger_menu.style = "display:none;"){
		burger_menu.style = "display:inline-flex;";
		phoneOpen.style = "display: none;";
		phoneClose.style = "display:block;";
	}
}

function closeBurgerMenu (){
		phoneOpen.style = "display: block;";
		phoneClose.style = "display: none";
		burger_menu.style = "display:none;";
}*/

/*function MyFunction(){
	var search_text = document.getElementById('search_text').style = "opacity: 1;";
}*/

function BurgerMenu(){
	var main_menu = document.getElementById('main_menu');
	main_menu.style = "width: 100%; height: 500px; background: rgba(255, 204, 0, 1);position: relative; top: 0px;";
	var menu_list = document.getElementById('menu_list');
	menu_list.style = "display: flex; flex-direction: column;margin:0px;";
	var logo_img = document.getElementById('logo_img');
	logo_img.style = "display: block; margin: 0 auto;";
}

function Logistics(){
	var logistics = document.getElementById("logistics");
	logistics.style = "display: block;";

	var express = document.getElementById("express");
	express.style = "display: none;";

	var EL_item = document.getElementById("EL_item");
	EL_item.style = "background-color: #ffcc00;";
}

function expr(){
	var logistics = document.getElementById("logistics");
	logistics.style = "display: none;";

	var express = document.getElementById("express");
	express.style = "display: block;";

	var EL_item = document.getElementById("EL_item");
	EL_item.style = "background-color: #ba0000;";
}

function openService(){
	var serv_body = document.getElementById("serv_body");
	serv_body.style = "display:block;";
}