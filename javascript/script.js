let audio = document.getElementById("audio");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let stop = document.getElementById("stop");
let VolUp = document.getElementById("VolUp");
let VolDn = document.getElementById("VolDn");

play.addEventListener ("click", playAudio);
pause.addEventListener ("click", pauseAudio);
stop.addEventListener ("click", stopAudio);
VolUp.addEventListener ("click", volumeUp);
VolDn.addEventListener ("click", volumeDown);

let volume = 1.0;

function volumeUp() {
    volume += 0.1;
    if (volume > 1.0) {
        volume = 1.0;
    }
    audio.volume = volume;
}

function volumeDn() {
    volume -= 0.1;
    if (volume < 0.0) {
        volume = 0.0;
    }
    audio.volume = volume;
}

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function stopAudio() {
    audio.currentTime = 0;
    audio.pause();

}



