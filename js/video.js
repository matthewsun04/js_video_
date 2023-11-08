
window.addEventListener("load", function() {
	console.log("Good job opening the window")

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	player1.play();
	volume.textContent = player1.volume;

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	player1.pause();
});


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

  document.querySelector("#skip").addEventListener("click", function() {
	if (player1.currentTime + 10 < player1.duration) {
		player1.currentTime += 10; 
	  } else {
		player1.currentTime = 0;
		
	  }
	  console.log("Current Location: " + player1.currentTime.toFixed(1) + " seconds");
  });


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


  document.querySelector("#slider").addEventListener("click", function() {
  var newVolume = parseFloat(slider.value);
  player1.volume = newVolume;
  updateVolumeInfo();
  volume.textContent = player1.volume.toFixed(1);
});



//these toggle the classlist
document.querySelector("#vintage").addEventListener("click", function() {
	player1.classList.toggle("oldSchool");

});

document.querySelector("#orig").addEventListener("click", function() {
	player1.classList.remove("oldSchool");
});
