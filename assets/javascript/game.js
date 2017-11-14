$(document).ready(function(){

var arr=[];
var counter=0, wins=0, losses =0;
var random, targetNumber, num1, num2, num3, num4;
//generate 4 random values for 4 crystals
for (i=0;i<4;i++){
	random= Math.floor(Math.random() * 12 + 1)  ;
	arr.push(random);
//	console.log(arr);
	num1=arr[0];	num2=arr[1];	num3=arr[2];	num4=arr[3];
	}
//generate target number
var targetNumber= Math.floor(Math.random() * 102 + 19)  ;
console.log("targetnum", targetNumber);
//CREATE RESET func
function resetStats() {
   arr = [];
   counter=0;
   $("#counter").text(counter);
   targetNumber= Math.floor(Math.random() * 102 + 19)  ;
//   console.log("Newtargetnum", targetNumber);
   $("#targetNumber").text(targetNumber);
   for (i=0;i<4;i++){
	random= Math.floor(Math.random() * 12 + 1)  ;
	arr.push(random);
//	console.log(arr);
	num1=arr[0];	num2=arr[1];	num3=arr[2];	num4=arr[3];
	}
}
//show target number in html
$("#targetNumber").text(targetNumber);

$("#img1").click(function(){
	//on clicking image 1 num1 is added to counter value
	counter +=num1;
	//console.log(counter); show counter value in real-time
	$("#counter").text(counter);
	//if number equals target win
	if(counter=== targetNumber){
		wins++;
	    $("#wins").text(wins);
	    alert("You win!");
		resetStats();
	}
	//if number greater than target loss
	else if (counter> targetNumber){

	losses++;
	$("#losses").text(losses);	
	alert("You lost!");
	resetStats();
	}
	});

$("#img2").click(function(){

	counter +=num2;

	console.log(counter);
	$("#counter").text(counter);
	if(counter=== targetNumber){
		wins++;
	   $("#wins").text(wins);
	   alert("You win!");
		resetStats();
	}
	else if (counter> targetNumber){

		losses++;
	$("#losses").text(losses);
	alert("You lost!");
		resetStats();
	}
	});

$("#img3").click(function(){

	counter +=num3;

	console.log(counter);
	$("#counter").text(counter);
	if(counter=== targetNumber){
		wins++;
	$("#wins").text(wins);
	alert("You win!");
		resetStats();
	}
	else if (counter> targetNumber){

		losses++;
	$("#losses").text(losses);
	    alert("You lost!");
		resetStats();
	}
	});

$("#img4").click(function(){

	counter +=num4;

	console.log(counter);
	$("#counter").text(counter);
	if(counter=== targetNumber){
		wins++;
	$("#wins").text(wins);
	alert("You win!");
		resetStats();
	}
	else if (counter> targetNumber){
		losses++;
	$("#losses").text(losses);
	alert("You lost!");
		resetStats();
	}
	});

});