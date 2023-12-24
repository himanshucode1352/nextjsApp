exports.id = 5400;
exports.ids = [5400];
exports.modules = {

/***/ 5400:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(253);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6616);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





const Dmitrabanner = () => {
  // Popup Video
  const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "mitra-banner-aera"
  }, __jsx("div", {
    className: "d-table"
  }, __jsx("div", {
    className: "d-table-cell"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6"
  }, __jsx("div", {
    className: "banner-text bt-play"
  }, __jsx((react_wow__WEBPACK_IMPORTED_MODULE_2___default()), {
    animation: "fadeInUp",
    delay: "1s"
  }, __jsx("div", {
    className: "banner-btn"
  }, __jsx("div", {
    onClick: e => {
      e.preventDefault();
      openModal();
    },
    className: "default-btn active popup-youtube"
  }, "Play Now")))))))))), __jsx((react_modal_video__WEBPACK_IMPORTED_MODULE_3___default()), {
    channel: "youtube",
    isOpen: !isOpen,
    videoId: "bk7McNUjWgw",
    onClose: () => setIsOpen(!isOpen)
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Dmitrabanner);

/***/ })

};
;