const fish = document.createElement("img");

fish.src = "plekko.png";
fish.style.width = "250px";
fish.style.maxWidth = "80%";
fish.style.display = "block";
fish.style.margin = "0 auto";
fish.style.userSelect = "none";
fish.draggable = false;

document.getElementById("fish3d").appendChild(fish);
