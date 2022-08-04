var menuBtn = document.querySelector(".menu-icon");

var navMen = document.querySelector(".nav-container ul");

var searchBtn = document.querySelector(".search");

// var searchBtnm = document.querySelector(".search-medium");

// var searchBtnm = document.querySelector(".search-md");

var searchForm = document.querySelector(".searchform");



searchBtn.addEventListener("click" , function(){

	searchForm.classList.toggle("d-flex");
	console.log("test");


});






menuBtn.addEventListener("click", function () {
	
	navMen.classList.toggle("toggle-menu");

});


