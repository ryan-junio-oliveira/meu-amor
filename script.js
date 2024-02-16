var audioPlayer = document.getElementById("audioPlayer");

startPlayback();

function startPlayback() {
    audioPlayer.play();
}

window.addEventListener('DOMContentLoaded', function () {
    document.getElementById("iniciar").click();
    startPlayback();
});

audioPlayer.addEventListener("ended", function () {
    playNext();
});

function playNext() {
    var currentSource = audioPlayer.currentSrc;
    var sources = audioPlayer.getElementsByTagName("source");

    for (var i = 0; i < sources.length; i++) {
        if (sources[i].src !== currentSource) {
            audioPlayer.src = sources[i].src;
            audioPlayer.load();
            audioPlayer.play();
            break;
        }
    }
}