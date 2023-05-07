"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _framerMotion = require("framer-motion");
const StaggerContainer = _ref => {
  let {
    staggerChildren,
    delayChildren,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(_framerMotion.motion.div, {
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0
      }
    }
  }, children);
};
var _default = StaggerContainer;
exports.default = _default;