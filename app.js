let points = 0;
let energy = 500;

const fish = document.getElementById("fish");
const pointBox = document.getElementById("points");
const energyBox = document.getElementById("energy");

fish.onclick = function(e) {

    if (energy <= 0) {
        return;
    }

    points++;
    energy--;

    pointBox.innerHTML = "⭐ " + points + " Points";
    energyBox.innerHTML = "⚡ Energy: " + energy + "/500";

    // حرکت ماهی
    fish.style.transform = "scale(0.85) rotate(-5deg)";

    setTimeout(() => {
        fish.style.transform = "scale(1) rotate(0deg)";
    }, 120);


    // ساخت امتیاز شناور
    let plus = document.createElement("div");
    plus.innerHTML = "+1 🐟";
    plus.style.position = "absolute";
    plus.style.left = e.clientX + "px";
    plus.style.top = e.clientY + "px";
    plus.style.fontSize = "25px";

    document.body.appendChild(plus);

    setTimeout(() => {
        plus.remove();
    }, 700);
};
