"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainPage = function () {
  function MainPage() {
    _classCallCheck(this, MainPage);

    console.log("hi");
  }

  _createClass(MainPage, [{
    key: "load",
    value: function load() {}
  }]);

  return MainPage;
}();

document.addEventListener('DOMContentLoaded', function () {
  var Main = new MainPage();
  Main.load();
});

//# sourceMappingURL=script-compiled.js.map