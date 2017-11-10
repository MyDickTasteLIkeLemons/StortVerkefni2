'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoContent = function () {
  function VideoContent() {
    _classCallCheck(this, VideoContent);

    this.url = 'videos.json';
    this.videos = null;
    this.categories = null;
    this.container = null;
  }

  _createClass(VideoContent, [{
    key: 'showLoad',
    value: function showLoad() {
      console.log('start loading');
    }
  }, {
    key: 'hideLoad',
    value: function hideLoad() {
      console.log('stop loading');
    }
  }, {
    key: 'showError',
    value: function showError(e) {
      console.log('error');
      console.log(e);
    }
  }, {
    key: 'displayCategory',
    value: function displayCategory(id) {
      var container = document.querySelector('main');
      var s = document.createElement('section');
      var h = document.createElement('h1');
      h.classList.add('category__header');
      h.innerHTML = this.categories[id].title;
      s.appendChild(h);

      for (var i = 0; i < this.categories[id].videos.length; i += 1) {
        var k = this.categories[id].videos[i] - 1;
        this.displayVideo(k, s);
      }
      container.appendChild(s);
    }
  }, {
    key: 'displayVideo',
    value: function displayVideo(id, container) {
      var v = document.createElement('div');
      v.classList.add('video');
      var vimg = document.createElement('div');
      vimg.classList.add('video__img');
      var img = document.createElement('img');
      img.src = this.videos[id].poster;
      img.alt = this.videos[id].title;
      var vd = document.createElement('div');
      vd.classList.add('video__duration');
      vd.innerHTML = this.duration(this.videos[id].duration);
      vimg.appendChild(img);
      vimg.appendChild(vd);
      var vinfo = document.createElement('div');
      vinfo.classList.add('video__info');
      var h = document.createElement('h2');
      h.innerHTML = this.videos[id].title;
      var p = document.createElement('p');
      p.innerHTML = this.howLong(this.videos[id].created);
      vinfo.appendChild(h);
      vinfo.appendChild(p);
      v.appendChild(vimg);
      v.appendChild(vinfo);
      container.appendChild(v);
    }
  }, {
    key: 'duration',
    value: function duration(x) {
      var dur = x;
      var mins = Math.floor(dur / 60);
      dur %= 60;
      var secs = Math.floor(dur);

      if (secs < 10) {
        return mins + ':0' + secs;
      }
      return mins + ':' + secs;
    }
  }, {
    key: 'howLong',
    value: function howLong(x) {
      var t = Date.now() - x;
      var days = Math.floor(t / (60 * 60 * 24));

      return 'Fyrir ' + days + ' d\xF6gum';
    }
  }, {
    key: 'loadContent',
    value: function loadContent() {
      this.getJSON();
    }
  }, {
    key: 'getJSON',
    value: function getJSON() {
      var _this = this;

      var request = new XMLHttpRequest();

      this.showLoad();
      request.open('GET', this.url, true);
      request.onload = function () {
        _this.hideLoad();
        var data = JSON.parse(request.response);
        if (request.status >= 200 && request.status < 400) {
          var _ref = [data.categories, data.videos];
          _this.categories = _ref[0];
          _this.videos = _ref[1];

          for (var i = 0; i < _this.categories.length; i += 1) {
            _this.displayCategory(i);
          }
        }
        _this.showError(data.error);
      };
      request.onerror = function () {
        _this.showError('Óþekkt villa');
      };
      request.send();
    }
  }]);

  return VideoContent;
}();

document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.split('?')[0] == "/") {

    var videoContent = new VideoContent();
    videoContent.loadContent('videos.json');
  }
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player() {
    _classCallCheck(this, Player);

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

  _createClass(Player, [{
    key: 'load',
    value: function load() {
      // this.video.play();
    }
  }, {
    key: 'play',
    value: function play() {
      if (this.isPlaying) {
        this.video.pause();
        this.playButton.src = 'img/play.svg';
        this.playOverlay.style.display = 'block';
      } else {
        this.video.play();
        this.playButton.src = 'img/pause.svg';
        this.playOverlay.style.display = 'none';
      }
      this.isPlaying = !this.isPlaying;
    }
  }, {
    key: 'mute',
    value: function mute() {
      if (this.video.muted) {
        this.video.muted = false;
        this.muteButton.src = 'img/mute.svg';
      } else {
        this.video.muted = true;
        this.muteButton.src = 'img/unmute.svg';
      }
      this.isMute = !this.isMute;
    }
  }, {
    key: 'fullscreen',
    value: function fullscreen() {
      this.video.webkitRequestFullScreen();
    }
  }, {
    key: 'forward',
    value: function forward() {
      this.video.currentTime = this.video.currentTime + 3;
    }
  }, {
    key: 'backward',
    value: function backward() {
      this.video.currentTime = this.video.currentTime - 3;
    }
  }]);

  return Player;
}();

document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.split('?')[0] == "/VideoPage.html") {

    var p = new Player();
    p.load();
  }
});

//# sourceMappingURL=script-compiled.js.map