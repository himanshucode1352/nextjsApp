exports.id = 5938;
exports.ids = [5938];
exports.modules = {

/***/ 5938:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7895);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const header = () => {
  const [menu, setMenu] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  const classOne = menu ? "collapse navbar-collapse" : "collapse navbar-collapse show";
  const classTwo = menu ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("header", {
    className: "header-area fixed-top border-bottom"
  }, __jsx("div", {
    className: "nav-area"
  }, __jsx("div", {
    id: "navbar",
    className: "navbar-area"
  }, __jsx("div", {
    className: "main-nav"
  }, __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-light"
  }, __jsx("div", {
    className: "container-fluid"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "navbar-brand"
  }, __jsx("h3", {
    style: {
      fontSize: "25px"
    }
  }, "Logo"))), __jsx("button", {
    onClick: toggleNavbar,
    className: classTwo,
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, __jsx("span", {
    className: "icon-bar top-bar"
  }), __jsx("span", {
    className: "icon-bar middle-bar"
  }), __jsx("span", {
    className: "icon-bar bottom-bar"
  })), __jsx("div", {
    className: classOne,
    id: "navbarSupportedContent"
  }, __jsx("ul", {
    className: "navbar-nav",
    style: {
      marginRight: "auto"
    }
  }, __jsx("li", {
    className: "nav-item"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/",
    activeClassName: "active"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link"
  }, "User Name"))), __jsx("li", {
    className: "nav-item"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    activeClassName: "active"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link"
  }, "Account ", __jsx("i", {
    className: "bx bx-chevron-down"
  }))), __jsx("ul", {
    className: "dropdown-menu"
  }, __jsx("li", {
    className: "nav-item"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/about",
    activeClassName: "active"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link"
  }, "Overview"))), __jsx("li", {
    className: "nav-item"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/about",
    activeClassName: "active"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link"
  }, "Invoices"))))), __jsx("li", {
    className: "nav-item"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    activeClassName: "active"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link"
  }, "Booking ", __jsx("i", {
    className: "bx bx-chevron-down"
  }))), __jsx("ul", {
    className: "dropdown-menu"
  }, __jsx("li", {
    className: "nav-item"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/about",
    activeClassName: "active"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link"
  }, "Make a Booking"))), __jsx("li", {
    className: "nav-item"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/about",
    activeClassName: "active"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link"
  }, "View Future Bookings"))), __jsx("li", {
    className: "nav-item"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/about",
    activeClassName: "active"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link"
  }, "View Past Bookings"))))), __jsx("li", {
    className: "nav-item"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/badmintonfeatures",
    activeClassName: "active"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link"
  }, "Membership"))), __jsx("li", {
    className: "nav-item"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/bookfeatures",
    activeClassName: "active"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link"
  }, "About")))), __jsx("div", {
    className: "others-option"
  }, __jsx("div", {
    className: "subscribe"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/sign-in"
  }, __jsx("ul", {
    className: "navbar-nav",
    style: {
      marginRight: "auto"
    }
  }, __jsx("li", {
    className: "nav-item"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/",
    activeClassName: "active"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link"
  }, __jsx("span", null, __jsx("i", {
    className: "bx bx-log-out",
    style: {
      fontSize: '18px',
      fontWeight: '600',
      marginRight: '10px'
    }
  })), "Log Out")))))))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ })

};
;