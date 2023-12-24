exports.id = 8987;
exports.ids = [8987];
exports.modules = {

/***/ 8987:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 1832, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1832)],
    modules: ["demovideo.js -> " + 'react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  margin: 30,
  center: true,
  dots: true,
  smartSpeed: 1500,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 3
    }
  }
};

const Demovideo = () => {
  const [display, setDisplay] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    setDisplay(true);
  }, []);
  return __jsx("div", {
    className: "our-work-area ptb-100"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "section-title"
  }, __jsx("span", {
    className: "top-title"
  }, "Our Works"), __jsx("h2", null, "Our Intensive Care Unit"), __jsx("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus.")), display ? __jsx(OwlCarousel, _extends({
    className: "work-wrap owl-carousel owl-theme"
  }, options), __jsx("div", {
    className: "single-work"
  }, __jsx("iframe", {
    width: "100%",
    height: "200",
    src: "https://www.youtube.com/embed/v3FtIL6xe-Y",
    title: "YouTube video player",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;",
    allowfullscreen: true
  })), __jsx("div", {
    className: "single-work"
  }, __jsx("iframe", {
    width: "100%",
    height: "200",
    src: "https://www.youtube.com/embed/_n46CX_-kLM",
    title: "YouTube video player",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; ",
    allowfullscreen: true
  })), __jsx("div", {
    className: "single-work"
  }, __jsx("iframe", {
    width: "100%",
    height: "200",
    src: "https://www.youtube.com/embed/ElbZAAHTkWc",
    title: "YouTube video player",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; ",
    allowfullscreen: true
  })), __jsx("div", {
    className: "single-work"
  }, __jsx("iframe", {
    width: "100%",
    height: "200",
    src: "https://www.youtube.com/embed/nhH1e51MBWA",
    title: "YouTube video player",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; ",
    allowfullscreen: true
  }))) : ''), __jsx("div", {
    className: "shape"
  }, __jsx("img", {
    src: "/img/shape/work-shape.png",
    alt: "Image"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Demovideo);

/***/ })

};
;