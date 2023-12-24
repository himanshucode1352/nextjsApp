(function() {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 3588:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__(5994);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/_App/GoTop.js
var __jsx = (external_react_default()).createElement;

class GoTop extends external_react_.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const {
      is_visible
    } = this.state;
    return __jsx("div", {
      className: "scroll-to-top"
    }, is_visible && __jsx("div", {
      className: "go-top",
      onClick: () => this.scrollToTop()
    }, __jsx("i", {
      className: "bx bx-chevrons-up"
    }), __jsx("i", {
      className: "bx bx-chevrons-up"
    })));
  }

}
;// CONCATENATED MODULE: ./components/_App/Preloader.js
var Preloader_jsx = (external_react_default()).createElement;


const Preloader = () => {
  return Preloader_jsx("div", {
    className: "loader-wrapper"
  }, Preloader_jsx("div", {
    className: "loader"
  }), Preloader_jsx("div", {
    className: "loader-section section-left"
  }), Preloader_jsx("div", {
    className: "loader-section section-right"
  }));
};

/* harmony default export */ var _App_Preloader = (Preloader);
;// CONCATENATED MODULE: ./components/_App/Layout.js
var Layout_jsx = (external_react_default()).createElement;





const Layout = ({
  children
}) => {
  // Preloader
  const [loader, setLoader] = external_react_default().useState(true);
  external_react_default().useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);
  return Layout_jsx((external_react_default()).Fragment, null, Layout_jsx((head_default()), null, Layout_jsx("title", null, "Home"), Layout_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), Layout_jsx("meta", {
    name: "description",
    content: "Corf - React Medical Health & Clinic Template"
  }), Layout_jsx("meta", {
    name: "og:title",
    property: "og:title",
    content: "Corf - React Medical Health & Clinic Template"
  }), Layout_jsx("meta", {
    name: "twitter:card",
    content: "Corf - React Medical Health & Clinic Template"
  }), Layout_jsx("link", {
    rel: "canonical",
    href: "https://corf-react.envytheme.com/"
  })), children, loader ? Layout_jsx(_App_Preloader, null) : null, Layout_jsx(GoTop, {
    scrollStepInPx: "100",
    delayInMs: "10.50"
  }));
};

/* harmony default export */ var _App_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js

var _app_jsx = (external_react_default()).createElement;












const MyApp = ({
  Component,
  pageProps
}) => {
  return _app_jsx(_App_Layout, null, _app_jsx(Component, pageProps));
};

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 5994:
/***/ (function() {



/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(3588));
module.exports = __webpack_exports__;

})();