    function music(play) {
    if (play === 'play') {
        audio = document.getElementById('audio');
        audio.play();
    } else if (play === 'stop') {
        audio = document.getElementById('audio');
        audio.pause();
    }
}
function vid(play) {
    if (play === 'play') {
        video = document.getElementById('video');
        video.play();
    } else if (play === 'stop') {
        video = document.getElementById('video');
        video.pause();
    }
}