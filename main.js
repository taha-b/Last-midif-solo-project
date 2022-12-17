var myButton = document.getElementById("firstButton");
var myFirstAudio = document.getElementById("firstAudio")
var mysecondAudio = document.getElementById("secondAudio")
	
	function makeStr(n) {
		if(n<10){
			return "0"+n 
		}
		return n+''
	}

	 function makeFunc() {

  var seconds = 0;
  var minutes = 0
  var hours = 9
 
 	 function countUp() {
	
 	if(seconds === 59){
 		minutes ++
 		seconds = 0
 	}

 	else if(minutes === 59 ){
 		
 		hours ++
 		minutes = 0
 		seconds = 0
 	}
 	
    else  { seconds ++ }
    	
    return {
	seconds :makeStr(seconds) ,
	minutes : makeStr(minutes),
	hours : makeStr(hours)}
	}

   return countUp
 	};

var counter = makeFunc()

function startCounter(){
	setInterval(function() {
	var time = counter()
	
	var mySeconds = document.getElementById("seconds");
	var myMinutes = document.getElementById("minutes");
	var myHours = document.getElementById("hours");
	
	if (time.seconds == 59 && time.minutes == 49  ){
		document.getElementById("seconds").style.color = "red";
	 document.getElementById("minutes").style.color = "red";
	document.getElementById("hours").style.color = "red";
	
	var mySound = $('<audio src="Audio/lunchTime.m4a" autoplay id="firstAudio"></audio>')
	 $("body").append(mySound)
}
	 
	else if (time.seconds == 59 && time.minutes == 51 ) {
	 	document.getElementById("seconds").style.color = "white";
	 document.getElementById("minutes").style.color = "white";
	 document.getElementById("hours").style.color = "white";
	 }
		
  	mySeconds.innerHTML = time.seconds;
  	myMinutes.innerHTML = time.minutes;
  	myHours.innerHTML =  time.hours;
	
},1000) 
}
