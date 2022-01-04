let ToggleNavStatus = false;

let ToggleNav = function(){
	let GetSidebar = document.querySelector(".Nav-Aside");
	let GetSidebarUl = document.querySelector(".Nav-Aside ul");
	let GetSidebarTitles = document.querySelectorAll(".Nav-Aside span");
	let GetSidebarLinks = document.querySelectorAll(".Nav-Aside a");
	
	if (ToggleNavStatus === false){
		GetSidebarUl.style.visibility = "visible";
		GetSidebar.style.width = "114px";
		for (let i =0; i <GetSidebarTitles.length;i++){
			GetSidebarTitles[i].style.opacity="0.5";
		}
		for (let i =0; i <GetSidebarLinks.length;i++){
			GetSidebarLinks[i].style.opacity="1";
		}
		ToggleNavStatus=true;
	}else{
		GetSidebarUl.style.visibility = "hidden";
		GetSidebar.style.width = "60px";
		for (let i =0; i <GetSidebarTitles.length;i++){
			GetSidebarTitles[i].style.opacity="0";
		}
		for (let i =0; i <GetSidebarLinks.length;i++){
			GetSidebarLinks[i].style.opacity="0";
		}
		ToggleNavStatus=false;
		
	}
}

window.onscroll = function() {myFunction()};
	
	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;

	var Aside = document.getElementById("Aside");
	var AsideSticky = Aside.offsetTop;
	

	
	function myFunction() {
	  if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	  } else {
		navbar.classList.remove("sticky");
	  }
	  if (window.pageYOffset >=sticky){
		  Aside.classList.add("Aside-Sticky");
		  Aside.style.top = "60px";
	  }else{
		  Aside.classList.remove("Aside-Sticky");
		  Aside.style.top = "120px";
	  }

	}