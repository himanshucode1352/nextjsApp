exports.id = 8805;
exports.ids = [8805];
exports.modules = {

/***/ 8805:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7895);
/* harmony import */ var _TopHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1706);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const Navbar = () => {
  const [menu, setMenu] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  }; // React.useEffect(() => {
  //     let elementId = document.getElementById("navbar");
  //     document.addEventListener("scroll", () => {
  //         if (window.scrollY > 170) {
  //             elementId.classList.add("is-sticky");
  //         } else {
  //             elementId.classList.remove("is-sticky");
  //         }
  //     });
  //     window.scrollTo(0, 0);
  // })


  const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("header", {
    className: "header-area fixed-top"
  }, __jsx(_TopHeader__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, null), __jsx("div", {
    className: "nav-area"
  }, __jsx("div", {
    id: "navbar",
    className: "navbar-area"
  }, __jsx("div", {
    className: "main-nav"
  }, __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-light"
  }, __jsx("div", {
    className: "container"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "navbar-brand"
  }, __jsx("h3", {
    style: {
      fontSize: '25px'
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
      marginLeft: 'auto'
    }
  }, __jsx("li", {
    className: "nav-item"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/",
    activeClassName: "active"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link"
  }, "Home"))), __jsx("li", {
    className: "nav-item"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    activeClassName: "active"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link"
  }, "About Us")), __jsx("ul", {
    className: "dropdown-menu"
  }, __jsx("li", {
    className: "nav-item"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/about",
    activeClassName: "active"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link"
  }, "Facilites"))))), __jsx("li", {
    className: "nav-item"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/badmintonfeatures",
    activeClassName: "active"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link"
  }, "Badminton"))), __jsx("li", {
    className: "nav-item"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/bookfeatures",
    activeClassName: "active"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link"
  }, "Book"))), __jsx("li", {
    className: "nav-item"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/contact",
    activeClassName: "active"
  }, __jsx("a", {
    onClick: toggleNavbar,
    className: "nav-link"
  }, "Contact Us")))), __jsx("div", {
    className: "others-option"
  }, __jsx("div", {
    className: "subscribe"
  }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/sign-in"
  }, __jsx("a", {
    className: "default-btn"
  }, "Book Now"))))))))))));
};

/* harmony default export */ __webpack_exports__["Z"] = (Navbar);

/***/ })

};
;