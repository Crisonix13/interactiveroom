const sechand = document.querySelector("[data-second]");
const minuteshand = document.querySelector("[data-minute]");
const hourshand = document.querySelector("[data-hour]");

function setClock() {

    console.log("W")
    const currentDate = new Date()
    const seconds = currentDate.getSeconds() / 60;
    let minutes = (currentDate.getMinutes() + seconds) / 60;
    let hours = currentDate.getHours();

    console.log(seconds)
    setRotation(sechand, seconds)
    setRotation(minuteshand, minutes)
    setRotation(hourshand, hours)
}
function setRotation(hand, rotation) {
    hand.style.setProperty('--rotation', rotation * 360)
}
setInterval(setClock, 1000)
setClock()