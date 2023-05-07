"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _framerMotion = require("framer-motion");
const FadeIn = _ref => {
  let {
    direction,
    type,
    delay,
    duration,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(_framerMotion.motion.div, {
    initial: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1
    },
    transition: {
      type: type,
      delay: delay,
      duration: duration,
      ease: "easeOut"
    }
  }, children);
};
var _default = FadeIn;
exports.default = _default;