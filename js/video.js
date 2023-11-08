
window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

//PLAY AND PAUSE BUTTONS
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	player1.play();
	volume.textContent = player1.volume * 100 + "%";

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	player1.pause();
});

//MUTE BUTTON
document.querySelector("#mute").addEventListener("click", function() {
	if (player1.muted) {
		player1.muted = false;
	  mute.textContent = "Mute";
	} else {
		player1.muted = true;
	  mute.textContent = "Unmute";
	}
	volume.textContent = player1.volume;
  });

  //SKIP BUTTON
  document.querySelector("#skip").addEventListener("click", function() {
	if (player1.currentTime + 10 < player1.duration) {
		player1.currentTime += 10; 
	  } else {
		player1.currentTime = 0;
		
	  }
	  console.log("Current Location: " + player1.currentTime.toFixed(1) + " seconds");
  });


  //Code for affecting the speed of the videos
  var currentSpeed = 1.0;
  document.querySelector("#faster").addEventListener("click", function() {
	currentSpeed += 0.1;
	player1.playbackRate = currentSpeed;
	console.log("New Speed: " + (currentSpeed * 100) + "%");
  });

  document.querySelector("#slower").addEventListener("click", function() {
	currentSpeed -= 0.1;
	player1.playbackRate = currentSpeed;
	console.log("New Speed: " + (currentSpeed * 100) + "%");
  });

//SLIDER
  document.querySelector("#slider").addEventListener("input", function() {
  var newVolume = this.value/100;
  player1.volume = newVolume;
  volume.textContent = newVolume * 100 + "%";
});



//these toggle the classlist
document.querySelector("#vintage").addEventListener("click", function() {
	player1.classList.add("oldSchool");

});

document.querySelector("#orig").addEventListener("click", function() {
	player1.classList.remove("oldSchool");
});
