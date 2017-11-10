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
      //this.video.play();
    }
  }, {
    key: 'play',
    value: function play() {
      if (this.isPlaying) {
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
  var p = new Player();
  p.load();
});

//# sourceMappingURL=VideoPlayerScript-compiled.js.map