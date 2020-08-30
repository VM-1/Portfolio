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
document.addEventListener("DOMContentLoaded" , ibg());
function ibg(){
	let ibg = document.querySelectorAll(".ibg");
	if (ibg.length > 0){
		for (let i = 0; i < ibg.length; i++) {
			if(ibg[i].querySelector('img')){
				ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
			}
		}
	}
}
let animItems = document.querySelectorAll('.anim-item');
if( animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;
			let animItemPoint = window.innerHeight -  animItemHeight / animStart;
			if (animItemHeight > window.innerHeight ){
				animItemPoint = window.innerHeight - window.innerHeight / animStart
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('active');
			}else {
				if (!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLetf = window.pageXoffSet || document.documentElement.scrollLetf,
			scrollTop = window.pageYoffSet || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLetf }
	}
	setTimeout(() => {
		animOnScroll();
	},300)
}

let anchors = document.querySelectorAll('.anchor');
if (anchors.length >= 0){
	for (anchor of anchors) {
		anchor.addEventListener('click' , function(anchor){
			event.preventDefault();
			let blockID = this.getAttribute('href');
			let anchorLink = document.querySelector(blockID);
			anchorLink.scrollIntoView({
				behavior:"smooth",
				block: "start"
			})		
		})
	}
}
document.querySelector('.heading-top-instead').style.height = document.querySelector('.header').offsetHeight + 'px';

window.addEventListener('scroll', animHeadingBG);
function animHeadingBG() {
	let scr = 0 - document.documentElement.scrollTop / 2;
	document.querySelector('.heading-bg').style.transform = 'translateY(' + scr + 'px)';

}
window.addEventListener(`resize`, head);
function head() {
	let headingHeight = document.querySelector('.heading').offsetHeight;
		document.querySelector('.heading-bg').style.height = headingHeight + 'px';
}
head();
window.addEventListener('scroll', function(){
	let pageSections = document.querySelectorAll("[data-section]");
	if (pageSections.length > 0) {
		for (pageSection of pageSections){
			if (pageSection.classList.contains('active')){
				let pageSectionAttr = pageSection.getAttribute('data-section');
				let headerItems = document.querySelectorAll("[data-header-item]");
				if (headerItems.length > 0) {
					headerItems.forEach(function(item) {
						item.classList.remove('active');
						let headerItemsAttr = item.getAttribute('data-header-item')
						if (pageSectionAttr == 'none' ) {
							item.classList.remove('active')
						}else{
							if (headerItemsAttr == pageSectionAttr) {
								item.classList.add('active')
							}
						}
					});
				}
			}
		}
	}
});

function validateContactForm() {
   var valid = true;

   $(".form-info").html("");
   $(".input-field").css('border', '#e0dfdf 1px solid');
   var userName = $("#userName").val();
   var userEmail = $("#userEmail").val();
   var subject = $("#subject").val();
   var content = $("#content").val();
   
   if (userName == "") {
       $("#userName-info").html("Required.");
       $("#userName").css('border', '#e66262 1px solid');
       valid = false;
   }
   if (userEmail == "") {
       $("#userEmail-info").html("Required.");
       $("#userEmail").css('border', '#e66262 1px solid');
       valid = false;
   }
   if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
   {
       $("#userEmail-info").html("Invalid Email Address.");
       $("#userEmail").css('border', '#e66262 1px solid');
       valid = false;
   }

   if (subject == "") {
       $("#subject-info").html("Required.");
       $("#subject").css('border', '#e66262 1px solid');
       valid = false;
   }
   if (content == "") {
       $("#userMessage-info").html("Required.");
       $("#content").css('border', '#e66262 1px solid');
       valid = false;
   }
   return valid;
}
