$(document).ready(function(){

	$("#auther_label").click(function() {
        window.open("http://studiobinghuan.blogspot.tw/?view=flipcard", "_blank");
    });

	var img = document.getElementById('phonePicture');
	//img.height = (window.innerHeight - 20) +"px";;
	img.style.height = (window.innerHeight - $("#footer").height() - $("#header").height() -  20) +"px";
	img.width = '100%';


	$("#fingerup").on("touchstart", function() {
		console.log("1. touchstart");
		fingerupTouchstart(true);
	})
	$("#fingerup").on("touchend", function() {
		console.log("-1. touchstart");
		fingerupTouchstart(false);
	})



	$("#fingerdown").on("touchstart", function() {
		console.log("2. touchstart");
		fingerdownTouchstart(true);
	})
	$("#fingerdown").on("touchend", function() {
		console.log("-2. touchstart");
		fingerdownTouchstart(false);
	})

	$("#recover").click(function() {
		$("#fingerup").show();
		$("#fingerdown").show();
		document.getElementById("phonePicture").src = "images/smartphone.png";
	});
});


var flagup = false;
var flagdown = false;

function showBendedPhone() {
	console.log(">>> showBendedPhone");
	var snd2 = new Audio("sfx/wrong.wav"); // buffers automatically when created
	snd2.play();

	document.getElementById("phonePicture").src = "images/smartphonebended.png";

	$("#fingerup").hide();
	$("#fingerdown").hide();
}

var timerId;


var DEFAULT_DURATION = 2500;
function countdownBending() {
	var snd = new Audio("sfx/sound1.wav"); // buffers automatically when created
	snd.play();
	timerId= setTimeout(showBendedPhone, DEFAULT_DURATION);
}

function fingerupTouchstart(yes) {
	flagup = yes;

	if(yes === false) {
		clearTimeout(timerId);
	}

	if(flagdown === true) {
		console.log(">>> fingerupTouchstart");
		countdownBending();
	}
}

function fingerdownTouchstart(yes) {
	flagup = yes;

	if(yes === false) {
		clearTimeout(timerId);
	}

	if(flagup === true) {
		console.log(">>> fingerdownTouchstart");
		countdownBending();
	}
}
