let burgerMenu=document.querySelector(".header-nav-burger");burgerMenu.addEventListener("click",(function(){burgerMenu.classList.toggle("active"),document.querySelector(".header-nav-list").classList.toggle("active"),document.querySelector(".header").classList.toggle("active"),document.querySelector("body").classList.toggle("lock");let e=document.querySelectorAll(".header-item-link");if(e.length>0)for(headerMenuLink of e)headerMenuLink.addEventListener("click",(function(){burgerMenu.classList.remove("active"),document.querySelector(".header-nav-list").classList.remove("active"),document.querySelector(".header").classList.remove("active"),document.querySelector("body").classList.remove("lock")}))}));let header=document.querySelector(".header"),headerOffset=header.getBoundingClientRect().top;window.onscroll=function(){window.pageYOffset>=5?header.classList.add("scroll"):header.classList.remove("scroll")};let animItems=document.querySelectorAll(".anim-item");if(animItems.length>0){function animOnScroll(){for(let e=0;e<animItems.length;e++){const t=animItems[e],n=t.offsetHeight,o=offset(t).top,i=4;let r=window.innerHeight-n/i;n>window.innerHeight&&(r=window.innerHeight-window.innerHeight/i),pageYOffset>o-r&&pageYOffset<o+n?t.classList.add("active"):t.classList.contains("anim-no-hide")||t.classList.remove("active")}}function offset(e){const t=e.getBoundingClientRect(),n=window.pageXoffSet||document.documentElement.scrollLetf,o=window.pageYoffSet||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+n}}window.addEventListener("scroll",animOnScroll),setTimeout(()=>{animOnScroll()},300)}let anchors=document.querySelectorAll(".anchor");if(anchors.length>=0)for(anchor of anchors)anchor.addEventListener("click",(function(e){event.preventDefault();let t=this.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}));function animHeadingBG(){let e=0-document.documentElement.scrollTop/2;document.querySelector(".heading-bg").style.transform="translateY("+e+"px)"}function head(){let e=document.querySelector(".heading").offsetHeight;document.querySelector(".heading-bg").style.height=e+"px"}function validateContactForm(){var e=!0;$(".form-info").html(""),$(".input-field").css("border","#e0dfdf 1px solid");var t=$("#userName").val(),n=$("#userEmail").val(),o=$("#subject").val(),i=$("#content").val();return""==t&&($("#userName-info").html("Required."),$("#userName").css("border","#e66262 1px solid"),e=!1),""==n&&($("#userEmail-info").html("Required."),$("#userEmail").css("border","#e66262 1px solid"),e=!1),n.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)||($("#userEmail-info").html("Invalid Email Address."),$("#userEmail").css("border","#e66262 1px solid"),e=!1),""==o&&($("#subject-info").html("Required."),$("#subject").css("border","#e66262 1px solid"),e=!1),""==i&&($("#userMessage-info").html("Required."),$("#content").css("border","#e66262 1px solid"),e=!1),e}document.querySelector(".heading-top-instead").style.height=document.querySelector(".header").offsetHeight+"px",window.addEventListener("scroll",animHeadingBG),window.addEventListener("resize",head),head(),window.addEventListener("scroll",(function(){let e=document.querySelectorAll("[data-section]");if(e.length>0)for(pageSection of e)if(pageSection.classList.contains("active")){let e=pageSection.getAttribute("data-section"),t=document.querySelectorAll("[data-header-item]");t.length>0&&t.forEach((function(t){t.classList.remove("active");let n=t.getAttribute("data-header-item");"none"==e?t.classList.remove("active"):n==e&&t.classList.add("active")}))}}));