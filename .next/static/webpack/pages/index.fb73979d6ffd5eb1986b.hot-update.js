self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/HomeOne/MainBanner.js":
/*!******************************************!*\
  !*** ./components/HomeOne/MainBanner.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_deepa_OneDrive_Documents_rohit_hotal_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-wow */ "./node_modules/react-wow/dist/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\deepa\\OneDrive\\Documents\\rohit\\hotal\\nextjs\\components\\HomeOne\\MainBanner.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);





var MainBanner = function MainBanner() {
  _s();

  // Popup Video
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true),
      _React$useState2 = (0,C_Users_deepa_OneDrive_Documents_rohit_hotal_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var openModal = function openModal() {
    setIsOpen(!isOpen);
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "main-banner-area",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "d-table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "d-table-cell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("video", {
    className: "depicter-bg-video",
    width: "100%",
    height: "100%",
    autoPlay: true,
    loop: true,
    muted: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, __jsx("source", {
    src: "/img/about/bttc_2021.mp4",
    type: "video/mp4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), "Your browser does not support the video tag."))))), __jsx(react_modal_video__WEBPACK_IMPORTED_MODULE_4__.default, {
    channel: "youtube",
    isOpen: !isOpen,
    videoId: "bk7McNUjWgw",
    onClose: function onClose() {
      return setIsOpen(!isOpen);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }));
};

_s(MainBanner, "mEi83NlPXQzy/XIDfTYWzOSvaHw=");

_c = MainBanner;
/* harmony default export */ __webpack_exports__["default"] = (MainBanner);

var _c;

$RefreshReg$(_c, "MainBanner");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lT25lL01haW5CYW5uZXIuanMiXSwibmFtZXMiOlsiTWFpbkJhbm5lciIsIlJlYWN0IiwiaXNPcGVuIiwic2V0SXNPcGVuIiwib3Blbk1vZGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUN2QjtBQUR1Qix3QkFFS0MscURBQUEsQ0FBZSxJQUFmLENBRkw7QUFBQTtBQUFBLE1BRWhCQyxNQUZnQjtBQUFBLE1BRVJDLFNBRlE7O0FBR3ZCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJELGFBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDRCxHQUZEOztBQUdBLFNBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLG1CQURaO0FBRUUsU0FBSyxFQUFDLE1BRlI7QUFHRSxVQUFNLEVBQUMsTUFIVDtBQUlFLFlBQVEsTUFKVjtBQUtFLFFBQUksTUFMTjtBQU1FLFNBQUssTUFOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUU7QUFBUSxPQUFHLEVBQUMsMEJBQVo7QUFBdUMsUUFBSSxFQUFDLFdBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixpREFERixDQURGLENBREYsQ0FERixDQURGLEVBc0JFLE1BQUMsc0RBQUQ7QUFDRSxXQUFPLEVBQUMsU0FEVjtBQUVFLFVBQU0sRUFBRSxDQUFDQSxNQUZYO0FBR0UsV0FBTyxFQUFDLGFBSFY7QUFJRSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsS0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEJGLENBREY7QUErQkQsQ0FyQ0Q7O0dBQU1GLFU7O0tBQUFBLFU7QUF1Q04sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmI3Mzk3OWQ2ZmZkNWViMTk4NmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdFdPVyBmcm9tIFwicmVhY3Qtd293XCI7XG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tIFwicmVhY3QtbW9kYWwtdmlkZW9cIjtcblxuY29uc3QgTWFpbkJhbm5lciA9ICgpID0+IHtcbiAgLy8gUG9wdXAgVmlkZW9cbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1iYW5uZXItYXJlYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtdGFibGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtdGFibGUtY2VsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgPHZpZGVvXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVwaWN0ZXItYmctdmlkZW9cIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICAgICAgICBsb29wXG4gICAgICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiL2ltZy9hYm91dC9idHRjXzIwMjEubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cbiAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogSWYgeW91IHdhbnQgdG8gY2hhbmdlIHRoZSB2aWRlbyBuZWVkIHRvIHVwZGF0ZSB2aWRlb0lEICovfVxuICAgICAgPE1vZGFsVmlkZW9cbiAgICAgICAgY2hhbm5lbD1cInlvdXR1YmVcIlxuICAgICAgICBpc09wZW49eyFpc09wZW59XG4gICAgICAgIHZpZGVvSWQ9XCJiazdNY05Valdnd1wiXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5CYW5uZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9