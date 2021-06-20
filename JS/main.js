let ToggleNavStatus = false;

let ToggleNav = function(){
	let GetSidebar = document.querySelector(".Nav-Aside");
	let GetSidebarUl = document.querySelector(".Nav-Aside ul");
	let GetSidebarTitles = document.querySelectorAll(".Nav-Aside span");
	let GetSidebarLinks = document.querySelectorAll(".Nav-Aside a");
	
	if (ToggleNavStatus === false){
		GetSidebarUl.style.visibility = "visible";
		GetSidebar.style.width = "272px";
		for (let i =0; i <GetSidebarTitles.length;i++){
			GetSidebarTitles[i].style.opacity="0.5";
		}
		for (let i =0; i <GetSidebarLinks.length;i++){
			GetSidebarLinks[i].style.opacity="1";
		}
		ToggleNavStatus=true;
	}else{
		GetSidebarUl.style.visibility = "hidden";
		GetSidebar.style.width = "50px";
		for (let i =0; i <GetSidebarTitles.length;i++){
			GetSidebarTitles[i].style.opacity="0";
		}
		for (let i =0; i <GetSidebarLinks.length;i++){
			GetSidebarLinks[i].style.opacity="0";
		}
		ToggleNavStatus=false;
		
	}
}