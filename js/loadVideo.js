function loadVideo1() {
  if (!document.getElementById('image1')) {
    var videoEl = document.getElementById('video1');
    var playing = !!(videoEl.currentTime > 0 && !videoEl.paused && !videoEl.ended && videoEl.readyState > 2);
    if (playing) {
      videoEl.pause();
    }
    else {
      videoEl.play();
    }
  }
  else {
    // Replace image with video
    const main = document.getElementById('image1');
    const original = document.getElementById('video1');
    const clone = original.cloneNode(true);
    main.replaceWith(clone);

    // Play video
    var videoEl = document.getElementById('video1');
    videoEl.removeAttribute("hidden");
    var sourceEl = videoEl.getElementsByTagName('source')[0];
    sourceEl.src = 'https://drive.google.com/uc?export=download&id=1Kyg0XBDSdVuFOFmrFC0qPEJfLCisLgmW';
    //sourceEl.src = "https://youtu.be/DzwUcX5AfhM";
    videoEl.load();
    videoEl.play();
  }
}
