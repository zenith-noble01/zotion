"use strict";

var _framerMotion = require("framer-motion");
const SlideIn = _ref => {
  let {
    direction,
    type,
    delay,
    duration,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(_framerMotion.motion.div, {
    initial: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0
    },
    animate: {
      x: 0,
      y: 0
    },
    transition: {
      type: type,
      delay: delay,
      duration: duration,
      ease: "easeOut"
    }
  }, children);
};