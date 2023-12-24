exports.id = "utils_ActiveLink_js";
exports.ids = ["utils_ActiveLink_js"];
exports.modules = {

/***/ "./utils/ActiveLink.js":
/*!*****************************!*\
  !*** ./utils/ActiveLink.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\deepa\\OneDrive\\Documents\\rohit\\hotal\\nextjs\\utils\\ActiveLink.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 12
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = ((0,next_router__WEBPACK_IMPORTED_MODULE_1__.withRouter)(ActiveLink));

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3JmLy4vdXRpbHMvQWN0aXZlTGluay5qcyIsIndlYnBhY2s6Ly9jb3JmL2lnbm9yZWR8QzpcXFVzZXJzXFxkZWVwYVxcT25lRHJpdmVcXERvY3VtZW50c1xccm9oaXRcXGhvdGFsXFxuZXh0anNcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJBY3RpdmVMaW5rIiwicm91dGVyIiwiY2hpbGRyZW4iLCJwcm9wcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjbGFzc05hbWUiLCJwYXRobmFtZSIsImhyZWYiLCJhY3RpdmVDbGFzc05hbWUiLCJ0cmltIiwiUmVhY3QiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLFVBQW9DO0FBQUEsTUFBbkM7QUFBRUMsVUFBRjtBQUFVQztBQUFWLEdBQW1DO0FBQUEsTUFBWkMsS0FBWTs7QUFDbkQsUUFBTUMsS0FBSyxHQUFHQyxnREFBQSxDQUFjSCxRQUFkLENBQWQ7QUFFQSxNQUFJSSxTQUFTLEdBQUdGLEtBQUssQ0FBQ0QsS0FBTixDQUFZRyxTQUFaLElBQXlCLEVBQXpDOztBQUNBLE1BQUlMLE1BQU0sQ0FBQ00sUUFBUCxLQUFvQkosS0FBSyxDQUFDSyxJQUExQixJQUFrQ0wsS0FBSyxDQUFDTSxlQUE1QyxFQUE2RDtBQUN6REgsYUFBUyxHQUFJLEdBQUVBLFNBQVUsSUFBR0gsS0FBSyxDQUFDTSxlQUFnQixFQUF0QyxDQUF3Q0MsSUFBeEMsRUFBWjtBQUNIOztBQUVELFNBQU9QLEtBQUssQ0FBQ00sZUFBYjtBQUVBLFNBQU8sTUFBQyxrREFBRCxlQUFVTixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWtCUSx5REFBQSxDQUFtQlAsS0FBbkIsRUFBMEI7QUFBRUU7QUFBRixHQUExQixDQUFsQixDQUFQO0FBQ0gsQ0FYRDs7QUFhQSwrREFBZU0sdURBQVUsQ0FBQ1osVUFBRCxDQUF6QixFOzs7Ozs7Ozs7O0FDakJBLGUiLCJmaWxlIjoidXRpbHNfQWN0aXZlTGlua19qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBY3RpdmVMaW5rID0gKHsgcm91dGVyLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gY2hpbGQucHJvcHMuY2xhc3NOYW1lIHx8ICcnO1xuICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09IHByb3BzLmhyZWYgJiYgcHJvcHMuYWN0aXZlQ2xhc3NOYW1lKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gJHtwcm9wcy5hY3RpdmVDbGFzc05hbWV9YC50cmltKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlIHByb3BzLmFjdGl2ZUNsYXNzTmFtZTtcblxuICAgIHJldHVybiA8TGluayB7Li4ucHJvcHN9PntSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHsgY2xhc3NOYW1lIH0pfTwvTGluaz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFjdGl2ZUxpbmspOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=