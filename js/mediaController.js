

var playSwitch = [];
playSwitch[0]='Images/play.png';
playSwitch[1]='Images/pause.png';

var y=0;
var button = document.getElementById('play');


//###################BUTTON CONTROLS
$("#next1").click(next);

$("#prev1").click(function(){
	if(y>0){
    y--;
	}
	else{
	y=img.length-1;
	}
    $("#imgBig").hide();
    document.getElementById('imgBig').src=img[y];
    $("#imgBig").fadeIn('slow');
});

$('#play').click(function(){


	if ($(this).attr("src")==playSwitch[0]){
		next();
		timer = setInterval(next, 5000);
		button.src=playSwitch[1];
	}
	else {
		button.src=playSwitch[0];
		clearInterval(timer);
	}
});


//################## MULTI-PAGE FUNCTIONS
function startTimer1() {
	setInterval(displayNextImage, 5000);
}

function displayNextImage() {
	
    x = (x === img.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = img[x];
	
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function next(){
	if (y<img.length-1){
    y++;
	}
	else{
	y=0;
	}
    $("#imgBig").hide();
    document.getElementById('imgBig').src=img[y];
    $("#imgBig").fadeIn('slow');
}


//##########################OVERLAY
$(".imgSmall").click(function(){
		$("#imgBig").hide();
		$("#imgBig").attr("src", $(this).attr("src"));
		$("#imgBig").fadeIn("slow");
});

$("#imgBig").click(function(){

	$("#imgBigger").attr("src", $(this).attr("src"));
	$("#overlay").fadeIn("slow");
    $("#overlayContent").fadeIn("slow");

	button.src=playSwitch[0];
	clearInterval(timer);
});

$("#imgBigger").click(function(){
$("#overlay").hide();
$("#overlayContent").hide();

});

$("#imgBig").click(function(){
	clearInterval(timer);
	button.src=playSwitch[0];
	$("#imgBigger").attr("src", $(this).attr("src"));
	$("#overlay").fadeIn("slow");
    $("#overlayContent").fadeIn("slow");
});

$("#imgBigger").click(function(){
$("#overlay").hide();
$("#overlayContent").hide();

});
