"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _framerMotion = require("framer-motion");
const TextVariant = _ref => {
  let {
    delay,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(_framerMotion.motion.div, {
    initial: {
      y: -50,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    },
    transition: {
      type: "spring",
      duration: 1.25,
      delay: delay
    }
  }, children);
};
var _default = TextVariant;
exports.default = _default;