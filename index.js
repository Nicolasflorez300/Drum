const crash = new Audio("sounds/crash.mp3");
const kick = new Audio("sounds/kick-bass.mp3");
const snare = new Audio("sounds/snare.mp3");
const tom1 = new Audio("sounds/tom-1.mp3");
const tom2 = new Audio("sounds/tom-2.mp3");
const tom3 = new Audio("sounds/tom-3.mp3");
const tom4 = new Audio("sounds/tom-4.mp3");


function crashSound() {
    crash.currentTime = 0;
    crash.play();
}

function kickSound() {
    kick.currentTime = 0;
    kick.play();
}

function snareSound() {
    snare.currentTime = 0;
    snare.play();
}

function tom1Sound() {
    tom1.currentTime = 0;
    tom1.play();
}

function tom2Sound() {
    tom2.currentTime = 0;
    tom2.play();
}

function tom3Sound() {
    tom3.currentTime = 0;
    tom3.play();
}

function tom4Sound() {
    tom4.currentTime = 0;
    tom4.play();
}


document.querySelector(".w").addEventListener("click", crashSound);
document.querySelector(".a").addEventListener("click", kickSound);
document.querySelector(".s").addEventListener("click", snareSound);
document.querySelector(".d").addEventListener("click", tom1Sound);
document.querySelector(".j").addEventListener("click", tom2Sound);
document.querySelector(".k").addEventListener("click", tom3Sound);
document.querySelector(".l").addEventListener("click", tom4Sound);


document.addEventListener("keydown", function(event) {

    if (event.key === "w") {
        crashSound();
    }

    if (event.key === "a") {
        kickSound();
    }

    if (event.key === "s") {
        snareSound();
    }

    if (event.key === "d") {
        tom1Sound();
    }

    if (event.key === "j") {
        tom2Sound();
    }

    if (event.key === "k") {
        tom3Sound();
    }

    if (event.key === "l") {
        tom4Sound();
    }

});