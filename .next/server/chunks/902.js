exports.id = 902;
exports.ids = [902];
exports.modules = {

/***/ 902:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 1832, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1832)],
    modules: ["..\\components\\Common\\TestimonialStyleOne.js -> " + 'react-owl-carousel3']
  }
});
const options = {
  loop: true,
  margin: 0,
  nav: false,
  mouseDrag: true,
  dots: false,
  autoplay: true,
  smartSpeed: 1500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      margin: 10
    },
    576: {
      items: 1
    },
    768: {
      items: 2,
      margin: 20
    },
    992: {
      items: 2
    },
    1200: {
      items: 2
    }
  }
};

const TestimonialStyleOne = () => {
  const [display, setDisplay] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    setDisplay(true);
  }, []);
  return __jsx("div", {
    className: "client-area c-bg pt-100 pb-70"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "section-title"
  }, __jsx("span", {
    className: "top-title"
  }, "Testimonials"), __jsx("h2", null, "What Our Client\u2019s Say"), __jsx("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus.")), display ? __jsx(OwlCarousel, _extends({
    className: "client-wrap owl-carousel owl-theme"
  }, options), __jsx("div", {
    className: "single-client"
  }, __jsx("img", {
    src: "/img/client/client1.jpg",
    alt: "img"
  }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting ipsum dolor sit amet, consectetur"), __jsx("ul", null, __jsx("li", null, __jsx("i", {
    className: "bx bxs-star"
  })), __jsx("li", null, __jsx("i", {
    className: "bx bxs-star"
  })), __jsx("li", null, __jsx("i", {
    className: "bx bxs-star"
  })), __jsx("li", null, __jsx("i", {
    className: "bx bxs-star"
  })), __jsx("li", null, __jsx("i", {
    className: "bx bxs-star"
  }))), __jsx("h3", null, "Steven Jony"), __jsx("span", null, "CEO of Company")), __jsx("div", {
    className: "single-client"
  }, __jsx("img", {
    src: "/img/client/client2.jpg",
    alt: "img"
  }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting ipsum dolor sit amet, consectetur"), __jsx("ul", null, __jsx("li", null, __jsx("i", {
    className: "bx bxs-star"
  })), __jsx("li", null, __jsx("i", {
    className: "bx bxs-star"
  })), __jsx("li", null, __jsx("i", {
    className: "bx bxs-star"
  })), __jsx("li", null, __jsx("i", {
    className: "bx bxs-star"
  })), __jsx("li", null, __jsx("i", {
    className: "bx bxs-star"
  }))), __jsx("h3", null, "Omit Jacson"), __jsx("span", null, "Company Founder"))) : ''));
};

/* harmony default export */ __webpack_exports__["Z"] = (TestimonialStyleOne);

/***/ })

};
;