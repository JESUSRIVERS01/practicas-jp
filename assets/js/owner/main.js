
let power = document.querySelector(".buttonPower");
let volumeUP = document.querySelector(".buttonVolUp");
let volumeDown = document.querySelector(".buttonVolDown");
let channelUp = document.querySelector(".buttonChannelUp");
let channelDown = document.querySelector(".buttonChannelDown");
let actualChannel = document.querySelector(".boxChannel");
let levelSound = document.querySelector(".levelSound");
let tv = document.querySelector(".tv");
let estadoTv="off";

power.addEventListener("click",function controll(options) {
	console.log("click");

	if (estadoTv=="off") {
		let imageChannel=document.createElement("img");
		imageChannel.classList.add("imgChannel");
		imageChannel.src="/assets/img/tv1.jpg";
		tv.appendChild(imageChannel);
		estadoTv="on";
	} else if(estadoTv=="on"){
		console.log("tv off");
		estadoTv="off";
	}
	


})