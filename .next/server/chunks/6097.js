exports.id = 6097;
exports.ids = [6097];
exports.modules = {

/***/ 6097:
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
    modules: ["..\\components\\Common\\DoctorsStyleOne.js -> " + 'react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  margin: 30,
  center: true,
  dots: false,
  smartSpeed: 1500,
  navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
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

const DoctorsStyleOne = () => {
  const [display, setDisplay] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    setDisplay(true);
  }, []);
  return __jsx("div", {
    className: "doctors-area pt-100 pb-70"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "section-title"
  }, __jsx("span", {
    className: "top-title"
  }, "Our Doctor"), __jsx("h2", null, "Our Specialist Doctors"), __jsx("p", null, "We have hand-pick doctors who are experienced in their field with experience of more than 10 years in their respective fields. Our Doctors will provide you high quality video consultation and detailed prescription.")), display ? __jsx(OwlCarousel, _extends({
    className: "doctors-wrap owl-carousel owl-theme"
  }, options), __jsx("div", {
    className: "single-doctor"
  }, __jsx("img", {
    src: "/img/doctors/doctor1.png",
    alt: "Image"
  }), __jsx("h3", null, "Dr. Jelin Alis"), __jsx("span", {
    className: "top-title"
  }, "Cardiologist"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodin"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#",
    target: "_blank"
  }, __jsx("i", {
    className: "bx bxl-facebook"
  }))), __jsx("li", null, __jsx("a", {
    href: "#",
    target: "_blank"
  }, __jsx("i", {
    className: "bx bxl-twitter"
  }))), __jsx("li", null, __jsx("a", {
    href: "#",
    target: "_blank"
  }, __jsx("i", {
    className: "bx bxl-pinterest-alt"
  }))), __jsx("li", null, __jsx("a", {
    href: "#",
    target: "_blank"
  }, __jsx("i", {
    className: "bx bxl-instagram"
  }))))), __jsx("div", {
    className: "single-doctor"
  }, __jsx("img", {
    src: "/img/doctors/doctor2.png",
    alt: "Image"
  }), __jsx("h3", null, "Dr. Jemse Watson"), __jsx("span", {
    className: "top-title"
  }, "Necrologist"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodin"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#",
    target: "_blank"
  }, __jsx("i", {
    className: "bx bxl-facebook"
  }))), __jsx("li", null, __jsx("a", {
    href: "#",
    target: "_blank"
  }, __jsx("i", {
    className: "bx bxl-twitter"
  }))), __jsx("li", null, __jsx("a", {
    href: "#",
    target: "_blank"
  }, __jsx("i", {
    className: "bx bxl-pinterest-alt"
  }))), __jsx("li", null, __jsx("a", {
    href: "#",
    target: "_blank"
  }, __jsx("i", {
    className: "bx bxl-instagram"
  }))))), __jsx("div", {
    className: "single-doctor"
  }, __jsx("img", {
    src: "/img/doctors/doctor3.png",
    alt: "Image"
  }), __jsx("h3", null, "Dr. Neels Bore"), __jsx("span", {
    className: "top-title"
  }, "Surgery Specialist"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodin"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#",
    target: "_blank"
  }, __jsx("i", {
    className: "bx bxl-facebook"
  }))), __jsx("li", null, __jsx("a", {
    href: "#",
    target: "_blank"
  }, __jsx("i", {
    className: "bx bxl-twitter"
  }))), __jsx("li", null, __jsx("a", {
    href: "#",
    target: "_blank"
  }, __jsx("i", {
    className: "bx bxl-pinterest-alt"
  }))), __jsx("li", null, __jsx("a", {
    href: "#",
    target: "_blank"
  }, __jsx("i", {
    className: "bx bxl-instagram"
  }))))), __jsx("div", {
    className: "single-doctor"
  }, __jsx("img", {
    src: "/img/doctors/doctor11.png",
    alt: "Image"
  }), __jsx("h3", null, "Dr. Kilva Alis"), __jsx("span", {
    className: "top-title"
  }, "Cardiologist"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodin"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#",
    target: "_blank"
  }, __jsx("i", {
    className: "bx bxl-facebook"
  }))), __jsx("li", null, __jsx("a", {
    href: "#",
    target: "_blank"
  }, __jsx("i", {
    className: "bx bxl-twitter"
  }))), __jsx("li", null, __jsx("a", {
    href: "#",
    target: "_blank"
  }, __jsx("i", {
    className: "bx bxl-pinterest-alt"
  }))), __jsx("li", null, __jsx("a", {
    href: "#",
    target: "_blank"
  }, __jsx("i", {
    className: "bx bxl-instagram"
  })))))) : ''));
};

/* harmony default export */ __webpack_exports__["Z"] = (DoctorsStyleOne);

/***/ })

};
;