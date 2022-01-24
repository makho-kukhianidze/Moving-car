// Variable block - Start.
var car = document.getElementById('movingCar'); // Moving Car.
var x = 0; // Left - Right = Max 570.
var y = 0; // Up - Down = Max 510.
var speed = 50; // Car's speed.
var right = document.getElementById('right'); // Keyboard key - right.
var left = document.getElementById('left'); // Keyboard key - left.
var up = document.getElementById('up'); // Keyboard key - up.
var down = document.getElementById('down'); // Keyboard key - down.
var motorSound = new Audio(); // Car's motor sound.
motorSound.src = 'assets/sounds/a.wav';
// Variable block - End.

// Evenet buttons block - Start.
right.addEventListener("click", function () {
	movecar('Right');
	motorSound.play(); // Car's motor sound - play.
});
left.addEventListener("click", function () {
	movecar('Left');
	motorSound.play(); // Car's motor sound - play.
})
up.addEventListener("click", function () {
	movecar('Up');
	motorSound.play(); // Car's motor sound - play.
});
down.addEventListener("click", function () {
	movecar('Down');
	motorSound.play(); // Car's motor sound - play.
})
// Evenet buttons block - End.

// The onkeydown event - Start.
window.onkeydown = start;
// The onkeydown event - End.

// Function block - Start.
// Moving Car - Start.
function start(e) {
	if (e.keyCode == "39") { // Car - go right - keyCode = >>.
		movecar('Right'); // Car - go right - keyCode = >>.
		motorSound.play(); // Car's motor sound play.
	}
	else if (e.keyCode == "37") { // Car - go left - keyCode = <<.
		movecar('Left'); // Car - go left - keyCode = <<.
		motorSound.play(); // Car's motor sound play.
	}
	else if (e.keyCode == "38") { // Car - go Up - keyCode = ^^.
		movecar('Up'); // Car - go Up - keyCode = ^^.
		motorSound.play(); // Car's motor sound play.
	}
	else if (e.keyCode == "40") {  // Car - go Down - keyCode = UU.
		movecar('Down'); // Car - go Down - keyCode = UU.
		motorSound.play(); // Car's motor sound play.
	}
}
// Moving Car - End.

function movecar(motor) { // Function - moving car.
	if (motor == "Right" && x < 570) {
		x = x + speed; // x = x (0) + speed (50) = 569 (Max).
		car.style.transform = "translate(" + x + "px," + y + "px) rotate(180deg)";
		// Moving Car style: transform: translate(XXpx, YYpx) rotate(180deg);
	}
	else if (motor == "Left" && x > 0) {
		x = x - speed; // x = x (50) - speed (50) = 0 (Min).
		car.style.transform = "translate(" + x + "px," + y + "px) rotate(0deg)";
		// Moving Car style: transform: translate(XXpx, YYpx) rotate(0deg);
	}
	else if (motor == "Up" && y > 0) {
		y = y - speed; // y = y (50) - speed (50) = 0 (Min).
		car.style.transform = "translate(" + x + "px," + y + "px) rotate(90deg)";
		// Moving Car style: transform: translate(XXpx, YYpx) rotate(90deg);
	}
	else if (motor == "Down" && y < 510) {
		y = y + speed; // y = y (0) - speed (50) = 510 (Min).
		car.style.transform = "translate(" + x + "px," + y + "px) rotate(-90deg)";
		// Moving Car style: transform: translate(XXpx, YYpx) rotate(-90deg);
	}
}
// Function block - End.