class Player {

  constructor() {
    this.isPlaying = false;
    this.isMute = false;

    this.video = document.querySelector('.videoContainer__video');

    this.playOverlay = document.querySelector('.videoContainer__playOverlay');

    this.playOverlayButton = document.querySelector('.videoContainer__playOverlayImage');

    this.playButton = document.querySelector('.playButton');
    this.muteButton = document.querySelector('.muteButton');
    this.fullscreenButton = document.querySelector('.fullscreenButton');
    this.forwardButton = document.querySelector('.forwardButton');
    this.backwardButton = document.querySelector('.backwardButton');

    this.playButton.addEventListener('click', this.play.bind(this));
    this.muteButton.addEventListener('click', this.mute.bind(this));
    this.fullscreenButton.addEventListener('click', this.fullscreen.bind(this));
    this.forwardButton.addEventListener('click', this.forward.bind(this));
    this.backwardButton.addEventListener('click', this.backward.bind(this));
    this.playOverlayButton.addEventListener('click', this.play.bind(this));
   }
  load() {
    //this.video.play();
  }

  play() {
    if (this.isPlaying){
      this.video.pause();
      this.playButton.src = 'img/play.svg';
      this.playOverlay.style.display = "block";
    } else {
        this.video.play();
        this.playButton.src = 'img/pause.svg';
        this.playOverlay.style.display = "none";

    }
    this.isPlaying = !this.isPlaying;
  }

  mute() {
    if (this.video.muted){
      this.video.muted = false;
      this.muteButton.src = 'img/mute.svg';
    } else {
      this.video.muted = true;
      this.muteButton.src = 'img/unmute.svg';
    }
    this.isMute = !this.isMute;
  }

  fullscreen() {
    this.video.webkitRequestFullScreen();
  }

  forward() {
    this.video.currentTime = this.video.currentTime + 3;
  }

  backward() {
    this.video.currentTime = this.video.currentTime - 3;
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const p = new Player();
  p.load();
});
