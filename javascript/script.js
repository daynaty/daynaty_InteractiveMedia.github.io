let audio = document.getElementById("audio");
let message = document.getElementById("message");

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let Stop = document.getElementById("Stop");
let VolUp = document.getElementById("VolUp");
let VolDn = document.getElementById("VolDn");

play.addEventListener ("click", playAudio);
pause.addEventListener ("click", pauseAudio);
Stop.addEventListener ("click", stopAudio);
VolUp.addEventListener ("click", volumeUp);
VolDn.addEventListener ("click", volumeDown);

let volume = 1.0;

function volumeUp() {
    volume += 0.1;
    if (volume > 1.0) {
        volume = 1.0;
    }
    audio.volume = volume;
    updateMessage();
}

function volumeDown() {
    volume -= 0.1;
    if (volume < 0.0) {
        volume = 0.0;
    }
    audio.volume = volume;
    updateMessage();
}

function playAudio() {
    audio.play();
    updateMessage();
}

function pauseAudio() {
    audio.pause();
    updateMessage();
}

function stopAudio() {
    audio.currentTime = 0;
    audio.pause();
    updateMessage();
}

function updateMessage() {
    message.innerHTML = "Time: " + audio.currentTime;
    message.innerHTML += "<br>";
    message.innerHTML += "Volume: " + audio.volume;
}

let video = document.getElementById("video");
let videoMessage = document.getElementById ("videoMessage");

let playVid = document.getElementById ("playVideo");
let pauseVid = document.getElementById ("pauseVideo");
let StopVid = document.getElementById ("StopVideo");

playVid.addEventListener ("click", playVideo);
pauseVid.addEventListener ("click", pauseVideo);
StopVid.addEventListener ("click", StopVideo);

function playVideo () {
    video.play();
    updatevideoMessage();
}

function pauseVideo () {
    video.pause();
    updatevideoMessage();
}

function StopVideo () {
    video.currentTime = 0;
    video.pause()
    updatevideoMessage();
}

function updatevideoMessage () {
    videoMessage.innerHTML = "Time: " + video.currentTime;
}

let change1 = document.getElementById ("changeImage1");
let change2 = document.getElementById ("changeImage2");

change1.addEventListener ("click", changeImage1);
change2.addEventListener ("click", changeImage2);

function changeImage1() {
    document.getElementById ("toChange1").src = "images/IMG_2767.jpeg"
}

function changeImage2 () {
    document.getElementById ("toChange2").src = "images/IMG_2813.jpeg"
}
