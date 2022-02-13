var len=document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++){
	document.querySelectorAll(".drum")[i].addEventListener("mouseover",function handleClick(){
	var key=this.innerHTML;
	play(key);
	Animate(key);
});}

document.addEventListener("keydown",function(event){
	play(event.key);
	Animate(event.key);
});

function play(key){
		switch(key){
		case "w":
			var a=new Audio("sounds/kick-bass.mp3");	
			a.play();
			break;
		
		case "d":
			var a=new Audio("sounds/tom-1.mp3");	
			a.play();
			break;
		
		case "j":
			var a=new Audio("sounds/tom-2.mp3");	
			a.play();
			break;
		
		case "k":
			var a=new Audio("sounds/tom-3.mp3");	
			a.play();
			break;
		
		case "l":
			var a=new Audio("sounds/tom-4.mp3");	
			a.play();
			break;
		case "a":
			var a=new Audio("sounds/crash.mp3");	
			a.play();
			break;
		case "s":
			var a=new Audio("sounds/snare.mp3");	
			a.play();
			break;
		}
}


function Animate(currKey){
	var active=document.querySelector("."+currKey);
	active.classList.add("animate");
	setTimeout(function() {
		active.classList.remove("animate");
		},100);
	}


