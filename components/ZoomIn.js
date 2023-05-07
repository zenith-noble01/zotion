"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _framerMotion = require("framer-motion");
const ZoomIn = _ref => {
  let {
    delay,
    duration,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(_framerMotion.motion.div, {
    initial: {
      scale: 0,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1
    },
    transition: {
      type: "tween",
      delay: delay,
      duration: duration,
      ease: "easeOut"
    }
  }, children);
};
var _default = ZoomIn;
exports.default = _default;