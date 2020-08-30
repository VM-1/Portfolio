// @prepros-prepend header.js
// @prepros-prepend anim-item.js

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
