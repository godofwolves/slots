// el.src.match("images/lemon_slot.PNG")
// el.src = "images/orange_slot.PNG";
// el.src = "images/cherry_slot.PNG";
// document.getElementById('you-win').play();
// el.src.match("images/cherry_slot.PNG")
// el.src = "images/lemon_slot.PNG";
// el.src.match("images/orange_slot.PNG")

// cycle images in the following order: CHERRY --> LEMON --> ORANGE

function nextImage(el){
	if (el.src.match("images/cherry_slot.PNG")){
		 el.src="images/lemon_slot.PNG";
	} else if (el.src.match("images/lemon_slot.PNG")){
		el.src = "images/orange_slot.PNG"
	} else if (el.src.match("images/orange_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
	} else {
		// do nothing
	}
}
// LEMON --> BAR --> CHERRY
function next(el){
	if (el.src.match("images/lemon_slot.PNG")){
		 el.src="images/bar_slot.PNG";
	} else if (el.src.match("images/bar_slot.PNG")){
		el.src = "images/cherry_slot.PNG"
	} else if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
	} else {
		// do nothing
	}
}
// ORANGE --> CHERRY --> SEVEN --> WATERMELON
function Image(el){
	if (el.src.match("images/orange_slot.PNG")){
		 el.src="images/cherry_slot.PNG";
	} else if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/seven_slot.PNG"
	} else if (el.src.match("images/seven_slot.PNG")){
		el.src = "images/mellon.jpg";
	} else if (el.src.match("images/mellon.jpg")){
		el.src = "images/orange_slot.PNG"
	}else {
		// do nothing
	}
}

// function nextImage(el){}
function check() {
	if (document.getElementById("slot1").src.match("images/cherry_slot.PNG") && document.getElementById("slot2").src.match("images/cherry_slot.PNG") && document.getElementById("slot3").src.match("images/cherry_slot.PNG")){ 
	document.getElementById("you-win").play();
	document.getElementById("slot1").classList.add("opaque");
	document.getElementById("slot2").classList.add("opaque");
	document.getElementById("slot3").classList.add("opaque");

}
}

//function nextImage(el){}

function playSound() {
	document.getElementById("you-win").play();
	}