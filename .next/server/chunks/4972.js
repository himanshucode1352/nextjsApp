exports.id = 4972;
exports.ids = [4972,1288];
exports.modules = {

/***/ 9577:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const FunFactStyleOne = () => {
  return __jsx("div", {
    className: "counter-area pt-100 pb-70"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-3 col-sm-6"
  }, __jsx("div", {
    className: "single-counter"
  }, __jsx("i", {
    className: "flaticon-man"
  }), __jsx("h2", null, "540 ", __jsx("span", {
    className: "target"
  }, "+")), __jsx("p", null, "Premium Members"))), __jsx("div", {
    className: "col-lg-3 col-sm-6"
  }, __jsx("div", {
    className: "single-counter"
  }, __jsx("i", {
    className: "flaticon-tick"
  }), __jsx("h2", null, "990 ", __jsx("span", {
    className: "target"
  }, "+")), __jsx("p", null, "Successful Story"))), __jsx("div", {
    className: "col-lg-3 col-sm-6"
  }, __jsx("div", {
    className: "single-counter"
  }, __jsx("i", {
    className: "flaticon-trophy"
  }), __jsx("h2", null, "3500 ", __jsx("span", {
    className: "traget"
  }, "+")), __jsx("p", null, "Badminton Courts"))), __jsx("div", {
    className: "col-lg-3 col-sm-6"
  }, __jsx("div", {
    className: "single-counter"
  }, __jsx("i", {
    className: "flaticon-experience"
  }), __jsx("h2", null, "54 ", __jsx("span", {
    className: "traget"
  }, "+")), __jsx("p", null, "Qualified Trainers"))))), __jsx("div", {
    className: "shape-wrap"
  }, __jsx("div", {
    className: "shape-1"
  }, __jsx("img", {
    src: "/img/shape/counter-shape.png",
    alt: "Image"
  })), __jsx("div", {
    className: "shape-2"
  }, __jsx("img", {
    src: "/img/shape/counter-shape.png",
    alt: "Image"
  }))));
};

/* harmony default export */ __webpack_exports__["Z"] = (FunFactStyleOne);

/***/ }),

/***/ 1288:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

 // import  ModalVideo from 'react-modal-video';

const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
  imgClass
}) => {
  // // video modal
  // const [isOpen, setIsOpen] = React.useState(true);
  // const openModal = () => {
  //     setIsOpen(!isOpen);
  // }
  return __jsx("div", {
    className: `page-title-area ${imgClass}`
  }, __jsx("div", {
    className: "d-table"
  }, __jsx("div", {
    className: "d-table-cell"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "page-title-content"
  }, __jsx("h2", null, pageTitle), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: homePageUrl
  }, __jsx("a", null, homePageText))), __jsx("li", {
    className: "active"
  }, activePageText)))))));
};

/* harmony default export */ __webpack_exports__["Z"] = (PageBanner);

/***/ })

};
;