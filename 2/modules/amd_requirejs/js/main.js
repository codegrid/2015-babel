define(["exports", "./foo", "./bar"], function (exports, _foo, _bar) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var Foo = _interopRequire(_foo);

  var Bar = _interopRequire(_bar);

  var foo = new Foo();
  var bar = new Bar();
});
