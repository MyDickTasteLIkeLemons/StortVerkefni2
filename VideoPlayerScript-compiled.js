"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player() {
    _classCallCheck(this, Player);

<<<<<<< HEAD
    console.log("hello");
=======
    console.log("hi dwdwd");
>>>>>>> 598fbd78b3f18ab2717dee0766c4483725f47eb5
  }

  _createClass(Player, [{
    key: "load",
    value: function load() {}
  }]);

  return Player;
}();

document.addEventListener('DOMContentLoaded', function () {
  var p = new Player();
  p.load();
});

//# sourceMappingURL=VideoPlayerScript-compiled.js.map