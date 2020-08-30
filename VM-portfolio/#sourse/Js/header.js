let burgerMenu = document.querySelector(".header-nav-burger");
burgerMenu.addEventListener("click", function(){
	burgerMenu.classList.toggle('active');
	document.querySelector(".header-nav-list").classList.toggle('active');
	document.querySelector(".header").classList.toggle('active');
	document.querySelector("body").classList.toggle('lock');
	let headerMenuLinks = document.querySelectorAll(".header-item-link");
	if (headerMenuLinks.length > 0) {
		for (headerMenuLink of headerMenuLinks){
			headerMenuLink.addEventListener("click", function(){
				burgerMenu.classList.remove('active')
				document.querySelector(".header-nav-list").classList.remove('active');
				document.querySelector(".header").classList.remove('active');
				document.querySelector("body").classList.remove('lock');
			})
		}
	}
})
let header = document.querySelector(".header");
let headerOffset = header.getBoundingClientRect().top
	window.onscroll = function (){
		let scrHeight = window.pageYOffset;
		if (scrHeight >= 5) {
			header.classList.add("scroll")
		}else{
			header.classList.remove("scroll")
		};
	}