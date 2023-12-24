exports.id = 1288;
exports.ids = [1288];
exports.modules = {

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