

const tg = window.Telegram.WebApp;
tg.ready();

const telegramUser = tg.initDataUnsafe.user;
const userId = telegramUser ? telegramUser.id : null;let points = Number(localStorage.getItem("plekko_points")) || 0;
alert("Plekko ID: " + userId);
let energy = Number(localStorage.getItem("plekko_energy")) || 500;

const fish = document.getElementById("fish");
const pointBox = document.getElementById("points");
const energyBox = document.getElementById("energy");

pointBox.innerHTML = "🐟 " + points + " Points";
energyBox.innerHTML = "⚡ Energy: " + energy + "/500";


fish.onclick = function(e) {

    if (energy <= 0) {
        return;
    }

    points++;
    energy--;

    // ذخیره در گوشی
    localStorage.setItem("plekko_points", points);
    localStorage.setItem("plekko_energy", energy);


    // ارسال امتیاز به ربات
    if (userId) {

console.log("SENDING POINT", userId);
 fetch("https://southern-steam-answered-dependence.trycloudflare.com/add_point", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                uid: String(userId)
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Point saved:", data);
        })
        .catch(error => {
            console.log("API Error:", error);
        });
    }


    pointBox.innerHTML = "🐟 " + points + " Points";
    energyBox.innerHTML = "⚡ Energy: " + energy + "/500";


    // حرکت ماهی
    fish.style.transform = "scale(0.85) rotate(-5deg)";

    setTimeout(() => {
        fish.style.transform = "scale(1) rotate(0deg)";
    }, 120);


    // حباب
    let bubble = document.createElement("div");
    bubble.innerHTML = "🫧";

    bubble.style.position = "absolute";
    bubble.style.left = e.clientX + "px";
    bubble.style.top = e.clientY + "px";
    bubble.style.fontSize = "30px";
    bubble.style.pointerEvents = "none";

    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 1000);

};
