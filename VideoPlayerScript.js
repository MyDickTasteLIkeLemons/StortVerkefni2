class Player {
  constructor(id) {
    // videos fylkið er frá 0 til n-1 en ids eru frá 1 til n
    this.id = id - 1;
    this.url = 'videos.json';
    this.videos = null;
    this.categories = null;

    this.isPlaying = false;
    this.isMute = false;

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
  }

  showLoad() {
    console.log('start loading');
  }
  hideLoad() {
    console.log('stop loading');
  }
  showError(e) {
    console.log('error');
    console.log(e);
  }

  loadHTML() {
    console.log('loading data');

    const headerText = this.videos[this.id].title;
    const img = this.videos[this.id].poster;
    const source = this.videos[this.id].video;

    const wrapper = document.querySelector('.videoContainer__wrapper');

    // create header
    const header = document.createElement('h1');
    header.className = 'videoContainer__header';
    const headerNode = document.createTextNode(headerText);
    header.appendChild(headerNode);

    wrapper.appendChild(header);

    // create videoImg
    const videoImg = document.createElement('div');
    videoImg.className = 'videoContainer__videoImg';

    const video = document.createElement('video');
    video.className = 'videoContainer__video';
    video.poster = img;

    const videoSource = document.createElement('source');
    videoSource.src = source;
    videoSource.type = 'video/mp4';

    video.appendChild(videoSource);
    videoImg.appendChild(video);

    // create playOverlay
    const playOverlay = document.createElement('div');
    playOverlay.className = 'videoContainer__playOverlay';

    const playOverlayImage = document.createElement('img');
    playOverlayImage.className = 'videoContainer__playOverlayImage';
    playOverlayImage.src = 'img/play.svg';

    playOverlay.appendChild(playOverlayImage);

    videoImg.appendChild(playOverlay);

    wrapper.appendChild(videoImg);
  }

  preparePlayer() {
    this.video = document.querySelector('.videoContainer__video');
    this.playOverlay = document.querySelector('.videoContainer__playOverlay');
    this.playOverlayButton = document.querySelector('.videoContainer__playOverlayImage');
    this.playOverlayButton.addEventListener('click', this.play.bind(this));
  }

  load() {
    const request = new XMLHttpRequest();

    this.showLoad();
    request.open('GET', this.url, true);
    request.onload = () => {
      this.hideLoad();
      const data = JSON.parse(request.response);
      if (request.status >= 200 && request.status < 400) {
        [this.categories, this.videos] = [data.categories, data.videos];
        this.loadHTML();
        this.preparePlayer();
      } else {
        this.showError(data.error);
      }
    };
    request.onerror = () => {
      this.showError('Óþekkt villa');
    };
    request.send();
  }

  play() {
    if (this.isPlaying) {
      this.video.pause();
      this.playButton.src = 'img/play.svg';
      this.playOverlay.classList.remove('hidden');
      // this.playOverlay.style.display = 'block';
    } else {
      this.video.play();
      this.playButton.src = 'img/pause.svg';
      this.playOverlay.classList.add('hidden');
      // this.playOverlay.style.display = 'none';
    }
    this.isPlaying = !this.isPlaying;
  }

  mute() {
    if (this.video.muted) {
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

function onPage(page) {
  return window.location.pathname.toLowerCase() === (page).toLowerCase();
}

document.addEventListener('DOMContentLoaded', () => {
  if (onPage('/VideoPage.html')) {
    const id = window.location.href.split('?')[1].split('=')[1];
    const p = new Player(id);
    p.load();
    console.log('after load call');
  }
});
