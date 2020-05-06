var i = 0; 			
var images = [];	
var time = 5000;
var num=0;	

images[0] = "banner-claymore.jpg";
images[1] = "cowbo-bebop-banner.jpg";
images[2] = "dragon-ball-z-banner.jpg";
images[3] = "fate_stay_night_banner.png";
images[4] = "maxresdefault.jpg";
images[5] = "your-lie-in-april-banner.jpg";
images[6] = "ghost_in_the_shell_banner.jpg";

window.onload=change;

function change(){

	document.slide.src = images[i];
	
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}

	setTimeout("change()", time);
}



function nextImage(){
	
	var nextImage=document.getElementById("slide");
	num++;
	if(num>=images.length){
		num=0;
		
	}
	nextImage.src=images[num];
}

function showHide(){
	
    var show_hide = document.getElementById("box");
    if (show_hide.style.display === "none") {
        show_hide.style.display = "block";
    } else {
        show_hide.style.display = "none";
    }
}
/* New Code*/
function selectTab(tab) {
	var butt = document.getElementById("tabContent"+tab);
	var x;
	
    if (butt.style.display === "none") {
        butt.style.display = "block";
    } 
	else {
        butt.style.display = "none";
    }

}