exports.id = 6121;
exports.ids = [6121,1288];
exports.modules = {

/***/ 1805:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const BlogSidebar = () => {
  const {
    0: contact,
    1: setContact
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const url = "http://148.72.214.135:5000/api/blog_list";

  const getAllBlogs = () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default().get(url).then(response => {
      setContact(response.data["msg"]);
      const deta_blog = response.data["msg"];
      localStorage.setItem('blog_id', deta_blog._id);
      console.log(response.data.data, "yhgyhguyhghghghghghghgh");
    }).catch(err => {
      console.log("error me aa gi hu me");
      console.log(err);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getAllBlogs();
  }, []);
  return __jsx("div", {
    className: "widget-area left-sidebar",
    id: "secondary"
  }, __jsx("div", {
    className: "widget widget_search"
  }, __jsx("h3", {
    className: "widget-title"
  }, "Search Now"), __jsx("div", {
    className: "post-wrap"
  }, __jsx("form", {
    className: "search-form"
  }, __jsx("label", null, __jsx("span", {
    className: "screen-reader-text"
  }, "Search for:"), __jsx("input", {
    type: "search",
    className: "search-field",
    placeholder: "Search..."
  })), __jsx("button", {
    type: "submit"
  }, __jsx("i", {
    className: "bx bx-search"
  }))))), __jsx("div", {
    className: "widget widget-peru-posts-thumb"
  }, __jsx("h3", {
    className: "widget-title"
  }, "Popular Posts"), __jsx("div", {
    className: "post-wrap"
  }, __jsx("div", {
    className: "item"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/blog-details"
  }, __jsx("a", {
    className: "thumb"
  }, __jsx("span", {
    className: "fullimage cover bg1",
    role: "img"
  }))), __jsx("div", {
    className: "info"
  }, __jsx("span", {
    className: "time"
  }, "April 20, 2020"), __jsx("h4", {
    className: "title usmall"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/blog-details"
  }, __jsx("a", null, contact.name)))), __jsx("div", {
    className: "clear"
  })))), __jsx("div", {
    className: "widget widget_categories"
  }, __jsx("h3", {
    className: "widget-title"
  }, "Archives"), __jsx("div", {
    className: "post-wrap"
  }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "January ", __jsx("span", null, "2020"))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "February ", __jsx("span", null, "2020"))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "March ", __jsx("span", null, "2020"))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "April ", __jsx("span", null, "2020"))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "May ", __jsx("span", null, "2020"))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "June ", __jsx("span", null, "2020")))))), __jsx("div", {
    className: "widget widget_categories"
  }, __jsx("h3", {
    className: "widget-title"
  }, "Categories"), __jsx("div", {
    className: "post-wrap"
  }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "Antibiotic ", __jsx("span", null, "(10)"))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "Diseases ", __jsx("span", null, "(20)"))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "Health Care ", __jsx("span", null, "(10)"))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "Heart Rate ", __jsx("span", null, "(12)"))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "Hospital ", __jsx("span", null, "(16)"))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "Infectious ", __jsx("span", null, "(17)")))))), __jsx("div", {
    className: "widget widget_meta"
  }, __jsx("h3", {
    className: "widget-title"
  }, "Meta"), __jsx("div", {
    className: "post-wrap"
  }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "log-in.html"
  }, "Log in")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "Entries ", __jsx("abbr", {
    title: "Really Simple Syndication"
  }, "RSS"))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "Comments ", __jsx("abbr", {
    title: "Really Simple Syndication"
  }, "RSS"))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "WordPress.org"))))), __jsx("div", {
    className: "widget widget_tag_cloud"
  }, __jsx("h3", {
    className: "widget-title"
  }, "Tags"), __jsx("div", {
    className: "post-wrap"
  }, __jsx("div", {
    className: "tagcloud"
  }, __jsx("a", {
    href: "#"
  }, "Antibiotic (3)"), __jsx("a", {
    href: "#"
  }, "Diseases (3)"), __jsx("a", {
    href: "#"
  }, "Heart (2)"), __jsx("a", {
    href: "#"
  }, "Health (2)"), __jsx("a", {
    href: "#"
  }, "Hospital (1)"), __jsx("a", {
    href: "#"
  }, "Infectious ")))));
};

/* harmony default export */ __webpack_exports__["Z"] = (BlogSidebar);

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

/***/ }),

/***/ 4261:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const Subscribe = () => {
  return __jsx("div", {
    className: "subscribe-area"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row align-items-center"
  }, __jsx("div", {
    className: "col-lg-12"
  }, __jsx("h2", {
    style: {
      color: '#fff'
    }
  }, "Join the game!"), __jsx("p", {
    style: {
      color: '#fff',
      fontSize: '18px'
    }
  }, "When you hire a court or become a member, you know you\u2019re getting highly qualified", __jsx("br", null), " professionals who have the expertise and experience to make sure you get the best of everything"), __jsx("button", {
    className: "default-btn",
    type: "submit"
  }, "Book Now")))));
};

/* harmony default export */ __webpack_exports__["Z"] = (Subscribe);

/***/ })

};
;