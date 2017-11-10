class VideoContent {
  constructor() {
    this.url = 'videos.json';
    this.videos = null;
    this.categories = null;
    this.container = null;
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
  displayCategory(id) {
    const container = document.querySelector('main');
    const s = document.createElement('section');
    const h = document.createElement('h1');
    h.classList.add('category__header');
    h.innerHTML = this.categories[id].title;
    s.appendChild(h);

    for (let i = 0; i < this.categories[id].videos.length; i += 1) {
      const k = this.categories[id].videos[i] - 1;
      this.displayVideo(k, s);
    }
    container.appendChild(s);
  }
  displayVideo(id, container) {
    const v = document.createElement('div');
    v.classList.add('video');
    const vimg = document.createElement('div');
    vimg.classList.add('video__img');
    const img = document.createElement('img');
    img.src = this.videos[id].poster;
    img.alt = this.videos[id].title;
    const vd = document.createElement('div');
    vd.classList.add('video__duration');
    vd.innerHTML = this.duration(this.videos[id].duration);
    vimg.appendChild(img);
    vimg.appendChild(vd);
    const vinfo = document.createElement('div');
    vinfo.classList.add('video__info');
    const h = document.createElement('h2');
    h.innerHTML = this.videos[id].title;
    const p = document.createElement('p');
    p.innerHTML = this.howLong(this.videos[id].created);
    vinfo.appendChild(h);
    vinfo.appendChild(p);
    v.appendChild(vimg);
    v.appendChild(vinfo);
    container.appendChild(v);
  }
  duration(x) {
    let dur = x;
    const mins = Math.floor(dur / 60);
    dur %= 60;
    const secs = Math.floor(dur);

    if (secs < 10) {
      return `${mins}:0${secs}`;
    }
    return `${mins}:${secs}`;
  }
  howLong(x) {
    const t = Date.now() - x;
    const days = Math.floor(t / (60 * 60 * 24));

    return `Fyrir ${days} dögum`;
  }
  loadContent() {
    this.getJSON();
  }
  getJSON() {
    const request = new XMLHttpRequest();

    this.showLoad();
    request.open('GET', this.url, true);
    request.onload = () => {
      this.hideLoad();
      const data = JSON.parse(request.response);
      if (request.status >= 200 && request.status < 400) {
        [this.categories, this.videos] = [data.categories, data.videos];
        for (let i = 0; i < this.categories.length; i += 1) {
          this.displayCategory(i);
        }
      }
      this.showError(data.error);
    };
    request.onerror = () => {
      this.showError('Óþekkt villa');
    };
    request.send();
  }
}

document.addEventListener('DOMContentLoaded', () => {
	if(window.location.pathname.split('?')[0] == "/"){
		
  const videoContent = new VideoContent();
  videoContent.loadContent('videos.json');
	}
});
